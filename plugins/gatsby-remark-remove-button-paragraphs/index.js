const visit = require('unist-util-visit');

const isButtonLike = (node) =>
  node.type === 'mdxBlockElement' &&
  ['Button', 'ButtonLink'].includes(node.name);

module.exports = ({ markdownAST }) => {
  visit(markdownAST, isButtonLike, (node) => {
    if (!node.children) {
      return;
    }

    if (node.children[0].type === 'paragraph') {
      node.children.splice(0, 1, ...node.children[0].children);
    }
  });

  return markdownAST;
};
