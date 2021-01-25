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
 * NOTE: async inside of loops is hard.
 * @param {Object<string, string[]>} locales The queue of slugs to be translated.
 * @returns {Promise<Object<string, Page[]>>}
 */
const getContent = async (locales) =>
  Object.entries(locales).reduce(async (accP, [locale, slugs]) => {
    const acc = await accP;
    return {
      ...acc,
      [locale]: await Promise.all(
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
 * @returns {(page: Page) => Promise<string>} A function that turns a page into a request.
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

  try {
    const resp = await fetch(url.href, options);
    const { response: resp } = await resp.json();
    const { code } = resp;

    if (code !== 'ACCEPTED' || !resp.ok) {
      throw new Error(code);
    }

    console.log(`[*] Successfully uploaded ${page.file}.`);
  } catch (error) {
    console.error(`[!] Unable to upload ${page.file}.`);
    console.error(error);
    process.exit(1);
  }
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
  const accessToken = await getAccessToken();
  const fileRequests = batchUids.flatMap((batchUid, idx) => {
    const [locale, localePages] = Object.entries(content)[idx];
    return localePages.map(uploadFile(locale, batchUid, accessToken));
  });

  const fileResponses = await Promise.all(fileRequests);

  console.log(`[*] Successfully uploaded ${fileResponses.length} files`);

  return { jobUids, batchUids };
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

/** Entrypoint. */
const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const { locales } = queue.Item;
  const content = await getContent(locales);

  try {
    const { batchUids } = await sendContentToVendor(content);

    await addToBeingTranslatedQueue(batchUids);
    console.log('[*] Saved batchUid(s) to the "being translated" queue');

    await saveToDB(table, key, 'set locales = :empty', { ':empty': {} });
    console.log('[*] Cleared out the "to be translated" queue');

    console.log(`[*] Done!`);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
    console.log(error);
    process.exit(1);
  }
};

main();
