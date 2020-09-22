const visit = require('unist-util-visit');

const uppercaseHeadings = () => (tree) => {
  visit(tree, 'heading', (node) => {
    visit(node, 'text', (node) => {
      node.value = node.value.toUpperCase();
    });
  });
};

module.exports = uppercaseHeadings;
