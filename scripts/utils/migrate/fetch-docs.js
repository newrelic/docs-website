const fetch = require('node-fetch');
require('dotenv').config();

const logger = require('../logger');
const {
  TYPES,
  ITEMS_PER_TYPE,
  BASE_URL,
  DIRECT_URLS,
} = require('../constants');

const getUrl = (type) =>
  [BASE_URL, 'api/migration/content', type, 'list'].join('/');

const callApi = async (url) => {
  try {
    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
      },
    });
    const result = await resp.json();

    return result.docs.map((item) => item.doc);
  } catch (e) {
    logger.error(`Error, could not fetch ${url}: ${e}`);
  }
};

const fetchDoc = async (type) => {
  const params = new URLSearchParams();
  const perPage = ITEMS_PER_TYPE[type];

  if (perPage) {
    params.set('items_per_page', perPage);
  }

  return callApi(`${getUrl(type)}?${params}`);
};

const fetchDocs = async () => {
  const requests = Object.values(TYPES).map(fetchDoc);
  const hardCodedRequests = DIRECT_URLS.map(callApi);

  const docs = await Promise.all([...requests, ...hardCodedRequests]);

  return docs.flat();
};

module.exports = fetchDocs;
