const { createCompiler } = require('@mdx-js/mdx');
const visit = require('unist-util-visit');

const INVALID_CODE_BLOCK = /`{3,}\n/;

const compiler = createCompiler();

const fencedCodeBlock = () => (tree) => {
  visit(
    tree,
    (node) => node.type === 'code' && INVALID_CODE_BLOCK.test(node.value),
    (node, idx, parent) => {
      const idxOfCode = node.value.indexOf('```');
      const text = node.value.slice(0, idxOfCode);
      const parsed = compiler.parse(
        node.value.slice(idxOfCode).replace(/^`+/, '')
      );

      node.value = text.trim();
      parent.children.splice(idx + 1, 0, ...parsed.children);
    }
  );
};

module.exports = fencedCodeBlock;
