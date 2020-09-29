const visit = require('unist-util-visit');

const isMdxType = (type, node) => node.type === type;

const isMdxBlockElement = (name, node) =>
  isMdxType('mdxBlockElement', node) && node.name === name;

const isMdxSpanElement = (name, node) =>
  isMdxType('mdxSpanElement', node) && node.name === name;

const isMdxElement = (name, node) =>
  isMdxBlockElement(name, node) || isMdxSpanElement(name, node);

const paragraphsInsideTableCells = () => (tree) => {
  visit(
    tree,
    (node) => isMdxBlockElement('td', node),
    (td) => {
      visit(
        td,
        (node) => isMdxElement('p', node),
        (p) => {
          p.type = 'paragraph';
        }
      );
    }
  );
};

module.exports = paragraphsInsideTableCells;
