const fetch = require('node-fetch');
require('dotenv').config();

const logger = require('../logger');
const { TYPES, ITEMS_PER_TYPE, BASE_URL } = require('../constants');

const getUrl = (type) =>
  [BASE_URL, 'api/migration/content', type, 'list'].join('/');

const fetchDoc = async (type) => {
  const url = `${getUrl(type)}?items_per_page=${ITEMS_PER_TYPE[type]}`;
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
  const requests = Object.values(TYPES).map(fetchDoc);
  const docs = await Promise.all(requests);

  return docs.flat();
};

module.exports = fetchDocs;
