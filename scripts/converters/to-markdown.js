const path = require('path');
const TurndownService = require('turndown');

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { BASE_DIR } = require('../constants');

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
