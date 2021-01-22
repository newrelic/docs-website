const fs = require('fs');
const path = require('path');
const https = require('http');
const FormData = require('form-data');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');
const { vendorRequest, getAccessToken } = require('./utils/vendor-request');

/**
 * @typedef {Object} Page
 * @property {string} file The filepath for the page (from the project root).
 * @property {string} html The HTML serialized content for the page.
 */

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
};

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

/**
 * Take a list of filepaths (grouped by locale) and fetches the HTML content.
 * @param {Object<string, string[]>} locales The queue of slugs to be translated.
 * @returns {Object<string, Page[]>}
 */
const getContent = (locales) =>
  Object.entries(locales).reduce(
    (content, [locale, slugs]) => ({
      ...content,
      [locale]: slugs
        .map((slug) => {
          const html = fs.readFileSync(path.join(process.cwd(), slug));
          // TODO: transform MDX -> vendor format
          return {
            file: slug,
            html: html ? html : false,
          };
        })
        .filter((page) => Boolean(page.html)),
    }),
    {}
  );

/**
 * @param {string} locale The locale that this file should be translated to.
 * @param {string} batchUid The batch that is expecting this file.
 * @returns {(page: Page) => Promise} A function that turns a page into a request.
 */
const uploadFile = async (locale, batchUid) => (page) => {
  // TODO: do we really need to make a file just to get it as a stream / buffer
  const filepath = '/tmp/toTranslate.html';
  fs.writeFileSync(filepath, page.html, 'utf-8');

  const form = new FormData();
  form.append('fileType', 'html');
  form.append('localeIdsToAuthorize[]', LOCALE_IDS[locale]);
  form.append('fileUri', page.file);
  form.append('file', fs.createReadStream(filepath));

  const accessToken = await getAccessToken();

  const options = {
    method: 'POST',
    host: process.env.TRANSLATION_VENDOR_API_URL,
    path:
      `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}/file`,
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return new Promise((resolve, reject) => {
    const request = https.request(options);
    form.pipe(request);

    request.on('response', (resp) => {
      return resp.statusCode >= 400 ? reject(resp) : resolve(resp);
    });
  });
};

/**
 * Sends HTML content to the vendor by creating jobs, batches, and uploading
 * files. On success, this will return the jobUid and batchUid for each locale.
 * @param {Object<string, Page[]>} content
 * @returns {Promise<{ jobUids: string[], batchUids: string[]}>}
 */
const sendContentToVendor = async (content) => {
  // 1) Create a job for each locale - save the jobUid for storage
  const jobRequests = Object.keys(content).map((locale) => {
    const body = {
      jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
      targetLocaleIds: [LOCALE_IDS[locale]],
    };
    return vendorRequest(
      'POST',
      `/jobs-api/v3/projects/${PROJECT_ID}/jobs`,
      body
    );
  });

  const jobsResponses = await Promise.all(jobRequests);
  const jobUids = jobsResponses.map((resp) => resp.translationJobUid);
  console.log(`[*] Successfully created jobs: ${jobUids.join(', ')}`);

  // 2) Create a batch for each job - save bachUid for storage
  const pages = Object.values(content);
  const batchRequests = jobUids.map((jobUid, idx) => {
    const body = {
      authorize: false,
      translationJobUid: jobUid,
      fileUris: pages[idx].map(({ file }) => file),
    };

    return vendorRequest(
      'POST',
      `/job-batches-api/v2/projects/${PROJECT_ID}/batches`,
      body
    );
  });

  const batchResponses = await Promise.all(batchRequests);
  const batchUids = batchResponses.map((resp) => resp.batchUid);
  console.log(`[*] Successfully created batches: ${batchUids.join(', ')}`);

  // 3) Upload files to the batches job
  const fileRequests = batchUids.flatMap((batchUid, idx) => {
    const [locale, localePages] = Object.entries(content)[idx];
    return localePages.map(uploadFile(locale, batchUid));
  });

  const fileResponses = await Promise.all(fileRequests);
  console.log(fileResponses);
  console.log(`[*] Successfully uploaded ${fileResponses.length} files`);

  // 4) Upload context for each file

  // 5) Check status of job and batch
  // batch status: DRAFT -> ADDING_FILES -> EXECUTING -> COMPLETED
  // job status: AWAITING_AUTHORIZATION -> IN_PROGRESS (CANCELLED)

  return { jobUids, batchUids };
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
    const { jobUids, batchUids } = await sendContentToVendor(content);
    // TODO: remove this and proceed to the next steps below
    console.log({ jobUids, batchUids });
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
