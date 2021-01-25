const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');
const serializeMDX = require('./serialize-mdx');
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
 * @returns {Object<string, Promise<Page[]>>}
 */
const getContent = async (locales) =>
  Object.entries(locales).reduce((acc, [locale, slugs]) => {
    return {
      ...acc,
      [locale]: Promise.all(
        slugs.map(async (slug) => {
          const mdx = fs.readFileSync(path.join(process.cwd(), slug));
          const html = await serializeMDX(mdx);
          return { file: slug, html };
        })
      ),
    };
  }, {});

/**
 * @param {string} locale The locale that this file should be translated to.
 * @param {string} batchUid The batch that is expecting this file.
 * @param {string} accessToken
 * @returns {(page: Page) => Promise<{code: string, slug: string, locale: string>}
 */
const uploadFile = (locale, batchUid, accessToken) => async (page) => {
  const filename = `${Buffer.from(locale + page.file).toString('base64')}.html`;
  const filepath = path.join(process.cwd(), filename);
  fs.writeFileSync(filepath, page.html, 'utf8');

  const form = new FormData();
  form.append('fileType', 'html');
  form.append('localeIdsToAuthorize[]', LOCALE_IDS[locale]);
  form.append('fileUri', page.file);
  form.append('file', fs.createReadStream(filepath));

  const url = new URL(
    `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}/file`,
    process.env.TRANSLATION_VENDOR_API_URL
  );

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: form,
  };

  const resp = await fetch(url.href, options);
  const { response } = await resp.json();
  const { code } = response;

  if (code === 'ACCEPTED' && resp.ok) {
    console.log(`[*] Successfully uploaded ${page.file}.`);
  } else {
    console.error(`[!] Unable to upload ${page.file}.`);
  }

  return { code, locale, slug: page.file };
};

/**
 * Sends HTML content to the vendor by creating jobs, batches, and uploading
 * files. On success, this will return the batchUid for each locale.
 * @param {Object<string, Page[]>} content
 * @param {string} accessToken
 * @returns {Promise<{batchUids: string[], fileResponses: Object[]>}
 */
const sendContentToVendor = async (content, accessToken) => {
  // 1) Create a job for each locale - save the jobUid for storage
  const jobRequests = Object.keys(content).map((locale) => {
    const body = {
      jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
      targetLocaleIds: [LOCALE_IDS[locale]],
    };
    return vendorRequest({
      method: 'POST',
      endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs`,
      body,
      accessToken,
    });
  });

  const jobsResponses = await Promise.all(jobRequests);
  const jobUids = jobsResponses.map((resp) => resp.translationJobUid);
  console.log(`[*] Successfully created jobs: ${jobUids.join(', ')}`);

  // 2) Create a batch for each job - save bachUid for storage
  const pages = await Promise.all(Object.values(content));
  const batchRequests = jobUids.map((jobUid, idx) => {
    const body = {
      authorize: false,
      translationJobUid: jobUid,
      fileUris: pages[idx].map(({ file }) => file),
    };

    return vendorRequest({
      method: 'POST',
      endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches`,
      body,
      accessToken,
    });
  });

  const batchResponses = await Promise.all(batchRequests);
  const batchUids = batchResponses.map((resp) => resp.batchUid);
  console.log(`[*] Successfully created batches: ${batchUids.join(', ')}`);

  // 3) Upload files to the batches job
  const fileRequests = batchUids.flatMap((batchUid, idx) => {
    const [locale, localePages] = Object.entries(content)[idx];
    return localePages.map(uploadFile(locale, batchUid, accessToken));
  });

  const fileResponses = await Promise.all(fileRequests);
  const numSuccess = fileResponses.filter(({ code }) => code === 'ACCEPTED');

  console.log(
    `[*] Successfully uploaded ${numSuccess} / ${fileResponses.length} files`
  );

  return { batchUids, fileResponses };
};

/**
 * @param {string[]} batchUids A list of vendor UIDs to be added to the `being_translated` queue.
 */
const addToBeingTranslatedQueue = async (batchUids) => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  const queue = await loadFromDB(table, key);

  // If this field is empty/returns as empty object
  if (Object.keys(queue).length === 0) {
    queue.Item.batchUids = [];
  }

  await saveToDB(table, key, 'set batchUids = :batchUids', {
    ':batchUids': [...queue.Item.batchUids, ...batchUids],
  });
};

/**
 * Clears out the "to be translated" queue, except for the files that did not upload successfully.
 * @param {{code: "ACCEPTED" | string, locale: string, slug: string}[]} fileResponses
 * @returns {Promise}
 */
const removeFilesBeingTranslated = async (fileResponses) => {
  const failedUploads = fileResponses.filter(({ code }) => code !== 'ACCEPTED');

  const updatedLocales = failedUploads.reduce(
    (acc, page) => ({
      ...acc,
      [page.locale]: [...acc[page.locale], page.slug],
    }),
    {}
  );

  await saveToDB(
    'TranslationQueues',
    { type: 'to_translate' },
    'set locales = :locales',
    { ':locales': updatedLocales }
  );

  if (failedUploads.length) {
    console.log(
      `[*] ${failedUploads.length} pages remaining in "to be translated" queue`
    );
  } else {
    console.log('[*] Cleared out the "to be translated" queue');
  }
};

/** Entrypoint. */
const main = async () => {
  const queue = await loadFromDB('TranslationQueues', { type: 'to_translate' });
  const { locales } = queue.Item;
  const content = await getContent(locales);

  try {
    const accessToken = await getAccessToken();
    const { batchUids, fileResponses } = await sendContentToVendor(
      content,
      accessToken
    );

    await addToBeingTranslatedQueue(batchUids);
    console.log('[*] Saved batchUid(s) to the "being translated" queue');

    await removeFilesBeingTranslated(fileResponses);

    console.log(`[*] Done!`);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
    console.log(error);
    process.exit(1);
  }
};

main();
