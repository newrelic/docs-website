const fetch = require('node-fetch');

const makeRequest = async (url, options) => {
  try {
    console.log('-- makeRequest');
    console.log('options', options);
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
 * @param {"GET"|"POST"} method The HTTP method used in the request.
 * @param {string} endpoint The API endpoint to request.
 * @param {Object} [body] (Optional) Data to send with the requst.
 * @returns {Promise<Object>} The result after making the request.
 */
const vendorRequest = async (
  method,
  endpoint,
  body = {},
  contentType = 'application/json'
) => {
  const accessToken = await getAccessToken();

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

  const data = await makeRequest(url, options);

  return data;
};

module.exports = vendorRequest;
