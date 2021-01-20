const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');
const vendorRequest = require('./utils/vendor-request');

/**
 * @typedef Content
 * @property {string} file The filepath for the MDX file.
 * @property {string} content The text content to be translated.
 */

/**
 * Serialize all the content based on the slugs provided.
 * @param {Object<string, string[]>} queue The queue of slugs to be translated.
 * @returns {Object<string, Content[]>} The same queue, but with file contents.
 */
const getContent = (queue) =>
  Object.values(queue).reduce(
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
 * @returns {string[]} A list of vendor UIDs for the translation jobs.
 */
const sendContentToVendor = async (content) => {
  // 1) Create a batch job - save batch ID for storage
  // 2) Upload each file to the batch job

  // const { jobUid } = await vendorRequest('POST', '/jobs', content);

  return jobUids;
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
  const content = getContent(queue);

  try {
    // TODO: finalize this
    const jobUids = await sendContentToVendor(content);

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
