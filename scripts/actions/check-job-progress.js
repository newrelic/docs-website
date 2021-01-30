const loadFromDB = require('./utils/load-from-db');

const { getAccessToken, vendorRequest } = require('./utils/vendor-request');
const fetchAndDeserialize = require('./fetch-and-deserialize');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

/**
 * @typedef {Object} Batch
 * @property {string} batchUid
 * @property {string} locale The vendor-based locale (i.e. "ja-JP")
 * @property {string[]} fileUris The filepath from the root of the project
 * @property {boolean} done
 */

/**
 * @param {string} accessToken
 * @returns {(batchUid: string) => Promise<Batch>}
 */
const getBatchStatus = (accessToken) => async (batchUid) => {
  const batchData = await vendorRequest({
    method: 'GET',
    endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}`,
    accessToken,
  });

  const { status, files, translationJobUid } = batchData;

  const jobData = await vendorRequest({
    method: 'GET',
    endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs/${translationJobUid}`,
    accessToken,
  });

  const { jobStatus } = jobData;

  return {
    batchUid,
    done: jobStatus === 'COMPLETED',
    locale: files[0].targetLocales[0].localeId,
    fileUris: files.map((file) => file.fileUri),
  };
};

/** Entrypoint. */
const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  try {
    const queue = await loadFromDB(table, key);
    const { batchUids } = queue.Item;

    const accessToken = await getAccessToken();

    const batchStatuses = await Promise.all(
      batchUids.map(getBatchStatus(accessToken))
    );

    const batchesToDeserialize = batchStatuses.filter(
      (batch) => batch && batch.done
    );
    console.log(
      `[*] ${batchesToDeserialize.length} batches ready to be deserialized`
    );
    await Promise.all(
      batchesToDeserialize.map(fetchAndDeserialize(accessToken))
    );
    console.log('[*] Content deserialized');

    const remainingBatches = batchStatuses
      .filter((batch) => batch && !batch.done)
      .map((batch) => batch.batchUid);

    console.log(
      `::set-output name=batchUids::${JSON.stringify(remainingBatches)}`
    );

    process.exit(0);
  } catch (error) {
    console.error(`[!] Unable to check job status`);
    console.log(error);
    process.exit(1);
  }
};

main();
