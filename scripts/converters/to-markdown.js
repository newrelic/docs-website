const path = require('path');
const TurndownService = require('turndown');

const getCategories = require('../utils/get-categories');
const { BASE_DIR, TYPES } = require('../constants');

const GATSBY_CONTENT_TYPES = {
  [TYPES.BASIC_PAGE]: 'page',
  [TYPES.LANDING_PAGE]: 'landingPage',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
  [TYPES.TROUBLESHOOTING]: 'troubleshootingDoc',
  [TYPES.WHATS_NEW]: 'nr1Announcement',
  [TYPES.ATTRIBUTE_DEFINITION]: 'attributeDef',
};

const GATSBY_TEMPLATE = {
  [TYPES.BASIC_PAGE]: 'basicDoc',
  [TYPES.LANDING_PAGE]: 'basicDoc',
  [TYPES.API_DOC]: 'basicDoc',
  [TYPES.RELEASE_NOTE]: 'basicDoc',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'basicDoc',
  [TYPES.TROUBLESHOOTING]: 'basicDoc',
  [TYPES.WHATS_NEW]: 'basicDoc',
  [TYPES.ATTRIBUTE_DEFINITION]: 'basicDoc',
};

const getFrontmatter = (type, doc) => `---
title: ${doc.title.replace(':', '-')}
contentType: ${GATSBY_CONTENT_TYPES[type]}
template: ${GATSBY_TEMPLATE[type]}
---

`;

const toMarkdown = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName =
    doc.type === TYPES.LANDING_PAGE ? `${dir}/index.mdx` : `${dir}/${slug}.mdx`;

  // Create frontmatter based on content type
  const frontmatter = getFrontmatter(doc.type, doc);

  // Convert content to markdown
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

  return { content, fileName };
};

module.exports = toMarkdown;
