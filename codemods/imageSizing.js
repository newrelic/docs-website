const visit = require('unist-util-visit');
const { isMdxBlockElement } = require('./utils/mdxast');

const imageSizing = () => (tree) => {
  visit(tree, isMdxBlockElement('ImageSizing'), (node, idx, parent) => {
    parent.children[idx] = node.children[0];
  });
};

module.exports = imageSizing;
