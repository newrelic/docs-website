const fetch = require('node-fetch');

const makeRequest = async (url, options) => {
  try {
    const resp = await fetch(url.href, options);
    const { response } = await resp.json();
    const { code, data } = response;

    if (code !== 'SUCCESS') {
      console.dir(response, { depth: null });
      throw new Error(code);
    }

    return data;
  } catch (error) {
    console.error(
      `Unable to make a ${options.method} request to ${url.href}. (${error})`
    );
    process.exit(1);
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
};
