const fetch = require('node-fetch');

const BASE_URL = 'https://docs.newrelic.com';

const isUnknown = (to) => {
  if (to.startsWith('//')) {
    return new URL(`https://${to.slice(2)}`);
  }
};

const getPageResponse = async (path) => {
  try {
    const url = isUnknown(path) || new URL(path, BASE_URL);
    const { status } = await fetch(url, { method: 'HEAD' });
    return status;
  } catch (e) {
    return null;
  }
};

module.exports = getPageResponse;
