'use strict';

const fetch = require('node-fetch');

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
      `[!] Error making request on attempt ${nthTry}/${MAX_RETRY}. Retrying in ${
        POLL_INTERVAL / 1000
      } seconds`
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

  const { accessToken } = await makeRequest(url, options);

  return accessToken;
};

/**
 * Makes a HTTP request to the translation vendor API.
 *
 * @example vendorRequest('POST', '/foobar', { name: "foobar" });
 *
 * @param {Object} options
 * @param {"GET"|"POST"} options.method The HTTP method used in the request.
 * @param {string} options.endpoint
 * @param {string} options.accessToken
 * @param {Object} [options.body]
 * @param {Object} [options.contentType]
 * @returns {Promise<Object>} The result after making the request.
 */
const vendorRequest = async ({
  method,
  endpoint,
  accessToken,
  body = {},
  contentType = 'application/json',
}) => {
  const url = new URL(endpoint, process.env.TRANSLATION_VENDOR_API_URL);

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': contentType,
    },
  };

  if (method !== 'GET') {
    options.body =
      contentType === 'application/json' ? JSON.stringify(body) : body;
  }

  return makeRequest(url, options);
};

module.exports = {
  vendorRequest,
  getAccessToken,
  makeRequest,
  sleep,
};
