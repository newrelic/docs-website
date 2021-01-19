const visit = require('unist-util-visit');

const INDENTED_CODE_BLOCK = /`{3,}\n*/;

const indentedCodeBlock = () => (tree) => {
  visit(
    tree,
    (node) => node.type === 'code' && INDENTED_CODE_BLOCK.test(node.value),
    (codeBlock) => {
      codeBlock.value = codeBlock.value.replace(INDENTED_CODE_BLOCK, '').trim();
    }
  );
};

module.exports = indentedCodeBlock;
