/* eslint-disable no-console */
// / <reference path="./translation_workflow/models/typedefs.js" />
'use strict';

const fs = require('fs');
const path = require('path');

const { vendorRequest, uploadFile } = require('./utils/vendor-request');
const Database = require('./translation_workflow/database');
const {
  trackTranslationError,
  trackTranslationEvent,
  TRACKING_TARGET,
} = require('./utils/translation-monitoring');

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

const defaultTrackingMetadata = {
  projectId: PROJECT_ID,
  workflow: 'sendAndUpdateTranslationQueue',
};

/**
 *
 * @returns {Promise<Object.<string, Translation[]>>} object whose keys are locales, whose values are an array of translation requests for that locale
 */
const getReadyToGoTranslationsForEachLocale = async () => {
  const [
    pendingTranslations,
    inProgressTranslations,
    erroredTranslations,
  ] = await Promise.all([
    Database.getTranslations({ status: 'PENDING', project_id: PROJECT_ID }),
    Database.getTranslations({ status: 'IN_PROGRESS', project_id: PROJECT_ID }),
    Database.getTranslations({ status: 'ERRORED', project_id: PROJECT_ID }),
  ]);

  /*
   * We only want to send a translation if:
   * 1. It's in a pending state.
   * 2. There isn't a matching record whose status === 'IN_PROGRESS'. A record matches if there exists another record with the same slug and locale.
   * 3. There isn't a matching record whose status === 'ERRORED'. A record matches if there exists another record with the same slug and locale.
   *
   * This is to avoid sending multiple translation requests for {hello_world.txt, ja-JP} as an example, and allows us to have an in progress translation, and one ready to go that is queued up in the database.
   *
   * 3. The file (slug) that is associated with the translation record still exists.
   */
  const translationsToDelete = [];

  const readyToGoTranslations = pendingTranslations
    .filter(
      (pendingTranslation) =>
        !inProgressTranslations.find(
          (inProgressTranslation) =>
            pendingTranslation.slug === inProgressTranslation.slug &&
            pendingTranslation.locale === inProgressTranslation.locale
        )
    )
    .filter(
      (pendingTranslation) =>
        !erroredTranslations.find(
          (erroredTranslation) =>
            pendingTranslation.slug === erroredTranslation.slug &&
            pendingTranslation.locale === erroredTranslation.locale
        )
    )
    .filter((translation) => {
      const fileExists = fs.existsSync(
        path.join(process.cwd(), translation.slug)
      );
      if (fileExists === false) {
        // delete row since we dont want to leave it in, and should be safe to delete
        translationsToDelete.push(translation);
      }
      return fileExists;
    });

  // delete all translations identified for deletion above
  await Promise.all(
    translationsToDelete.map(async (translation) => {
      await Database.deleteTranslation(translation.id);
      console.log(`Database record for -- ${translation.id} -- deleted`);
    })
  );

  const translationsPerLocale = {};
  for (const translation of readyToGoTranslations) {
    translationsPerLocale[translation.locale] = [
      ...(translationsPerLocale[translation.locale] || []),
      translation,
    ];
  }

  return translationsPerLocale;
};

/**
 * @param {string[]} locales
 * @returns {Promise<Job[]>} array of created jobs
 */
const createJobs = async (locales) => {
  const jobResponses = await Promise.all(
    locales.map((locale) => {
      const body = {
        jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
        targetLocaleIds: [locale],
      };
      return vendorRequest({
        method: 'POST',
        endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs`,
        body,
      });
    })
  );

  return Promise.all(
    jobResponses.map(async (jobResponse) => {
      return Database.addJob({
        job_uid: jobResponse.translationJobUid,
        status: 'PENDING',
        locale: jobResponse.targetLocaleIds[0],
        project_id: PROJECT_ID,
      });
    })
  );
};

/**
 * @param {Job[]} jobRecords
 * @param {Object.<string, Translation[]>} translationsPerLocale
 * @example
 * await createBatches(
 *  job: { id: 1, locale: 'ja-JP'},
 *  translationsPerLocale: { 'ja-jP': ['src/content/hello_world.txt']}
 * );
 * @returns {Promise<[{ batchUid: string, locale: string, jobId: string }]>}
 */
const createBatches = async (jobRecords, translationsPerLocale) => {
  const createBatchResponses = await Promise.all(
    // create a batch for each job
    jobRecords.map(async (job) => {
      const body = {
        authorize: false,
        translationJobUid: job.job_uid,
        fileUris: translationsPerLocale[job.locale].map(
          (translation) => translation.slug
        ), // for the job's locale, grab slugs corresponding to that locale
      };

      const createBatchResponse = await vendorRequest({
        method: 'POST',
        endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches`,
        body,
      });

      await Database.updateJob(job.id, {
        batch_uid: createBatchResponse.batchUid,
      });

      return { ...createBatchResponse, locale: job.locale, jobId: job.id };
    })
  );

  return createBatchResponses;
};

/**
 *
 * @param {[{ batchUid: string, locale: string, jobId: string }]} batches
 * @param {Object.<string, Translation[]>} translationsPerLocale
 */
const uploadFiles = async (batches, translationsPerLocale) => {
  for (const batch of batches) {
    let successCount = 0;

    const translations = translationsPerLocale[batch.locale];
    for (const translation of translations) {
      try {
        const fileUploadResponse = await uploadFile(
          batch.locale,
          batch.batchUid
        )(translation);

        if (fileUploadResponse.code === 'ACCEPTED') {
          await Database.updateTranslation(translation.id, {
            status: 'IN_PROGRESS',
          });
          await Database.addTranslationsJobsRecord(translation.id, batch.jobId);
          successCount += 1;
        }
      } catch (error) {
        await trackTranslationError({
          ...defaultTrackingMetadata,
          target: TRACKING_TARGET.FILE,
          slug: translation.slug,
          locale: batch.locale,
          jobId: batch.jobId,
          error,
          errorMessage: `Error occured during upload process for: ${translation.slug}`,
        });
        console.log(
          `Error occured during upload process for: ${translation.slug}`
        );
        console.log(`Error: ${error}`);
        console.log(error.stack);
        process.exitCode = 1;
      }
    }

    if (successCount > 0) {
      // if at least one file was successfully uploaded, set job to in progress
      await Database.updateJob(batch.jobId, { status: 'IN_PROGRESS' });

      await trackTranslationEvent({
        target: TRACKING_TARGET.JOB,
        status: 'IN_PROGRESS',
        jobId: batch.jobId,
        locale: batch.locale,
        successCount,
        ...defaultTrackingMetadata,
      });
    }
  }
};

/** Entrypoint. */
const main = async () => {
  try {
    const translationsPerLocale = await getReadyToGoTranslationsForEachLocale();

    // exit early if no translations are ready
    if (Object.keys(translationsPerLocale).length === 0) {
      console.log('No ready to go translations. Exiting early.');
      process.exit(0);
    }

    console.log(`Records to be sent: ${JSON.stringify(translationsPerLocale)}`);

    const createdJobs = await createJobs(Object.keys(translationsPerLocale));
    const createdBatches = await createBatches(
      createdJobs,
      translationsPerLocale
    );
    await uploadFiles(createdBatches, translationsPerLocale);

    await trackTranslationEvent({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      createdJobsCount: createdJobs.length,
      createdBatchesCount: createdBatches.length,
    });
  } catch (error) {
    await trackTranslationError({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      error,
      errorMessage: `Unable to send and update translation queue to vendor`,
    });
    console.log(`Error encountered: ${error}`);
    console.log(error.stack);
    // eslint-disable-next-line require-atomic-updates
    process.exitCode = 1;
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
  main,
  getReadyToGoTranslationsForEachLocale,
  createJobs,
  createBatches,
  uploadFile,
  uploadFiles,
};
