const jsdom = require('jsdom');
const fetch = require('node-fetch');
const logger = require('../logger');
const path = require('path');
const { TYPES } = require('../constants');

const { JSDOM } = jsdom;

const fetchJpDoc = async (doc) => {
  const url = new URL(doc.docUrl);
  url.hostname = 'docs.newrelic.co.jp';

  if (doc.type === TYPES.LANDING_PAGE) {
    url.pathname = path.dirname(url.pathname);
  }

  try {
    const res = await fetch(url.href);
    const html = await res.text();

    const { document } = new JSDOM(html).window;
    const titleNode =
      doc.type === TYPES.LANDING_PAGE
        ? document.querySelector('h1.text-center')
        : document.getElementById('page-title');

    const title = titleNode.textContent;

    // On some pages, the title node is inside the body. By removing it, we
    // ensure we don't repeat the title
    titleNode.remove();

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
