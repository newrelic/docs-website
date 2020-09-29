const visit = require('unist-util-visit');
const {
  flatten,
  isMdxBlockElement,
  isMdxElement,
  hasOnlyChild,
} = require('./utils/mdxast');

const paragraphsInsideTableCells = () => (tree) => {
  visit(tree, isMdxBlockElement('td'), (td) => {
    if (
      hasOnlyChild('paragraph', td) &&
      td.children[0].children.every(isMdxElement('p'))
    ) {
      flatten(td);
    }

    visit(td, isMdxElement('p'), (p) => {
      p.type = 'paragraph';
    });
  });
};

module.exports = paragraphsInsideTableCells;
