const visit = require('unist-util-visit');
const visitParents = require('unist-util-visit-parents');
const {
  flatten,
  hasAttribute,
  isMdxBlockElement,
  isMdxElement,
  hasOnlyChild,
  removeAttribute,
  removeChild,
} = require('./utils/mdxast');

const paragraphsInsideTableCells = () => (tree) => {
  visit(tree, isMdxBlockElement('td'), (td) => {
    if (
      hasOnlyChild('paragraph', td) &&
      td.children[0].children.every(isMdxElement('p'))
    ) {
      flatten(td);
    }

    visitParents(
      td,
      (node) =>
        isMdxElement('p', node) && hasAttribute('data-fixnewline', node),
      (p, ancestors) => {
        const parent = ancestors[ancestors.length - 1];
        const list = ancestors.find((node) => node.type === 'list');
        const listParent = ancestors[ancestors.indexOf(list) - 1];
        const listIdx = listParent.children.indexOf(list);

        listParent.children = [
          ...listParent.children.slice(0, listIdx + 1),
          p,
          ...listParent.children.slice(listIdx + 1),
        ];

        removeAttribute('data-fixnewline', p);
        removeChild(p, parent);
      }
    );

    visit(td, isMdxElement('p'), (p) => {
      p.type = 'paragraph';

      delete p.name;
      delete p.attributes;
    });
  });
};

module.exports = paragraphsInsideTableCells;
