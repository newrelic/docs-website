const path = require('path');
const TurndownService = require('turndown');
const HTMLtoJSX = require('htmltojsx');

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { TYPES, BASE_DIR } = require('../constants');

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

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
    replacement: (content) => `~~~\n${content}\n~~~\n`,
  });

  // Turn div tags into JSX
  turndownService.addRule('htmlToJSX', {
    filter: ['div', 'table'],
    replacement: (content, node) => htmlToJSXConverter.convert(node.outerHTML),
  });

  const bodyContent = doc.body ? turndownService.turndown(doc.body) : '';
  const content = frontmatter + bodyContent;

  return { content, fileName };
};

module.exports = toMarkdown;
