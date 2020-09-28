const path = require('path');
const TurndownService = require('turndown');
const HTMLtoJSX = require('htmltojsx');

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { TYPES, BASE_DIR } = require('../constants');

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

const escapes = [
  [/\\/g, '\\\\'],
  [/\*/g, '\\*'],
  [/^-/g, '\\-'],
  [/^\+ /g, '\\+ '],
  [/^(=+)/g, '\\$1'],
  [/^(#{1,6}) /g, '\\$1 '],
  [/`/g, '\\`'],
  [/^~~~/g, '\\~~~'],
  [/\[/g, '\\['],
  [/\]/g, '\\]'],
  [/_/g, '\\_'],
  [/^(\d+)\. /g, '$1\\. '],
  [/</g, '&lt;'],
  [/>/g, '&gt;'],
];

TurndownService.prototype.escape = (string) => {
  return escapes.reduce((accumulator, escape) => {
    return accumulator.replace(escape[0], escape[1]);
  }, string);
};

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

  const bodyContent = doc.body ? turndownService.turndown(doc.body) : '';
  const content = frontmatter + bodyContent;

  return { content, fileName };
};

module.exports = toMarkdown;
