const fs = require('fs');
const path = require('path');
const https = require('http');
const fetch = require('node-fetch');
const FormData = require('form-data');

const loadFromDB = require('./utils/load-from-db');
const saveToDB = require('./utils/save-to-db');
const vendorRequest = require('./utils/vendor-request');

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
};

/**
 * Take a list of filepaths (grouped by locale) and fetches the HTML content.
 * @param {Object<string, string[]>} locales The queue of slugs to be translated.
 * @returns {Object<string, {file: string, html: string}[]>}
 */
const getContent = (locales) =>
  Object.entries(locales).reduce(
    (content, [locale, slugs]) => ({
      ...content,
      [locale]: slugs
        .map((slug) => {
          const html = fs.readFileSync(path.join(process.cwd(), slug));
          // TODO: transform MDX -> vendor format
          return {
            file: slug,
            html: html ? html : false,
          };
        })
        .filter((page) => Boolean(page.html)),
    }),
    {}
  );

/**
 * Sends HTML content to the vendor by creating jobs, batches, and uploading
 * files. On success, this will return the jobUid and batchUid for each locale.
 * @param {Object<string, {file: string, html: string}[]>} content
 * @returns {Promise<{ jobUids: string[], batchUids: string[]}>}
 */
const sendContentToVendor = async (content) => {
  const projectId = process.env.TRANSLATION_VENDOR_PROJECT;

  // 1) Create a job for each locale - save the jobUid for storage
  const jobRequests = Object.keys(content).map((locale) => {
    const body = {
      jobName: `Gatsby Translation Queue (${locale}) ${new Date().toLocaleString()}`,
      targetLocaleIds: [LOCALE_IDS[locale]],
    };
    return vendorRequest(
      'POST',
      `/jobs-api/v3/projects/${projectId}/jobs`,
      body
    );
  });

  const jobsResponses = await Promise.all(jobRequests);
  const jobUids = jobsResponses.map((resp) => resp.translationJobUid);
  console.log(`[*] Successfully created jobs: ${jobUids.join(', ')}`);

  // 2) Create a batch for each job - save bachUid for storage
  const pages = Object.values(content);
  const batchRequests = jobUids.map((jobUid, idx) => {
    const body = {
      authorize: false,
      translationJobUid: jobUid,
      fileUris: pages[idx].map(({ file }) => file),
    };

    return vendorRequest(
      'POST',
      `/job-batches-api/v2/projects/${projectId}/batches`,
      body
    );
  });

  const batchResponses = await Promise.all(batchRequests);
  const batchUids = batchResponses.map((resp) => resp.batchUid);
  console.log(`[*] Successfully created batches: ${batchUids.join(', ')}`);

  // 3) Upload files to the batches job
  const fileRequests = batchUids.flatMap((batchUid, idx) => {
    const [locale, localePages] = Object.entries(content)[idx];
    return localePages.map((page) => {
      const endpoint = `/job-batches-api/v2/projects/${projectId}/batches/${batchUid}/file`;
      const url = new URL(endpoint, process.env.TRANSLATION_VENDOR_API_URL);
      console.log(url.href);

      const filepath = '/tmp/toTranslate.html';
      fs.writeFileSync(filepath, page.html, 'utf-8');
      // const buffer = fs.readFileSync(filepath);
      // const stream = fs.createReadStream(filepath);

      const form = new FormData();
      form.append('fileType', 'html');
      form.append('localeIdsToAuthorize[]', LOCALE_IDS[locale]);
      form.append('fileUri', page.file);
      form.append('file', fs.createReadStream(filepath));

      // form.append('file', buffer, {
      // contentType: 'text/html',
      // name: 'file',
      // filename: page.file,
      // });

      // TODO: if this works, abstract it to a util
      return new Promise((resolve, reject) => {
        const accessToken =
          'eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI3ZGY0ZDE1Zi0zYThiLTQ0YjktYWVlNy05ZDI3NGY5YzA5OWMiLCJleHAiOjE2MTEyNTcyMjEsIm5iZiI6MCwiaWF0IjoxNjExMjU2NzQxLCJpc3MiOiJodHRwczovL3Nzby5zbWFydGxpbmcuY29tL2F1dGgvcmVhbG1zL1NtYXJ0bGluZyIsImF1ZCI6ImF1dGhlbnRpY2F0aW9uLXNlcnZpY2UiLCJzdWIiOiJhZjgyMzg1Yy03ZmQ3LTQxMTYtOTg2OS01YzFiZTZhMGJmZTEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhdXRoZW50aWNhdGlvbi1zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6ImRmNTA2NDRmLWQ4ZTYtNGVlZS1iY2E3LTgzMjAzZjlmMTkxYiIsImNsaWVudF9zZXNzaW9uIjoiN2E3MTM1YzMtNWQ0NS00MWU0LWEzNzItMDBkY2NhZjJiMGFkIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJPTEVfQVBJX1VTRVIiLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInVpZCI6IjBkZDA3YTFiY2E4NSIsIm5hbWUiOiJkb2NzLm5ld3JlbGljLmNvbSAoR2F0c2J5KSAtIFN0YWdpbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhcGlVc2VyK3Byb2plY3QrMTY0ZjcwYzFiQHNtYXJ0bGluZy5jb20iLCJnaXZlbl9uYW1lIjoiQVBJIFVzZXIiLCJmYW1pbHlfbmFtZSI6ImRvY3MubmV3cmVsaWMuY29tIChHYXRzYnkpIC0gU3RhZ2luZyIsImVtYWlsIjoiYXBpVXNlcitwcm9qZWN0KzE2NGY3MGMxYkBzbWFydGxpbmcuY29tIn0.NgrideBNNmpbFUeWQ-lwEAHhVWlDDSvBEFTffcowUxBZiAuW26Ck1v3VghQO2ICLXDSz6_E9wpHTjHZ87ma5aUCsEvqDAEA40YxyDvdnDkvHnkWZTRSCNCXpgIEPFGqyTEf1sdiFS6joAVaXf2G2ddSNCpHjnDUn2ZD9bR3Fr5I';
        const options = {
          method: 'POST',
          host: process.env.TRANSLATION_VENDOR_API_URL,
          path: endpoint,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const request = https.request(options);

        form.pipe(request);

        request.on('response', (resp) => {
          return resp.statusCode >= 400 ? reject(resp) : resolve(resp);
        });

        // console.log('form submit options', options);

        // form.submit(options, (error, resp) => {
        // console.log('error', error);
        // console.log('resp', resp);

        // return error ? reject(error) : resolve(resp);
        // });
      });

      return vendorRequest(
        'POST',
        `/job-batches-api/v2/projects/${projectId}/batches/${batchUid}/file`,
        form,
        'multipart/form-data'
      );
    });
  });

  const fileResponses = await Promise.all(fileRequests);
  console.log(`[*] Successfully uploaded ${fileResponses.length} files`);

  console.log(fileResponses);

  // 4) Upload context for each file

  // 5) Check status of job and batch
  // batch status: DRAFT -> ADDING_FILES -> EXECUTING -> COMPLETED
  // job status: AWAITING_AUTHORIZATION -> IN_PROGRESS (CANCELLED)

  return { jobUids, batchUid };
};

/**
 * @param {string[]} jobUids A list of vendor UIDs to be added to the `being_translated` queue.
 */
const addToBeingTranslatedQueue = async (jobUids) => {
  const table = 'TranslationQueues';
  const key = { type: 'being_translated' };

  const queue = await loadFromDB(table, key);

  await saveToDB(table, key, 'set jobUids = :jobUids', {
    ':jobUids': [...queue, ...jobUids],
  });
};

/** Entrypoint. */
const main = async () => {
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const { locales } = queue.Item;
  const content = getContent(locales);

  try {
    // TODO: finalize this (return a list of jobUids and batchUids)
    const batchUids = await sendContentToVendor(content);
    // TODO: remove this and proceed to the next steps below
    console.log('batchUids', batchUids);
    process.exit(0);

    // clear out `to_translate` queue
    await saveToDB(table, key, 'set locales = :empty', { ':empty': {} });

    // save jobUids to `being_translated` queue
    await addToBeingTranslatedQueue(jobUids);

    console.log(`[*] Successfully sent to vendor`);
  } catch (error) {
    console.error(`[!] Unable to send data to vendor`);
    console.log(error);
    process.exit(1);
  }
};

main();
