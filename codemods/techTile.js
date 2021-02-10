const visit = require('unist-util-visit');
const {
  findAttribute,
  isMdxBlockElement,
  hasClassName,
} = require('./utils/mdxast');
const { mdxAttribute, mdxBlockElement } = require('./utils/mdxast-builder');
const toString = require('mdast-util-to-string');
const { select } = require('unist-util-select');

const isTechTile = isMdxBlockElement('TechTile');

const techTile = () => (tree) => {
  visit(
    tree,
    (node) => isMdxBlockElement('a', node) && hasClassName('tech-tile', node),
    (node) => {
      node.name = 'TechTile';

      const href = findAttribute('href', node);
      const image = select('image', node.children[0]);
      const paragraph = node.children[1];

      node.attributes = [
        mdxAttribute('name', toString(paragraph)),
        href && mdxAttribute('to', href),
      ].filter(Boolean);

      node.children = [image];
    }
  );

  visit(
    tree,
    (_node, _idx, parent) => parent === tree,
    (node, idx, parent) => {
      const previous = idx && parent.children[idx - 1];
      const isFirstTile =
        (isTechTile(node) && idx === 0) ||
        (isTechTile(node) && !isTechTile(previous));

      if (!isFirstTile) {
        return;
      }

      const count = parent.children
        .slice(idx)
        .findIndex((child, idx, items) => {
          const previous = items[idx - 1];

          return previous && isTechTile(previous) && !isTechTile(child);
        });

      const tiles = parent.children.slice(idx, idx + count);
      const tileGrid = mdxBlockElement('TechTileGrid', [], tiles);

      parent.children.splice(idx, count, tileGrid);

      return idx + 1;
    }
  );
};

module.exports = techTile;
