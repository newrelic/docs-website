const visit = require('unist-util-visit');
const {
  findAttribute,
  isMdxBlockElement,
  hasClassName,
} = require('./utils/mdxast');
const {
  mdxAttribute,
  mdxValueExpression,
  mdxSpanElement,
} = require('./utils/mdxast-builder');
const { root } = require('mdast-builder');
const stringify = require('./utils/mdxast-stringify');
const toString = require('mdast-util-to-string');
const { select } = require('unist-util-select');

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
        mdxAttribute(
          'icon',
          mdxValueExpression(
            stringify(
              root([
                mdxSpanElement(
                  'img',
                  [
                    mdxAttribute('src', image.url),
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
};

module.exports = techTile;
