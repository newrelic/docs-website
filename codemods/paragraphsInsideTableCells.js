const visit = require('unist-util-visit');
const { isMdxBlockElement, isMdxElement } = require('./utils/mdxast');

const paragraphsInsideTableCells = () => (tree) => {
  visit(tree, isMdxBlockElement('td'), (td) => {
    visit(td, isMdxElement('p'), (p) => {
      p.type = 'paragraph';
    });
  });
};

module.exports = paragraphsInsideTableCells;
