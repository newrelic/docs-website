const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');

// TODO: update this with real URL
const VENDOR_API_URL = '';

/**
 * @typedef Content
 * @property {string} file The filepath for the MDX file.
 * @property {string} content The text content to be translated.
 */

/**
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
 * @returns {string[]} A list of UUIDs for the translation jobs.
 */
const sendContentToVendor = async (content) => {
  // TODO: transform this into whatever their API expects
  const body = content;

  // TODO: add API authentication via env variable
  const resp = await fetch(VENDOR_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  });

  const uuids = await resp.json();

  // TODO: transform uuids into an array of strings
  return uuids;
};

/**
 * @param {string[]} uuids A list of UUIDs to be added to the `being_translated` queue.
 */
const addToBeingTranslatedQueue = async (uuids) => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  const queue = await loadFromDB(table, key);

  await saveToDB(table, key, 'set uuids = :uuids', {
    ':uuids': [...queue, ...uuids],
  });
};

/** Entrypoint. */
const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const content = getContent(queue);

  try {
    const uuids = await sendContentToVendor(content);

    // clear out `to_translate` queue
    await saveToDB(table, key, 'set locales = :empty', { ':empty': {} });

    // save uuids to `being_translated` queue
    await addToBeingTranslatedQueue(uuids);

    console.log(`[*] Successfully sent to vendor`);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
    console.log(error);
    process.exit(1);
  }
};

main();
