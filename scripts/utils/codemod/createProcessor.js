const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('./stringify');
const frontmatter = require('remark-frontmatter');
const toMDXAST = require('@mdx-js/mdx/md-ast-to-mdx-ast');
const remarkMdx = require('remark-mdx');
const visit = require('unist-util-visit');
const transformJSX = require('./transformJSX');

const createProcessor = () => {
  return unified()
    .use(toMDAST)
    .use(remarkMdx)
    .use(toMDXAST)
    .use(jsx, {
      visitors: {
        JSXIdentifier(path) {
          if (path.node.name === 'Button') {
            path.node.name = 'CoolButton';
          }
        },
      },
    })
    .use(stringify)
    .use(frontmatter, ['yaml']);
};

const jsx = ({ visitors }) => (tree) => {
  visit(tree, 'jsx', async (node) => {
    node.value = transformJSX(node.value, visitors);
  });
};

module.exports = createProcessor;
