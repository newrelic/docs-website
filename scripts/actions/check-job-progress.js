const loadFromDB = require('./utils/load-from-db');
const fetchAndDeserialize = require('./fetch-and-deserialize');
const { getAccessToken, vendorRequest } = require('./utils/vendor-request');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

/**
 * @typedef {Object} BatchStatus
 * @property {string} batchUid
 * @property {string} locale The vendor-based locale (i.e. "ja-JP")
 * @property {string[]} fileUris The filepath from the root of the project
 * @property {boolean} done
 */

/**
 * @param {string} accessToken
 * @returns {(batchUid: string) => Promise<BatchStatus>}
 */
const getBatchStatus = (accessToken) => async (batchUid) => {
  const resp = await vendorRequest({
    method: 'GET',
    endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs/${batchUid}`,
    accessToken,
  });

  const { status, files } = resp.response.data;

  return {
    batchUid,
    done: status === 'COMPLETED',
    locale: files[0].targetLocales[0].localeId,
    fileUris: files.map((file) => file.fileUri),
  };
};

const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  try {
    const queue = await loadFromDB(table, key);
    const { batchUids } = queue.Item;

    const accessToken = await getAccessToken();

    const batchesToDeserialize = await Promise.all(
      batchUids.map(getBatchStatus(accessToken))
    ).filter((batch) => batch && batch.done);
    console.log(
      `[*] ${batchesToDeserialize.length} batches ready to be deserialized`
    );

    await fetchAndDeserialize(batchesToDeserialize, accessToken);
    console.log('[*] Content deserialized');

    // TODO: update queue to remove batchUid
    console.log('[*] "Being translated" queue updated');

    process.exit(0);
  } catch (error) {
    console.error(`[!] Unable to check job status`);
    console.log(error);
    process.exit(1);
  }
};

main();
