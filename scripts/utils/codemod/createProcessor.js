const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('./stringify');
const frontmatter = require('remark-frontmatter');
const toMDXAST = require('@mdx-js/mdx/md-ast-to-mdx-ast');
const remarkMdx = require('remark-mdx');
const visit = require('unist-util-visit');
const transformJSX = require('./transformJSX');

const createProcessor = ({ codemods }) => {
  return unified()
    .use(stringify)
    .use(toMDAST)
    .use(remarkMdx)
    .use(toMDXAST)
    .use(jsx, { plugins: codemods.jsx })
    .use(frontmatter, ['yaml']);
};

const jsx = ({ plugins }) => (tree) => {
  visit(tree, 'jsx', (node) => {
    node.value = transformJSX(node.value, plugins);
  });
};

module.exports = createProcessor;
