const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const { isMdxElement } = require('./utils/mdxast');

const inlineCodeBlock = () => (tree) => {
  visit(
    tree,
    (node, _idx, parent) =>
      isMdxElement('code', node) && !isMdxElement('pre', parent),
    (code) => {
      code.type = 'inlineCode';
      code.value = Buffer.from(toString(code), 'base64').toString('utf-8');
      delete code.children;
    }
  );
};

module.exports = inlineCodeBlock;
