/// <reference path="./translation_workflow/models/typedefs.js" />
'use strict';

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

const serializeMDX = require('./serialize-mdx');
const { vendorRequest, getAccessToken } = require('./utils/vendor-request');
const Database = require('./translation_workflow/database');

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
  'ja-JP': 'jp',
};

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;
const DOCS_SITE_URL = 'https://docs.newrelic.com';

/**
 * Sends the html file as a visual context for each uploaded file
 * @param {string} fileUri
 * @param {string} accessToken
 * @returns {Promise}
 */
const sendPageContext = async (fileUri, accessToken) => {
  const filepath = fileUri.replace(`src/content/`, '');
  const slug = filepath.replace(`.mdx`, '');
  const contextUrl = new URL(slug, DOCS_SITE_URL); //need to change this once we migrate to docs-newrelic-com

  const res = await fetch(contextUrl.href);
  const html = await res.text();

  const form = new FormData();
  form.append('content', html, {
    contentType: 'text/html',
    filename: fileUri,
  });
  form.append('name', contextUrl.href);

  const url = new URL(
    `/context-api/v2/projects/${PROJECT_ID}/contexts/upload-and-match-async`,
    process.env.TRANSLATION_VENDOR_API_URL
  );

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: form,
  };

  const resp = await fetch(url.href, options);

  const { response } = await resp.json();
  const { code } = response;

  if (code === 'SUCCESS' && resp.ok) {
    console.log(`[*] Successfully uploaded ${fileUri} context.`);
  } else {
    console.error(`[!] Unable to upload ${fileUri} context.`);
  }
};

/**
 * @param {string} locale The locale that this file should be translated to.
 * @param {string} batchUid The batch that is expecting this file.
 * @param {string} accessToken
 * @returns {(translation: Translation) => Promise<{code: string, slug: string, locale: string>}
 */
const uploadFile = (locale, batchUid, accessToken) => async (translation) => {
  const mdx = fs.readFileSync(path.join(process.cwd(), translation.slug));
  const html = await serializeMDX(mdx);

  const page = {
    file: translation.slug,
    html,
  };

  const filename = `${Buffer.from(LOCALE_IDS[locale] + page.file).toString(
    'base64'
  )}.html`;
  const filepath = path.join(process.cwd(), filename);
  fs.writeFileSync(filepath, page.html, 'utf8');

  const form = new FormData();
  form.append('fileType', 'html');
  form.append('localeIdsToAuthorize[]', locale);
  form.append('fileUri', page.file);
  form.append('file', fs.createReadStream(filepath));

  const url = new URL(
    `/job-batches-api/v2/projects/${PROJECT_ID}/batches/${batchUid}/file`,
    process.env.TRANSLATION_VENDOR_API_URL
  );

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: form,
  };

  const resp = await fetch(url.href, options);
  const { response } = await resp.json();
  const { code } = response;

  if (code === 'ACCEPTED' && resp.ok) {
    console.log(`[*] Successfully uploaded ${page.file}.`);
    await sendPageContext(page.file, accessToken);
    await Database.updateTranslation(translation.id, { status: 'IN_PROGRESS' });
  } else {
    console.error(
      `[!] Unable to upload ${page.file}. Code was ${code}. Response status: ${resp.status} -- ${resp.statusText}`
    );
  }

  return { code, translation };
};

/**
 * @returns {Object.<string, string[]>} object whose keys are locales, whose values are an array of slugs to be translated for that locale
 */
const getTranslationRecordsForEachLocale = async () => {
  const translations = await Database.getTranslations({ status: 'PENDING' });

  let translationsPerLocale = {};

  for (const translation of translations) {
    translationsPerLocale[translation.locale] = translation;
  }

  return translationsPerLocale;
};

/**
 *
 * @param {string[]} locales
 * @returns {Job[]} array of created jobs
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
        accessToken,
      });
    })
  );

  return await Promise.all(
    jobResponses.map(async (jobResponse) => {
      return await Database.addJob({
        job_uid: jobResponse.translationJobUid,
        status: 'PENDING',
        locale: jobResponse.targetLocaleIds[0],
      });
    })
  );
};

/**
 *
 * @param {Job[]} jobRecords
 * @param {Object.<string, string[]>} translationsPerLocale - object whose keys are locales, and whose values are an array of slugs to be translated for that locale
 * @example
 * await createBatches(
 *  job: { id: 1, locale: 'ja-JP'},
 *  translationsPerLocale: { 'ja-jP': ['src/content/hello_world.txt']}
 * );
 * @returns {[{ batchUid: string, locale: string, jobId: string }]}
 */
const createBatches = async (jobRecords, translationsPerLocale) => {
  const createBatchResponses = await Promise.all(
    // create a batch for each job
    jobRecords.map(async (job) => {
      const body = {
        authorize: false,
        translationJobUid: jobUid,
        fileUris: translationsPerLocale[job.locale], // for the job's locale, grab files corresponding to that locale
      };

      var createBatchResponse = await vendorRequest({
        method: 'POST',
        endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches`,
        body,
        accessToken,
      });

      await Database.updateJob(job.id, {
        batch_uid: createBatchResponse.batchUid,
      });

      return { ...createBatchResponse, locale: job.locale, jobId: job.id };
    })
  );

  return createBatchResponses;
};

/** Entrypoint. */
const main = async () => {
  /**
    What do we know:
        - one job for each locale, one batch for each job
        - input: list of translations ready to go
        - output: job in smartling, job record created, job translation record created

        1. get translation records for each locale.
        2. create job for each locale.
        3. create batch for each job (each locale).
        4. create job record here.
        5. upload files for batch.
        6. create translation record.
        7. create jobtranslation record.
     */

  const accessToken = await getAccessToken();

  // group translations by locale
  const translationsPerLocale = await getTranslationRecordsForEachLocale();

  // create jobs for each locale, create job record in database
  const createdJobs = await createJobs(Object.keys(translationsPerLocale));

  // create batches, update jobs with batch_uids
  const createdBatches = await createBatches(
    createdJobs,
    translationsPerLocale
  );

  // upload files, update states

  await Promise.all(
    createdBatches.flatMap((batch) => {
      return translationsPerLocale[batch.locale].map(async (translation) => {
        const output = await uploadFile(
          batch.locale,
          batch.batchUid,
          accessToken
        )(translation);

        if (output.code === 'ACCEPTED') {
          await Database.updateTranslation(translation.id, {
            status: 'IN_PROGRESS',
          });
        } else {
          await Database.updateTranslation(translation.id, {
            status: 'ERRORED',
          });
        }
      });
    })
  );

  // update state of jobs
  await Promise.all(
    createdBatches.map((batch) => {
      Database.updateJob(batch.jobId, { status: 'IN_PROGRESS' });
    })
  );
};

/**
 * This allows us to check if the script was invoked directly from the command line, i.e 'node validate_packs.js', or if it was imported.
 * This would be true if this was used in one of our GitHub workflows, but false when imported for use in a test.
 * See here: https://nodejs.org/docs/latest/api/modules.html#modules_accessing_the_main_module
 */
if (require.main === module) {
  main();
}

module.exports = { main, getContent };
