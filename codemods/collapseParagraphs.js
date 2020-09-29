const visit = require('unist-util-visit');

const collapseParagraphs = (types = []) => (tree) => {
  visit(
    tree,
    (node) =>
      types.some((type) =>
        typeof type === 'function' ? type(node) : node.type === type
      ),
    (node) => {
      if (node.children.length === 1 && node.children[0].type === 'paragraph') {
        node.children = node.children[0].children;
      }
    }
  );
};

module.exports = collapseParagraphs;
