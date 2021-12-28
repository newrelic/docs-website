'use strict';
const {
  getJobs,
  updateJob,
  updateTranslation,
  getTranslationsJobsRecords,
} = require('./translation_workflow/database.js');

const { vendorRequest } = require('./utils/vendor-request');
const { fetchAndDeserialize } = require('./fetch-and-deserialize');
const { configuration } = require('./configuration');

const PROJECT_ID = configuration.TRANSLATION.VENDOR_PROJECT;

const uniq = (arr) => [...new Set(arr)];
const prop = (key) => (x) => x[key];

/**
 * @typedef {Object} Batch
 * @property {string} batchUid
 * @property {string} locale The vendor-based locale (i.e. "ja-JP")
 * @property {string[]} fileUris The filepath from the root of the project
 * @property {boolean} done
 * @property {number} jobId
 */

/**
 * @param {string} message
 * @param {string} [level] - Either "log" or "warn" (defaults to "log")
 * @param {number} [indent] - Extra padding before indicator (defaults to 0)
 */
const log = (message, level = 'log', indent = 0) => {
  const logIndicators = { log: '[*]', warn: '[!]' };

  const str = [
    Array(indent)
      .fill(' ')
      .join(''),
    logIndicators[level],
    message,
  ].join('');

  console.log(str);
};

/**
 * @returns {(batchUid: string) => Promise<Batch>}
 */
const getBatchStatus = async ({ batchUid, jobId }) => {
  log(`Getting status for batch: ${batchUid}`);

  try {
    // get the information about this batch request
    const batchData = await vendorRequest({
      method: 'GET',
      endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}`,
    });

    const { translationJobUid } = batchData;

    // filter out any files that have been manually cancelled
    // on the vendor's platform
    const files = batchData.files.filter((file) => file.status !== 'CANCELED');
    const locale =
      files[0].targetLocales.length && files[0].targetLocales[0].localeId;

    if (!locale) {
      log(`Unable to determine locale for batch ${batchUid}`, 'warn');
    }

    // get the information about the job this batch is associated with
    const jobData = await vendorRequest({
      method: 'GET',
      endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs/${translationJobUid}`,
    });

    const { jobStatus } = jobData;

    return {
      batchUid,
      done: jobStatus === 'COMPLETED',
      locale,
      fileUris: files.map((file) => file.fileUri),
      jobId,
    };
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    // if the batch / job cant be found, return null and process the rest
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
  try {
    // load the items that we are being translated
    const inProgressJobs = await getJobs({
      status: 'IN_PROGRESS',
      project_id: PROJECT_ID,
    });
    const batchUids = inProgressJobs.map((job) => {
      return { batchUid: job.batch_uid, jobId: job.id };
    });

    // get the status for all of the batch translation jobs
    const batchStatuses = await Promise.all(batchUids.map(getBatchStatus));

    // filter out any jobs that aren't ready to be brought back into the site
    const batchesToDeserialize = batchStatuses.filter(
      (batch) => batch && batch.done
    );

    const completedJobs = await Promise.all(
      batchesToDeserialize.map((batch) => {
        return updateJob(batch.jobId, { status: 'COMPLETED' });
      })
    );

    log(`Jobs completed: ${JSON.stringify(completedJobs)}`);

    log(`${batchesToDeserialize.length} batches ready to be deserialized`);
    log(`batchUids: ${batchesToDeserialize.map(prop('batchUid')).join(', ')}`);

    console.log(
      `::set-output name=batchesToDeserialize::${batchesToDeserialize.length}`
    );

    // download the newly translated files and deserialize them (into MDX)
    await Promise.all(batchesToDeserialize.map(fetchAndDeserialize));
    log('Content deserialized');

    for (const batch of batchesToDeserialize) {
      const records = await getTranslationsJobsRecords({
        job_id: batch.jobId,
      });

      await Promise.all(
        records.map(async (record) => {
          const update = await updateTranslation(record.translation_id, {
            status: 'COMPLETED',
          });
          return update;
        })
      );
    }

    // get a list of batches that we're still waiting on from our vendor
    const remainingBatches = batchStatuses
      .filter((batch) => batch && !batch.done)
      .map((batch) => batch.batchUid);

    console.log(
      `::set-output name=batchUids::${
        remainingBatches.length ? remainingBatches.join(',') : ','
      }`
    );

    console.log(
      `::set-output name=completedBatches::${
        batchesToDeserialize.length ? batchesToDeserialize.join(',') : ','
      }`
    );

    // Output a list of new translated files for the next step in the workflow
    // (creating a new PR with the translated content)
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
