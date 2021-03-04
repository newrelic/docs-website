const fetch = require('node-fetch');

const BASE_URL = 'https://docs.newrelic.com';

const isUnknown = (to) => {
  if (to.startsWith('//')) {
    return new URL(`https://${to.slice(2)}`);
  }
};

const isNRDownload = (to) => to.startsWith('http://download.newrelic.com/');

const getPageResponse = async (path) => {
  try {
    const url = isUnknown(path) || new URL(path, BASE_URL);
    if (isNRDownload(to)) {
      return 200;
    }
    const { status } = await fetch(url, { method: 'HEAD' });
    return status;
  } catch (e) {
    return null;
  }
};

module.exports = getPageResponse;
