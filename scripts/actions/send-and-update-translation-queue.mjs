/* eslint-disable no-console */
// / <reference path="./translation_workflow/models/typedefs.js" />
'use strict';

import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

import { vendorRequest, uploadFile } from './utils/vendor-request.mjs';
import Database from './translation_workflow/database.js';
import {
  trackTranslationError,
  trackTranslationEvent,
  TRACKING_TARGET,
} from './utils/translation-monitoring.js';

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;

const defaultTrackingMetadata = {
  projectId: PROJECT_ID,
  workflow: 'sendAndUpdateTranslationQueue',
};

const getRunLink = () => {
  const { GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = process.env;
  if (!GITHUB_SERVER_URL || !GITHUB_REPOSITORY || !GITHUB_RUN_ID) {
    return null;
  }
  return `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;
};

const truncate = (str, max = 150) => {
  const oneLine = String(str).split('\n')[0];
  return oneLine.length > max ? `${oneLine.slice(0, max)}…` : oneLine;
};

const todayISO = () => new Date().toISOString().slice(0, 10);

/**
 * Formats the per-run Slack report. Exported for testing; not covered by a
 * snapshot since exact wording isn't load-bearing, only the shape/data is.
 * @param {{ attempted: number, succeeded: number, failures: {slug: string, locale: string, error: string}[] }} summary
 */
const buildReport = ({ attempted, succeeded, failures }) => {
  const lines = [`🌐 *Translation Pipeline Report* — ${todayISO()}`, ''];

  lines.push('📊 *Overview*');
  lines.push(`• Attempted: ${attempted}`);
  lines.push(`• ✅ Succeeded: ${succeeded}`);
  lines.push(`• ${failures.length > 0 ? '❌' : '✅'} Failed: ${failures.length}`);

  if (failures.length > 0) {
    lines.push('');
    lines.push(`🔍 *Failures* (${failures.length})`);
    for (const failure of failures) {
      lines.push(
        `• \`${failure.slug}\` (${failure.locale}) — ${truncate(failure.error)}`
      );
    }
  }

  const runLink = getRunLink();
  if (runLink) {
    lines.push('');
    lines.push(`🔗 <${runLink}|View full run>`);
  }

  return lines.join('\n');
};

/**
 * Posts a message to Slack via an Incoming Webhook. No-ops (with a log
 * line) when SLACK_WEBHOOK_URL isn't configured, so this is safe to call
 * from local runs and tests without a webhook set up.
 * @param {string} text
 */
const postToSlack = async (text) => {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log('SLACK_WEBHOOK_URL not set, skipping Slack notification.');
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    console.log(`Failed to post to Slack: ${error}`);
  }
};

/**
 *
 * @returns {Promise<Object.<string, Translation[]>>} object whose keys are locales, whose values are an array of translation requests for that locale
 */
const getReadyToGoTranslationsForEachLocale = async () => {
  const [pendingTranslations, inProgressTranslations, erroredTranslations] =
    await Promise.all([
      Database.getTranslations({ status: 'PENDING', project_id: PROJECT_ID }),
      Database.getTranslations({
        status: 'IN_PROGRESS',
        project_id: PROJECT_ID,
      }),
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
 * @returns {Promise<{ successCount: number, failures: {slug: string, locale: string, error: string}[] }>}
 */
const uploadFiles = async (batches, translationsPerLocale) => {
  let successCount = 0;
  const failures = [];

  for (const batch of batches) {
    let batchSuccessCount = 0;

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
          batchSuccessCount += 1;
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
        failures.push({
          slug: translation.slug,
          locale: batch.locale,
          error: error.message || String(error),
        });
      }
    }

    successCount += batchSuccessCount;

    if (batchSuccessCount > 0) {
      // if at least one file was successfully uploaded, set job to in progress
      await Database.updateJob(batch.jobId, { status: 'IN_PROGRESS' });

      await trackTranslationEvent({
        target: TRACKING_TARGET.JOB,
        status: 'IN_PROGRESS',
        jobId: batch.jobId,
        locale: batch.locale,
        successCount: batchSuccessCount,
        ...defaultTrackingMetadata,
      });
    }
  }

  return { successCount, failures };
};

/** Entrypoint. */
const main = async () => {
  try {
    const translationsPerLocale = await getReadyToGoTranslationsForEachLocale();

    // exit early if no translations are ready
    if (Object.keys(translationsPerLocale).length === 0) {
      console.log('No ready to go translations. Exiting early.');
      await postToSlack(
        `🌐 *Translation Pipeline Report* — ${todayISO()}\nNo translations pending today.`
      );
      process.exit(0);
    }

    console.log(`Records to be sent: ${JSON.stringify(translationsPerLocale)}`);

    const attempted = Object.values(translationsPerLocale).reduce(
      (sum, translations) => sum + translations.length,
      0
    );

    const createdJobs = await createJobs(Object.keys(translationsPerLocale));
    const createdBatches = await createBatches(
      createdJobs,
      translationsPerLocale
    );
    const { successCount, failures } = await uploadFiles(
      createdBatches,
      translationsPerLocale
    );

    await trackTranslationEvent({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      createdJobsCount: createdJobs.length,
      createdBatchesCount: createdBatches.length,
    });

    await postToSlack(
      buildReport({ attempted, succeeded: successCount, failures })
    );
  } catch (error) {
    await trackTranslationError({
      ...defaultTrackingMetadata,
      target: TRACKING_TARGET.WORKFLOW,
      error,
      errorMessage: `Unable to send and update translation queue to vendor`,
    });
    console.log(`Error encountered: ${error}`);
    console.log(error.stack);

    const runLink = getRunLink();
    await postToSlack(
      [
        `🚨 *Translation Pipeline Report* — ${todayISO()}`,
        'The workflow crashed before completing.',
        `Error: ${truncate(error.message || String(error))}`,
        runLink ? `🔗 <${runLink}|View full run>` : null,
      ]
        .filter(Boolean)
        .join('\n')
    );

    // eslint-disable-next-line require-atomic-updates
    process.exitCode = 1;
  }
};

/**
 * This allows us to check if the script was invoked directly from the command line, i.e 'node validate_packs.js', or if it was imported.
 * This would be true if this was used in one of our GitHub workflows, but false when imported for use in a test.
 * See here: https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
 */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export {
  main,
  getReadyToGoTranslationsForEachLocale,
  createJobs,
  createBatches,
  uploadFile,
  uploadFiles,
  buildReport,
};
