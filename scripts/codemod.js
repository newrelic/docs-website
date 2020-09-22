const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('./utils/codemod/stringify');
const frontmatter = require('remark-frontmatter');
const toMDXAST = require('@mdx-js/mdx/md-ast-to-mdx-ast');
const remarkMdx = require('remark-mdx');
const visit = require('unist-util-visit');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const { read } = require('to-vfile');

const FILE =
  './src/content/docs/mobile-apps/new-relic-mobile-apps/ios-app/introduction-ios-mobile-app.mdx';

const process = async (path) => {
  const file = await read(path);

  const processor = unified()
    .use(toMDAST)
    .use(remarkMdx)
    .use(toMDXAST)
    .use(processHtml)
    .use(stringify)
    .use(frontmatter, ['yaml']);

  const { contents } = await processor.process(file);

  console.log(contents);
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

process(FILE);
