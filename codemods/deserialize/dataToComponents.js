const visit = require('unist-util-visit');
const { has, set } = require('lodash');
const { findChild, removeChild } = require('../utils/mdxast');

const dataToComponents = () => (tree) => {
  visit(
    tree,
    (node) => {
      return (
        has(node, 'properties.dataComponent') && !has(node, 'properties.data')
      );
    },
    (node) => {
      const titleNode = findChild(node, (node) =>
        has(node, 'properties.dataPropText')
      );
      const attributes = JSON.parse(
        Buffer.from(node.properties.dataProp, 'base64')
      );

      set(node, 'h.name', node.properties.dataComponent);

      if (titleNode) {
        set(node, 'h.attributes', {
          ...attributes,
          title: titleNode.properties.dataPropText,
        });
        removeChild(titleNode, node);
      } else {
        set(node, 'h.attributes', attributes);
      }
      set(node, 'h.type', 'MDXBlockElement');
    }
  );
};

module.exports = dataToComponents;
