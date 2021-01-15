const visit = require('unist-util-visit');
const { isType } = require('../utils/mdxast');
const { set } = require('lodash');

const linkRefsToData = () => (tree) => {
  visit(
    tree,
    (node) => {
      return isType('linkReference', node);
    },
    (node) => {
      set(node, 'data.hName', 'div');
      set(node, 'data.hProperties.data-type', node.type);
      set(node, 'data.hProperties.data-identifier', node.identifier);
      set(node, 'data.hProperties.data-label', node.label);
      set(node, 'data.hProperties.data-refType', node.referenceType);
    }
  );
};

module.exports = linkRefsToData;
