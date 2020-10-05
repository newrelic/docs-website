const visit = require('unist-util-visit');
const { isMdxBlockElement } = require('./utils/mdxast');

const tables = () => (tree) => {
  visit(
    tree,
    (node) => {
      return isMdxBlockElement('table', node);
    },
    (table) => {
      table.name = 'Table';
    }
  );
};

module.exports = tables;
