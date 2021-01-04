const fetch = require('node-fetch');
const logger = require('../logger');
const { paginate } = require('./docs-api');

require('dotenv').config();

const fetchRedirects = async (nodeId) => {
  const url = `https://docs-dev.newrelic.com/api/migration/redirects?id=${encodeURIComponent(
    `node/${nodeId}`
  )}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
      },
    });
    const json = await res.json();
    const { redirects } = json;
    return redirects;
  } catch (e) {
    logger.error(`Error, could not fetch ${url}: ${e}`);
  }
};

const fetchAllRedirects = async () => {
  const redirects = await paginate('/api/migration/redirects', {
    perPage: 300,
  });

  return redirects;
};

module.exports = { fetchRedirects, fetchAllRedirects };
