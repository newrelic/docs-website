const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('./stringify');
const frontmatter = require('remark-frontmatter');
const toMDXAST = require('@mdx-js/mdx/md-ast-to-mdx-ast');
const remarkMdx = require('remark-mdx');
const visit = require('unist-util-visit');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const createProcessor = () => {
  return unified()
    .use(toMDAST)
    .use(remarkMdx)
    .use(toMDXAST)
    .use(processHtml)
    .use(stringify)
    .use(frontmatter, ['yaml']);
};

const processHtml = () => (tree) => {
  visit(tree, 'jsx', async (node) => {
    const ast = require('@babel/parser').parse(node.value, {
      plugins: ['jsx'],
    });

    traverse(ast, {
      JSXIdentifier(path) {
        if (path.node.name === 'Button') {
          path.node.name = 'CoolButton';
        }
      },
    });

    const { code } = generate(ast, {}, node.value);

    node.value = code;
  });
};

module.exports = createProcessor;
