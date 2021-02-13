const visit = require('unist-util-visit');
const phrasing = require('hast-util-phrasing');
const is = require('hast-util-is-element');
const has = require('hast-util-has-property');
const { parseStyleString, compileStyleObject } = require('../utils/styles');

const isGatsbyImageWrapper = (node) =>
  is(node, 'span') &&
  has(node, 'className') &&
  node.properties.className.some(
    (className) => className === 'gatsby-resp-image-wrapper'
  );

const inlineImages = (options = {}) => (tree) => {
  const { spacing } = options;

  visit(tree, isGatsbyImageWrapper, (node, idx, parent) => {
    const isBlockImage = is(parent, 'p') && parent.children.length === 1;

    if (isBlockImage) {
      return;
    }

    const style = parseStyleString(node.properties.style);
    const hasPreviousPhrasingContent = phrasing(parent.children[idx - 1] || {});
    const hasNextPhrasingContent = phrasing(parent.children[idx + 1] || {});

    style.display = 'inline-block';
    style.width = style.width || '100%';
    style['margin-left'] = null;
    style['margin-right'] = null;

    if (spacing && hasPreviousPhrasingContent) {
      style['margin-left'] = spacing;
    }

    if (spacing && hasNextPhrasingContent) {
      style['margin-right'] = spacing;
    }

    if (hasPreviousPhrasingContent || hasNextPhrasingContent) {
      style['vertical-align'] = style['vertical-align'] || 'text-bottom';
    }

    node.properties.style = compileStyleObject(style);
  });
};

module.exports = inlineImages;
