const visit = require('unist-util-visit');
const { isType } = require('../utils/mdxast');
const { set } = require('lodash');

const codeBlocksToData = () => (tree) => {
  visit(
    tree,
    (node) => {
      return isType('code', node);
    },
    (node) => {
      console.log(node);
      set(node, 'data.hName', 'div');
      set(node, 'data.hProperties.data-type', node.type);
      set(node, 'data.hProperties.data-lang', node.lang);
      set(node, 'data.hProperties.data-meta', node.meta);
      set(
        node,
        'data.hProperties.data-value',
        Buffer(node.value).toString('base64')
      );
    }
  );
};

module.exports = codeBlocksToData;
