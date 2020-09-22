const transformJSX = require('./transformJSX');
const visit = require('unist-util-visit');

const jsx = ({ plugins }) => (tree) => {
  visit(tree, 'jsx', (node) => {
    node.value = transformJSX(node.value, plugins);
  });
};

module.exports = jsx;
