const visit = require('unist-util-visit');
const babel = require('@babel/core');

const jsx = ({ plugins }) => (tree) => {
  console.log(require('util').inspect(tree, { depth: null, colors: true }));

  visit(tree, 'mdxBlockElement', (node) => {
    node.value = transformJSX(node.value, plugins);
  });
};

const transformJSX = (jsx, plugins) => {
  const { code } = babel.transform(jsx, {
    configFile: false,
    plugins: ['@babel/plugin-syntax-jsx', ...plugins],
  });

  return code.replace(/;$/, '');
};

module.exports = jsx;
