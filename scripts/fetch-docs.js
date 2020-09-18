const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const TurndownService = require('turndown');
require('dotenv').config();

const logger = require('./utils/logger');
const createIndexPages = require('./create-index-pages');
const { BASE_URL, BASE_DIR } = require('./constants');

const GATSBY_CONTENT_TYPES = {
  page: 'page',
  api_doc: 'apiDoc',
  release_notes: 'releaseNote',
  release_notes_platform: 'releaseNotePlatform',
  troubleshooting_doc: 'troubleshootingDoc',
  nr1_announcement: 'nr1Announcement',
  attribute_definition: 'attributeDef',
};

const GATSBY_TEMPLATE = {
  page: 'basicDoc',
  api_doc: 'basicDoc',
  release_notes: 'basicDoc',
  release_notes_platform: 'basicDoc',
  troubleshooting_doc: 'basicDoc',
  nr1_announcement: 'basicDoc',
  attribute_definition: 'basicDoc',
};

// IDs grouped by content type (related GH issue in comments)
const input = [
  { type: 'page', ids: ['38576', '40431'] }, // #44
  { type: 'api_doc', ids: ['37696', '40421'] }, // #45
  { type: 'release_notes', ids: ['40416', '40466'] }, // #48
  { type: 'release_notes_platform', ids: ['40531', '40506'] }, // #49
  { type: 'troubleshooting_doc', ids: ['40351', '15086'] }, // #50
  { type: 'nr1_announcement', ids: ['40491', '40516'] }, // #47
  { type: 'attribute_definition', ids: ['40336', '40016'] }, // 46
];

const getUrl = (type, id) => [BASE_URL, type, id].join('/');

const fetchDoc = async (type, id) => {
  const url = getUrl(type, id);
  try {
    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
      },
    });
    const result = await resp.json();
    return result.docs[0].doc;
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
title: ${doc.title}
contentType: ${GATSBY_CONTENT_TYPES[type]}
template: ${GATSBY_TEMPLATE[type]}
---

`;

const fetchDocs = async () => {
  // Step 1: get the docs
  logger.normal('Fetching JSON');
  const requests = input.flatMap(({ type, ids }) =>
    ids.map((id) => fetchDoc(type, id))
  );

  const results = await Promise.all(requests);

  logger.normal('Creating Directories');
  results.forEach((doc) => {
    // Step 2: create the directory structure
    const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Step 3: create a file for each doc
    const slug = doc.docUrl.split('/').slice(-1);
    const fileName = `${dir}/${slug}.mdx`;

    // Step 4: create frontmatter based on content type
    // NOTE: this should be returned in the JSON payload
    const type = input.find(({ ids }) => ids.includes(doc.docId)).type;
    const frontmatter = getFrontmatter(type, doc);

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

    // Step 6: party!
  });

  logger.normal('Creating index pages');
  await createIndexPages();

  logger.success('Migration complete');
};

// Run the script via `node path_to_script`
// fetchDocs();
module.exports = fetchDocs;
