const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const toMDXAST = require('@mdx-js/mdx/md-ast-to-mdx-ast');
const remarkMdx = require('remark-mdx');
const jsx = require('./jsx');
const jsxComment = require('./jsxComment');

const createProcessor = ({ codemods }) => {
  return unified()
    .use(stringify)
    .use(toMDAST)
    .use(remarkMdx)
    .use(jsxComment)
    .use(toMDXAST)
    .use(jsx, { plugins: codemods.jsx })
    .use(frontmatter, ['yaml']);
};

module.exports = createProcessor;
