const path = require('path');
const TurndownService = require('../utils/turndown');
const HTMLtoJSX = require('htmltojsx');

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { TYPES, BASE_DIR } = require('../constants');

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

const replaceWithContent = (node, content) => {
  const openingTag = node.outerHTML.slice(
    0,
    node.outerHTML.indexOf(node.innerHTML)
  );
  const closingTag = `</${node.tagName.toLowerCase()}>\n`;

  const outerJSX = htmlToJSXConverter.convert(`${openingTag}|||${closingTag}`);

  return outerJSX.replace('|||', `\n${content}\n`).trim();
};

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
    filter: ['div', 'dl'],
    replacement: (content, node) => {
      return htmlToJSXConverter.convert(node.outerHTML);
      if (
        node.tagName === 'TABLE' &&
        fileName.endsWith('recordcustomevent-net-agent-api.mdx')
      ) {
        console.log('--------', fileName, '----------');
        console.log(content);
      }
      return replaceWithContent(node, content);
    },
  });

  turndownService.addRule('table', {
    filter: 'table',
    replacement: (content, node) => {
      const openingTag = node.outerHTML.slice(
        0,
        node.outerHTML.indexOf(node.innerHTML)
      );
      const closingTag = `</${node.tagName.toLowerCase()}>\n`;

      return [openingTag, content, closingTag].join('\n');
    },
  });

  turndownService.addRule('tableContents', {
    filter: ['td', 'th', 'thead', 'tbody', 'tr'],
    replacement: (content, node) => {
      const openingTag = node.outerHTML.slice(
        0,
        node.outerHTML.indexOf(node.innerHTML)
      );
      const closingTag = `</${node.tagName.toLowerCase()}>\n`;

      return [openingTag, content, closingTag].join('\n');
    },
  });

  // We need to keep paragraphs inside of table cells to ensure the
  // `htmlToJSXConverter` running on the entirety of the table does not collapse
  // the paragraphs inside of the table cells. We clean this up in a codemod
  // later
  turndownService.addRule('paragraphsInsideTables', {
    filter: (node) =>
      node.nodeName === 'P' && node.parentNode.nodeName === 'TD',
    replacement: (content) => `<p>${content}</p>`,
  });

  const bodyContent = doc.body ? turndownService.turndown(doc.body) : '';
  const content = frontmatter + bodyContent;

  return { content, fileName };
};

module.exports = toMarkdown;
