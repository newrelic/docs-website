const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const yaml = require('js-yaml');
const {
  findAttribute,
  isMdxBlockElement,
  removeChild,
} = require('./utils/mdxast');

const watermarks = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('div', node) &&
      findAttribute('id', node) === 'watermark',
    (node, _idx, parent) => {
      const text = [];
      visit(node, 'text', ({ value }) => {
        text.push(value);
      });

      const frontmatterNode = tree.children.find(
        (node) => node.type === 'yaml'
      );
      const frontmatter = yaml.safeLoad(frontmatterNode.value);

      frontmatterNode.value = yaml.safeDump({
        ...frontmatter,
        watermark: text.join('\n'),
      });

      removeChild(node, parent);

      return visit.EXIT;
    }
  );
};

module.exports = watermarks;
