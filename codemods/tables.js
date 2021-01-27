const visit = require('unist-util-visit');
const { isMdxBlockElement, removeAttribute } = require('./utils/mdxast');

const tables = () => (tree) => {
  visit(
    tree,
    (node) => {
      return isMdxBlockElement('table', node);
    },
    (table) => {
      removeAttribute('className', table);
    }
  );
};

module.exports = tables;
