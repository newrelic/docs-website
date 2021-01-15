const visit = require('unist-util-visit');

const indentedCodeBlock = () => (tree) => {
  visit(
    tree,
    (node) => node.type === 'code',
    (codeBlock, index, parent) => {
      const values = codeBlock.value.split('```').filter((val) => val !== '');
      values.forEach((val, i) => {
        if (i === 0) {
          codeBlock.value = val;
        } else if (i % 2 !== 0) {
          parent.children.splice(index + 1, 0, {
            type: 'text',
            value: val,
          });
        } else {
          parent.children.splice(index + 1, 0, {
            type: 'code',
            value: val,
          });
        }
      });
    }
  );
};

module.exports = indentedCodeBlock;
