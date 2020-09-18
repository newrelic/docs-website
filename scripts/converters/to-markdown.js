const path = require('path');
const TurndownService = require('turndown');

const getCategories = require('../utils/get-categories');
const {
  BASE_DIR,
  GATSBY_CONTENT_TYPES,
  GATSBY_TEMPLATE,
} = require('../constants');

const getFrontmatter = (type, doc) => `---
title: ${doc.title.replace(':', '-')}
contentType: ${GATSBY_CONTENT_TYPES[type]}
template: ${GATSBY_TEMPLATE[type]}
---

`;

const toMarkdown = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName = `${dir}/${slug}.mdx`;

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
