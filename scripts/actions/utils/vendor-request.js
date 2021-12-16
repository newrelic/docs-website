'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const serializeMDX = require('../serialize-mdx');
const FormData = require('form-data');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 60 * 4, checkperiod: 2 });
const PROJECT_ID = process.env.TRANSLATION_VENDOR_PROJECT;
const DOCS_SITE_URL = 'https://docs.newrelic.com';

// NOTE: the vendor requires the locales in a different format
// We should consider this into the Gatsby config for each locale.
const LOCALE_IDS = {
  jp: 'ja-JP',
  'ja-JP': 'jp',
};

const MAX_RETRY = 5;
const POLL_INTERVAL = 1500;

const sleep = (millSeconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millSeconds);
  });
};

/**
 * @param {Object} options
 * @param {String} url
 * @param {Number} nthTry
 * @returns {Object} data The result after making the request.
 * @throws {Error} Will throw an error if the response "code" is not 'SUCCESS' after retrying
 */
const makeRequest = async (url, options, nthTry = 1) => {
  try {
    const resp = await fetch(url.href, options);
    const { response } = await resp.json();
    const { code, data } = response;
    if (code !== 'SUCCESS') {
      throw new Error(JSON.stringify(response, null, 2));
    }
    console.log(`Successful response`);
    return data;
  } catch (e) {
    if (nthTry === MAX_RETRY) {
      console.error(
        `[!] Unable to make a ${options.method} request to ${url.href} after ${MAX_RETRY} attempts.`
      );
      return Promise.reject(e);
    }
    console.warn(
      `[!] Error making request on attempt ${nthTry}/${MAX_RETRY}. Retrying in ${POLL_INTERVAL /
        1000} seconds`
    );
    // wait for delayTime amount of time before calling this method again
    await sleep(POLL_INTERVAL);
    return makeRequest(url, options, ++nthTry);
  }
};

/**
 * Get an access token for use in following call.
 * _NOTE: this token expires after 5 minutes._
 * @returns {Promise<string>}
 */
const getAccessToken = async () => {
  const cachedToken = cache.get('access_token');
  if (cachedToken != undefined) {
    console.log('using cached token');
    return cachedToken;
  } else {
    const url = new URL(
      '/auth-api/v2/authenticate',
      process.env.TRANSLATION_VENDOR_API_URL
    );

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userIdentifier: process.env.TRANSLATION_VENDOR_USER,
        userSecret: process.env.TRANSLATION_VENDOR_SECRET,
      }),
    };

    console.log('grabbing access token');
    const { accessToken } = await makeRequest(url, options);

    console.log('setting cached token');
    cache.set('access_token', accessToken, 60 * 4);

    return accessToken;
  }
};

/**
 * Makes a HTTP request to the translation vendor API.
 *
 * @example vendorRequest('POST', '/foobar', { name: "foobar" });
 *
 * @param {Object} options
 * @param {"GET"|"POST"} options.method The HTTP method used in the request.
 * @param {string} options.endpoint
 * @param {Object} [options.body]
 * @param {Object} [options.contentType]
 * @returns {Promise<Object>} The result after making the request.
 */
const vendorRequest = async ({
  method,
  endpoint,
  body = {},
  contentType = 'application/json',
}) => {
  const url = new URL(endpoint, process.env.TRANSLATION_VENDOR_API_URL);

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      'Content-Type': contentType,
    },
  };

  if (method !== 'GET') {
    options.body =
      contentType === 'application/json' ? JSON.stringify(body) : body;
  }

  return makeRequest(url, options);
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
 *
 * @param {string} locale The locale that this file should be translated to.
 * @param {string} batchUid The batch that is expecting this file.
 * @returns {(translation: Translation) => Promise<{code: string, slug: string, locale: string>}
 */
const uploadFile = (locale, batchUid) => async (translation) => {
  const accessToken = await getAccessToken();
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
  } else {
    console.error(
      `[!] Unable to upload ${page.file}. Code was ${code}. Response status: ${resp.status} -- ${resp.statusText}`
    );
  }

  return { code, translation };
};

module.exports = {
  vendorRequest,
  getAccessToken,
  sendPageContext,
  uploadFile,
  makeRequest,
  sleep,
};
