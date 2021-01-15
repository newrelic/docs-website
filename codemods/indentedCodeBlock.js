const visit = require('unist-util-visit');

const indentedCodeBlock = () => (tree) => {
  visit(
    tree,
    (node) => node.type === 'code',
    (codeBlock, index, parent) => {
      const values = codeBlock.value.split('```').filter(Boolean);
      for (const value of values) {
        const i = values.indexOf(value);
        if (i === 0) {
          codeBlock.value = value;
          continue;
        }
        parent.children.splice(index + 1, 0, {
          type: i % 2 === 0 ? 'code' : 'text',
          value,
        });
      }
    }
  );
};

module.exports = indentedCodeBlock;
