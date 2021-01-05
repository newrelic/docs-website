const jsdom = require('jsdom');
const fetch = require('node-fetch');
const logger = require('../logger');

const { JSDOM } = jsdom;

const fetchJpDoc = async (doc) => {
  const url = new URL(doc.docUrl);
  url.hostname = 'docs.newrelic.co.jp';

  try {
    const res = await fetch(url.href);
    const html = await res.text();

    const { document } = new JSDOM(html).window;
    const title = document.getElementById('page-title').textContent;
    const body = document.querySelector('[data-swiftype-name=body]').outerHTML;

    return {
      ...doc,
      title,
      body,
    };
  } catch (e) {
    logger.error(`Error, could not fetch ${url}: ${e}`);
  }
};

const fetchJpDocs = (docs) => {
  return Promise.all(
    docs.filter((doc) => doc.japaneseVersionExists === 'yes').map(fetchJpDoc)
  );
};

module.exports = fetchJpDocs;
