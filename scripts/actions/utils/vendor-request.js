const fetch = require('node-fetch');

const makeRequest = async (url, options) => {
  try {
    const resp = await fetch(url.href, options);
    const { response: data } = await resp.json();

    if (data.code !== 'SUCCESS') {
      console.log(data);
      throw new Error(data.code);
    }

    return data;
  } catch (error) {
    console.error(`Unable to make a ${options.method} request to ${url.href}.`);
    console.log(error);
    process.exit(1);
  }
};

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
    body: {
      userIdentifier: process.env.TRANSLATION_VENDOR_USER,
      userSecret: process.env.TRANSLATION_VENDOR_SECRET,
    },
  };

  const { accessToken } = await makeRequest(url, options);

  return accessToken;
};

/**
 * Makes a HTTP request to the translation vendor API.
 * @todo response
 * @param {"GET"|"POST"} method The HTTP method used in the request.
 * @param {string} endpoint The API endpoint to request.
 * @param {Object} [body] (Optional) Data to send with the requst.
 * @returns {Promise<Object>} The result after making the request.
 */
const vendorRequest = async (method, endpoint, body = {}) => {
  const accessToken = await getAccessToken();

  const url = new URL(
    `/jobs-api/v3/projects/${process.env.TRANSLATION_VENDOR_PROJECT}${endpoint}`,
    process.env.TRANSLATION_VENDOR_API_URL
  );

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    ...(method !== 'GET' && body),
  };

  const data = await makeRequest(url, options);

  console.log('data', data);
};

vendorRequest('GET', '/jobs');

module.exports = vendorRequest;
