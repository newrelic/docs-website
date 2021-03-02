const fetch = require('node-fetch');
const BASE_URL = 'https://docs-preview.newrelic.com';

const getPageResponse = async (path) => {
  const url = new URL(path, BASE_URL);
  const { status } = await fetch(url, { method: 'HEAD' });

  return status;
};

module.exports = getPageResponse;
