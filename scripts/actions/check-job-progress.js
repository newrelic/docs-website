/* eslint-disable no-console */
'use strict';
const core = require('@actions/core');
const {
  getJobs,
  updateJob,
  getTranslationsJobsRecords,
  updateTranslations,
  StatusEnum,
} = require('./translation_workflow/database.js');

const { vendorRequest } = require('./utils/vendor-request');
const { fetchAndDeserializeFiles } = require('./fetch-and-deserialize');
const { configuration } = require('./configuration');
const {
  trackTranslationError,
  trackTranslationEvent,
  TRACKING_TARGET,
} = require('./utils/translation-monitoring.js');

const PROJECT_ID = configuration.TRANSLATION.VENDOR_PROJECT;

const defaultTrackingMetadata = {
  projectId: PROJECT_ID,
  workflow: 'checkAndDeserialize',
};

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
 * @typedef {Object} Results
 * @property {number} successes - count of successes.
 * @property {number} failures - count of failures.
 */

/**
 * @typedef {Object<string, Results>} JobStatuses - Object whose top level keys are job ids, and whose values are Results.
 */

/**
 * @typedef {Object} AggregateResults
 * @property {JobStatuses} jobStatuses
 * @property {number} totalSuccesses - Sum of successes across all jobs
 * @property {number} totalFailures - Sum of failures across all jobs
 */

/**
 * @typedef {Object} SlugStatus
 * @property {boolean} SlugStatus[].ok - Boolean flag signaling if translation deserialized. If it did, we can treat this translation as having completed.
 * @property {string} SlugStatus[].slug - Slug representing file path translated.
 * @property {string} SlugStatus[].jobId - Job id translation is associated with.
 * @property {string} SlugStatus[].locale - Locale ID translation is translated to.
 */

/**
 * @param {string} message
 * @param {string} [level] - Either "log" or "warn" (defaults to "log")
 * @param {number} [indent] - Extra padding before indicator (defaults to 0)
 */
const log = (message, level = 'log', indent = 0) => {
  const logIndicators = { log: '[*]', warn: '[!]' };

  const str = [
    Array(indent).fill(' ').join(''),
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
      await trackTranslationError({
        ...defaultTrackingMetadata,
        target: TRACKING_TARGET.JOB,
        jobId,
        errorMessage: `Unable to determine locale for batch ${batchUid}`,
      });
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

    await trackTranslationError({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.JOB,
      error,
      errorMessage: `Unable to get batch status`,
      jobId,
    });

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

/**
 * @param {SlugStatus[]} erroredStatuses
 * @returns void
 */
const logErroredStatuses = (erroredStatuses) => {
  erroredStatuses.forEach(({ ok, slug }) => {
    if (!ok) {
      return log(`Translation errored: ${slug}`, 'warn', 4);
    }
    return log(
      `The translation ${slug} is ok and should be set to COMPLETED`,
      'warn',
      4
    );
  });
};

/**
 * @param {SlugStatus[]} slugStatuses
 * @returns {AggregateResults}
 */
const aggregateStatuses = (slugStatuses) => {
  let totalFailures = 0;
  let totalSuccesses = 0;
  const jobStatuses = {};

  slugStatuses.forEach(({ ok, jobId }) => {
    if (!(jobId in jobStatuses)) {
      jobStatuses[jobId] = { successes: 0, failures: 0 };
    }

    if (ok) {
      totalSuccesses += 1;
      jobStatuses[jobId].successes += 1;
    } else {
      totalFailures += 1;
      jobStatuses[jobId].failures += 1;
    }
  });

  return { totalFailures, totalSuccesses, jobStatuses };
};

/**
 * @param {SlugStatus[]} slugStatuses
 * @returns {Promise<void>}
 */
const updateTranslationRecords = async (project_id, slugStatuses) => {
  await Promise.all(
    slugStatuses.map(async ({ locale, slug }) => {
      const records = await updateTranslations(
        { slug, status: StatusEnum.IN_PROGRESS, locale, project_id },
        { status: StatusEnum.COMPLETED }
      );

      console.log(
        `Translation ${records[0].id} marked as ${StatusEnum.COMPLETED}`
      );
    })
  );
};

/**
 * @param {JobStatuses} jobStatuses
 * @returns {Promise<void>}
 */
const updateJobRecords = async (jobStatuses) => {
  await Promise.all(
    Object.keys(jobStatuses).map(async (job_id) => {
      const { successes, failures } = jobStatuses[job_id];

      const records = await getTranslationsJobsRecords({
        job_id,
      });

      if (successes + failures === records.length) {
        const updateStatus =
          failures > 0 ? StatusEnum.ERRORED : StatusEnum.COMPLETED;

        await updateJob(job_id, { status: updateStatus });

        console.log(`Job ${job_id} marked as ${updateStatus}`);
      } else {
        console.log(
          `Mismatched translation counts. Expected ${records.length}, actual ${
            successes + failures
          }`
        );
      }
    })
  );
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

    log(`${batchesToDeserialize.length} batches ready to be deserialized`);
    log(`batchUids: ${batchesToDeserialize.map(prop('batchUid')).join(', ')}`);

    core.setOutput('batchesToDeserialize', batchesToDeserialize.length);

    // download the newly translated files and deserialize them (into MDX).
    const slugStatuses = (
      await Promise.all(
        batchesToDeserialize.map(async (batch) => {
          return (await fetchAndDeserializeFiles(batch)).map((status) => {
            return { ...status, jobId: batch.jobId };
          });
        })
      )
    ).flat();

    const erroredStatuses = slugStatuses.filter(({ ok }) => !ok);

    logErroredStatuses(erroredStatuses);

    await updateTranslationRecords(PROJECT_ID, slugStatuses);

    const results = aggregateStatuses(slugStatuses);

    console.log(
      `Final results --- ${results.totalSuccesses} files completed, ${results.totalFailures} files errored.`
    );

    core.setOutput('successfulTranslations', results.totalSuccesses);
    core.setOutput('failedTranslations', results.totalFailures);

    await trackTranslationEvent({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      totalSuccesses: results.totalSuccesses,
      totalFailures: results.totalFailures,
    });

    await updateJobRecords(results.jobStatuses);

    process.exit(0);
  } catch (error) {
    await trackTranslationError({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      error,
      errorMessage: `Unable to check job status`,
    });

    log(`Unable to check job status`, 'warn');
    console.log(error);
    process.exit(1);
  }
};

/**
 * This allows us to check if the script was invoked directly from the command line, i.e 'node validate_packs.js', or if it was imported.
 * This would be true if this was used in one of our GitHub workflows, but false when imported for use in a test.
 * See here: https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
 */
if (require.main === module) {
  main();
}

module.exports = {
  getBatchStatus,
  aggregateStatuses,
  updateTranslationRecords,
  updateJobRecords,
  logErroredStatuses,
};
