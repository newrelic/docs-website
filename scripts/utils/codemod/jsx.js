const visit = require('unist-util-visit');
const babel = require('@babel/core');

const jsx = ({ plugins }) => (tree) => {
  visit(tree, 'jsx', (node) => {
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
