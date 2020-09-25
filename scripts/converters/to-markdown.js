const path = require('path');
const TurndownService = require('turndown');
const HTMLtoJSX = require('htmltojsx');

const prettier = require('prettier/standalone');
const parserBabel = require('prettier/parser-babel');

const formatCode = (code, formatOptions = {}) =>
  prettier.format(code, {
    trailingComma: 'es5',
    printWidth: 80,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    plugins: [parserBabel],
    parser: 'babel',
    ...formatOptions,
  });

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { TYPES, BASE_DIR } = require('../constants');

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

const turndown = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  codeBlockStyle: 'fenced',
  fence: '```',
});

const defaultRules = turndown.rules.options.rules;

const toMarkdown = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName =
    doc.type === TYPES.LANDING_PAGE ? `${dir}/index.mdx` : `${dir}/${slug}.mdx`;

  // Create frontmatter based on content type
  const frontmatter = getFrontmatter(doc.type, doc);

  turndown
    .addRule('codeBlocks', {
      filter: ['pre'],
      replacement: defaultRules.fencedCodeBlock.replacement,
    })
    .addRule('htmlToJSX', {
      filter: ['div', 'dl', 'table'],
      replacement: (_content, node) =>
        htmlToJSXConverter.convert(node.outerHTML),
    });

  // const bodyContent = doc.body ? turndown.turndown(doc.body) : '';
  const content =
    frontmatter +
    formatCode(htmlToJSXConverter.convert(doc.body || ''))
      .trim()
      .replace(/;$/, '');

  return { content, fileName };
};

module.exports = toMarkdown;
