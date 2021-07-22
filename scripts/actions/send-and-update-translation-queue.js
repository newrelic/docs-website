const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

const serializeMDX = require('./serialize-mdx');
const { vendorRequest, getAccessToken } = require('./utils/vendor-request');
const {
  addJob,
  updateJob,
  getTranslations,
  updateTranslation,
  addTranslationsJobsRecord,
} = require('./translation_workflow/database');

/**
 * @typedef {Object} Page
 * @property {string} file The filepath for the page (from the project root).
 * @property {string} html The HTML serialized content for the page.
 */

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
};

const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;
const DOCS_SITE_URL = 'https://docs.newrelic.com';

/**
 * Gets Translations from the database that have pending status
 * @param {Object[]} pendingTranslations an array of translation objects
 * @returns {Object[]} slugs to be translated grouped by locale
 */
const groupByLocale = (pendingTranslations) => {
  const slugsByLocale = pendingTranslations.reduce(
    (acc, job) => ({
      ...acc,
      [job.locale]: [...(acc[job.locale] || []), job.slug],
    }),
    []
  );
  return slugsByLocale;
};

/**
 * Take a list of filepaths (grouped by locale) and fetches the HTML content.
 * @param {Object<string, string[]>} listByLocale The queue of slugs to be translated.
 * @returns {Object<string, Promise<Page[]>>}
 */
const getContent = (listByLocale) => {
  return Object.entries(listByLocale).reduce((acc, [locale, slugs]) => {
    return {
      ...acc,
      [locale]: Promise.all(
        slugs
          .filter((slug) => {
            /**
             * If a doc doesn't exist, it must have been renamed or deleted. In
             * that case, it is safe to ignore. If we skip including a doc in
             * this step, it won't become a failed upload, and will then be
             * cleaned up from the queue.
             */
            console.log(
              `Skipping over -- ${slug} -- since it no longer exists.`
            );
            return fs.existsSync(path.join(process.cwd(), slug));
          })
          .map(async (slug) => {
            const mdx = fs.readFileSync(path.join(process.cwd(), slug));
            const html = await serializeMDX(mdx);
            return { file: slug, html };
          })
      ),
    };
  }, {});
};

/**
 * Gets a new Job Id from the vendor for each locale
 * @param {string[]} locales an array of locales
 * @param {string} accessToken
 * @returns {string[]} jobUids a list of created JobUids
 */
const getJobUids = async (locales, accessToken) => {
  const jobRequests = locales.map((locale) => {
    const body = {
      jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
      targetLocaleIds: [LOCALE_IDS[locale]],
    };
    return vendorRequest({
      method: 'POST',
      endpoint: `/jobs-api/v3/projects/${PROJECT_ID}/jobs`,
      body,
      accessToken,
    });
  });
  const jobResponses = await Promise.all(jobRequests);
  const jobUids = jobResponses.map((resp) => resp.translationJobUid);
  console.log(`[*] Successfully created jobs: ${jobUids.join(', ')}`);
  return jobUids;
};

/**
 * @param {string[]} locales a list of locales
 * @param {string[]} jobUids a list of created JobUids
 * @returns {Object[]} translation jobs records
 */
const createTranslationJobRecords = async (locales, jobUids) => {
  const queueTranslationsJobsRecords = jobUids.map((uid, index) => {
    return addTranslationsJobsRecord({
      locale: locales[index],
      uid,
    });
  });
  const createTranslationJobRecords = await Promise.all(
    queueTranslationsJobsRecords
  );
  console.log(
    `[*] Successfully created translation job record: ${JSON.stringify(
      createTranslationJobRecords
    )}`
  );
  return createTranslationJobRecords;
};

/**
 * @param {Array<string[]>} pages an array of page arrays to be translated}
 * @param {string[]} jobUids a list of created JobUids
 * @param {string} accessToken
 * @returns {string[]} batchUids a list of created Batch uids
 */
const getBatchUids = async (pages, jobUids, accessToken) => {
  const batchRequests = jobUids.map((jobUid, idx) => {
    const body = {
      authorize: false,
      translationJobUid: jobUid,
      fileUris: pages[idx].map(({ file }) => file),
    };

    return vendorRequest({
      method: 'POST',
      endpoint: `/job-batches-api/v2/projects/${PROJECT_ID}/batches`,
      body,
      accessToken,
    });
  });
  const batchResponses = await Promise.all(batchRequests);
  const batchUids = batchResponses.map((resp) => resp.batchUid);
  return batchUids;
};

/**
 * @param {string[]} batchUids a list of created Batch uids
 * @param {string[]} jobUids a list of created JobUids
 * @param {string} accessToken
 */
const createBatchJobRecords = async (batchUids, jobUids) => {
  const queueBatchJobsRecords = batchUids.map((batch_uid, index) => {
    return addJob({ job_uid: jobUids[index], batch_uid, status: 'PENDING' });
  });
  const createBatchRecords = await Promise.all(queueBatchJobsRecords);

  console.log(
    `[*] Successfully created job/batch records: ${createBatchRecords.join(
      ', '
    )}`
  );
};

/**
 * @param {string[]} locales a list of locales
 * @param {string[]} batchUids a list of created Batch uids
 * @param {string} accessToken
 * @param {Array<string[]>} pages an array of page arrays to be translated}
 * @returns {(page: Page) => Promise<{code: string, slug: string, locale: string>}
 */
const uploadFiles = async (batchUids, locales, pages, accessToken) => {
  const uploadRequests = batchUids.flatMap((batchUid, idx) => {
    const locale = locales[idx];

    return pages[idx].map(uploadFile(locale, batchUid, accessToken));
  });

  const fileResponses = await Promise.all(uploadRequests);
  return fileResponses;
};

/**
 * @param {string} locale The locale that this file should be translated to.
 * @param {string} batchUid The batch that is expecting this file.
 * @param {string} accessToken
 * @returns {(page: Page) => Promise<{code: string, slug: string, locale: string>}
 */
const uploadFile = (locale, batchUid, accessToken) => async (page) => {
  const filename = `${Buffer.from(locale + page.file).toString('base64')}.html`;
  const filepath = path.join(process.cwd(), filename);
  fs.writeFileSync(filepath, page.html, 'utf8');

  const form = new FormData();
  form.append('fileType', 'html');
  form.append('localeIdsToAuthorize[]', LOCALE_IDS[locale]);
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
  } else {
    console.error(
      `[!] Unable to upload ${page.file}. Code was ${code}. Response status: ${resp.status} -- ${resp.statusText}`
    );
  }

  return { code, locale, slug: page.file };
};

/**
 * Sends the html file as a visual context for each uploaded file
 * @param {string} fileUri
 * @param {string} accessToken
 * @returns {Promise}
 */
const sendPageContext = async (fileUri, accessToken) => {
  const filepath = fileUri.replace(`src/content/`, '');
  const slug = filepath.replace(`.mdx`, '');
  const contextUrl = new URL(slug, DOCS_SITE_URL);
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
 * @param {(page: Page) => Promise<{code: string, slug: string, locale: string>}} uploadFileResponses
 * @param {string[]} jobUids a list of created JobUids
 * @param {string[]} translationJobs a list of translation ids
 */
const updateSuccessStatus = async (
  uploadFileResponses,
  jobUids,
  translationJobs
) => {
  const successfulUploads = uploadFileResponses.reduce(
    async (acc, file, index) => {
      const { code } = file;
      if (code === 'ACCEPTED') {
        const status = 'IN_PROGRESS';
        await updateJob(jobUids[index], { status });
        await updateTranslation(translationJobs[index], { status });
      }
      return [...acc, file];
    },
    []
  );
  console.log(
    `[*] Successfully uploaded ${successfulUploads.length} / ${uploadFileResponses.length} files`
  );
};

/**
 * @param {(page: Page) => Promise<{code: string, slug: string, locale: string>}} uploadFileResponses
 * @returns {string[]} a list of files that failed to upload
 */
const checkFailedUploads = async (uploadFileResponses) => {
  const failedUploads = uploadFileResponses.filter(
    ({ code }) => code !== 'ACCEPTED'
  );
  console.log(`[*] ${failedUploads.length} pages failed to upload.`);
  for (const failedUpload of failedUploads) {
    console.log(`    [!] ${JSON.stringify(failedUpload)}`);
  }
  return failedUploads;
};

/** Entrypoint. */
const main = async () => {
  const pendingTranslations = await getTranslations({ status: 'PENDING' });
  const slugsByLocale = groupByLocale(pendingTranslations);
  const content = getContent(slugsByLocale);
  const locales = Object.keys(content);
  const pages = await Promise.all(Object.values(content));
  try {
    const accessToken = await getAccessToken();
    const jobUids = await getJobUids(locales, accessToken);
    const translationJobs = await createTranslationJobRecords(locales, jobUids);
    const batchUids = await getBatchUids(pages, jobUids, accessToken);
    await createBatchJobRecords(batchUids, jobUids);
    const uploadFileResponses = await uploadFiles(
      batchUids,
      locales,
      pages,
      accessToken
    );
    await updateSuccessStatus(uploadFileResponses, jobUids, translationJobs);
    const failedUploads = await checkFailedUploads(uploadFileResponses);
    process.exit(failedUploads.length ? 1 : 0);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
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
  main,
  getContent,
  checkFailedUploads,
  updateSuccessStatus,
  uploadFiles,
  getAccessToken,
  getJobUids,
  createTranslationJobRecords,
  getBatchUids,
  createBatchJobRecords,
  updateJob,
  groupByLocale,
  getTranslations,
  sendPageContext,
};
