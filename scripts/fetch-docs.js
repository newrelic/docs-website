const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const TurndownService = require('turndown');
require('dotenv').config();

const logger = require('./utils/logger');
const createIndexPages = require('./create-index-pages');
const {
  TYPES,
  BASE_URL,
  BASE_DIR,
  GATSBY_CONTENT_TYPES,
  GATSBY_TEMPLATE,
} = require('./constants');

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

const getCategories = (url) => {
  return url
    .replace('https://docs-dev.newrelic.com/', '')
    .split('/')
    .slice(0, -1);
};

const getFrontmatter = (type, doc) => `---
title: ${doc.title.replace(':', '-')}
contentType: ${GATSBY_CONTENT_TYPES[type]}
template: ${GATSBY_TEMPLATE[type]}
---

`;

const fetchDocs = async () => {
  // Step 1: get the docs
  logger.normal('Fetching JSON');
  const requests = TYPES.map(fetchDoc);
  const results = await Promise.all(requests);

  logger.normal('Creating Directories');
  results.flat().forEach((doc) => {
    // Step 2: create the directory structure
    const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Step 3: create a file for each doc
    const slug = doc.docUrl.split('/').slice(-1);
    const fileName = `${dir}/${slug}.mdx`;

    // Step 4: create frontmatter based on content type
    const frontmatter = getFrontmatter(doc.type, doc);

    // Step 5: Convert content to markdown and write to file
    const turndownService = new TurndownService({
      headingStyle: 'atx',
    });
    turndownService.addRule('codeBlocks', {
      filter: ['pre'],
      replacement: function (content) {
        return `~~~\n${content}\n~~~\n`;
      },
    });
    turndownService.keep(['table']);

    const bodyContent = doc.body ? turndownService.turndown(doc.body) : '';
    const content = frontmatter + bodyContent;
    fs.writeFile(fileName, content, (err) => {
      if (err) logger.error(`Could not create ${fileName}.`);
    });
  });
};

module.exports = fetchDocs;
