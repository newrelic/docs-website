const loadFromDB = require('./utils/load-from-db');

const { getAccessToken, vendorRequest } = require('./utils/vendor-request');
const fetchAndDeserialize = require('./fetch-and-deserialize');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

const uniq = (arr) => [...new Set(arr)];
const prop = (key) => (x) => x[key];

const log = (message, level = 'log', indent = 0) => {
  const logIndicators = { log: '[*]', warn: '[!]' };
  const str = `${logIndicators[level]}${Array(indent)
    .fill(' ')
    .join('')}${message}`;

  console.log(str);
};

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
  log(`Getting status for batch: ${batchUid}`);
  try {
    const batchData = await vendorRequest({
      method: 'GET',
      endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}`,
      accessToken,
    });

    const { status, translationJobUid } = batchData;

    const files = batchData.files.filter((file) => file.status !== 'CANCELED');
    const locale =
      files[0].targetLocales.length && files[0].targetLocales[0].localeId;

    if (!locale) {
      log(`Unable to determine locale for batch ${batchUid}`, 'warn');
    }

    const jobData = await vendorRequest({
      method: 'GET',
      endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs/${translationJobUid}`,
      accessToken,
    });

    const { jobStatus } = jobData;

    return {
      batchUid,
      done: jobStatus === 'COMPLETED',
      locale,
      fileUris: files.map((file) => file.fileUri),
    };
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    // if the batch cant be found, return null and process the rest
    if (errors.map(prop('key')).includes('batch.not.found')) {
      for (const { message } of errors) {
        log(message, 'warn', 4);
      }

      return null;
    }

    // otherwise, something wrong happened, stop the script
    throw error;
  }
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

    log(`${batchesToDeserialize.length} batches ready to be deserialized`);
    log(`batchUids: ${batchesToDeserialize.map(prop('batchUid')).join(', ')}`);

    console.log(
      `::set-output name=batchesToDeserialize::${batchesToDeserialize.length}`
    );

    await Promise.all(
      batchesToDeserialize.map(fetchAndDeserialize(accessToken))
    );
    log('Content deserialized');

    const remainingBatches = batchStatuses
      .filter((batch) => batch && !batch.done)
      .map((batch) => batch.batchUid);

    console.log(
      `::set-output name=batchUids::${
        remainingBatches.length ? remainingBatches.join(',') : ','
      }`
    );

    const deserializedFileUris = uniq(
      batchesToDeserialize.reduce(
        (acc, { fileUris }) => [...fileUris, ...acc],
        []
      )
    );

    console.log(
      `::set-output name=deserializedFileUris::${deserializedFileUris.join(
        ','
      )}`
    );

    process.exit(0);
  } catch (error) {
    log(`Unable to check job status`, 'warn');
    console.log(error);
    process.exit(1);
  }
};

main();
