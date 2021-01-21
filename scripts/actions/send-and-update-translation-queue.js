const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const FormData = require('form-data');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');
const vendorRequest = require('./utils/vendor-request');

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
};

/**
 * @typedef Content
 * @property {string} file The filepath for the MDX file.
 * @property {string} content The text content to be translated.
 */

/**
 * Serialize all the content based on the slugs provided.
 * @param {Object<string, string[]>} locales The queue of slugs to be translated.
 * @returns {Object<string, Content[]>} The same queue, but with file contents.
 */
const getContent = (locales) =>
  Object.entries(locales).reduce(
    (content, [locale, slugs]) => ({
      ...content,
      [locale]: slugs
        .map((slug) => {
          const contents = fs.readFileSync(path.join(process.cwd(), slug));
          // TODO: transform MDX -> vendor format
          return {
            file: slug,
            contents: contents ? contents : false,
          };
        })
        .filter((page) => Boolean(page.contents)),
    }),
    {}
  );

/**
 * @param {Object<string, Content[]>} content Content to be translated.
 * @returns {Promise<{ jobUid: string, batchUid: string}>} A list of vendor UIDs for the translation jobs.
 */
const sendContentToVendor = async (content) => {
  const projectId = process.env.TRANSLATION_VENDOR_PROJECT;
  // 1) Create a job for each locale - save the jobUid for storage
  const jobRequests = Object.keys(content).map((locale) => {
    const body = {
      jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
      targetLocaleIds: [LOCALE_IDS[locale]],
    };
    return vendorRequest(
      'POST',
      `/jobs-api/v3/projects/${projectId}/jobs`,
      body
    );
  });

  const jobsResponses = await Promise.all(jobRequests);
  const jobUids = jobsResponses.map((resp) => resp.translationJobUid);

  // 2) Create a batch for the job - save bachUid for storage

  const batchRequests = jobUids.map((jobUid, idx) => {
    const body = {
      authorize: false,
      translationJobUid: jobUid,
      fileUris: Object.values(content)[idx].map(({ file }) => file),
    };

    return vendorRequest(
      'POST',
      `/job-batches-api/v2/projects/${projectId}/batches`,
      body
    );
  });

  const batchResponses = await Promise.all(batchRequests);
  const batchUids = batchResponses.map((resp) => resp.batchUid);

  // 3) Upload each file to the batch job

  const fileRequests = batchUids.flatMap((batchUid, idx) => {
    const [locale, pages] = Object.entries(content)[idx];
    return pages.map((page) => {
      const form = new FormData();

      form.append('fileType', 'html');
      form.append('localeIdsToAuthorize[]', LOCALE_IDS[locale]);
      form.append('fileUri', page.file);
      form.append('file', page.contents, {
        contentType: 'text/html',
        name: 'file',
        filename: page.file,
      });

      return vendorRequest(
        'POST',
        `/job-batches-api/v2/projects/${projectId}/batches/${batchUid}/file`,
        form,
        'multipart/form-data'
      );
    });
  });

  const fileResponses = await Promise.all(fileRequests);

  console.log(fileResponses);

  // 4) Upload context for each file

  // 5) Check status of job and batch

  // batch status: DRAFT -> ADDING_FILES -> EXECUTING -> COMPLETED
  // job status: AWAITING_AUTHORIZATION -> IN_PROGRESS (CANCELLED)
};

/**
 * @param {string[]} jobUids A list of vendor UIDs to be added to the `being_translated` queue.
 */
const addToBeingTranslatedQueue = async (jobUids) => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  const queue = await loadFromDB(table, key);

  await saveToDB(table, key, 'set jobUids = :jobUids', {
    ':jobUids': [...queue, ...jobUids],
  });
};

/** Entrypoint. */
const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const { locales } = queue.Item;
  const content = getContent(locales);

  try {
    // TODO: finalize this (return a list of jobUids and batchUids)
    const batchUids = await sendContentToVendor(content);
    // TODO: remove this and proceed to the next steps below
    console.log('batchUids', batchUids);
    process.exit(0);

    // clear out `to_translate` queue
    await saveToDB(table, key, 'set locales = :empty', { ':empty': {} });

    // save jobUids to `being_translated` queue
    await addToBeingTranslatedQueue(jobUids);

    console.log(`[*] Successfully sent to vendor`);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
    console.log(error);
    process.exit(1);
  }
};

main();
