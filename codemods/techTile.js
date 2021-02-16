const visit = require('unist-util-visit');
const path = require('path');
const {
  containsImport,
  findAttribute,
  isMdxBlockElement,
  hasClassName,
} = require('./utils/mdxast');
const {
  mdxAttribute,
  mdxImport,
  mdxValueExpression,
  mdxBlockElement,
  mdxSpanElement,
} = require('./utils/mdxast-builder');
const { root } = require('mdast-builder');
const stringify = require('./utils/mdxast-stringify');
const toString = require('mdast-util-to-string');
const { select } = require('unist-util-select');
const { camelCase } = require('lodash');

const isTechTile = isMdxBlockElement('TechTile');

const techTile = () => (tree) => {
  const imageImports = [];

  visit(
    tree,
    (node) => isMdxBlockElement('a', node) && hasClassName('tech-tile', node),
    (node) => {
      node.name = 'TechTile';

      const href = findAttribute('href', node);
      const image = select('image', node.children[0]);
      const paragraph = node.children[1];

      const isRelativeImport = Boolean(image.url.match(/^\.\.?\//));
      const importName = camelCase(
        path.basename(image.url, path.extname(image.url))
      );

      if (isRelativeImport) {
        imageImports.push(mdxImport(importName, image.url));
      }

      node.attributes = [
        mdxAttribute('name', toString(paragraph)),
        href && mdxAttribute('to', href),
        mdxAttribute(
          'icon',
          mdxValueExpression(
            stringify(
              root([
                mdxSpanElement(
                  'img',
                  [
                    mdxAttribute(
                      'src',
                      isRelativeImport
                        ? mdxValueExpression(importName)
                        : image.url
                    ),
                    image.title && mdxAttribute('title', image.title),
                    image.alt && mdxAttribute('alt', image.alt),
                  ].filter(Boolean)
                ),
              ])
            ).trim()
          )
        ),
      ].filter(Boolean);

      node.children = [];
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

  imageImports.reverse().forEach((node) => {
    if (!containsImport(tree, node)) {
      tree.children.splice(1, 0, node);
    }
  });
};

module.exports = techTile;
