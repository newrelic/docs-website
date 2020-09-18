const fetch = require('node-fetch');
require('dotenv').config();

const logger = require('./utils/logger');
const { TYPES, BASE_URL } = require('./constants');

const getUrl = (type) => [BASE_URL, type, 'list'].join('/');

const fetchDoc = async (type) => {
  const url = getUrl(type);
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

const fetchDocs = async () => {
  const requests = TYPES.map(fetchDoc);
  const results = await Promise.all(requests);

  return results;
};

module.exports = fetchDocs;
