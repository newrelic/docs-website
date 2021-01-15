const fs = require('fs');
const path = require('path');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');

// TODO
const getContent = (queue) => {
  return {};
};

// TODO
const sendContentToVendor = async (content) => {
  return [];
};

// TODO
const addToBeingTranslatedQueue = async (uuids) => {
  return null;
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
