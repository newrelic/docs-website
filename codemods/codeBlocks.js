const visit = require('unist-util-visit');
const { isMdxElement, findAttribute } = require('./utils/mdxast');
const toString = require('mdast-util-to-string');

const codeBlocks = () => (tree) => {
  visit(
    tree,
    (node) => isMdxElement('pre', node),
    (pre) => {
      const code = Buffer.from(toString(pre), 'base64').toString('utf-8');
      const language = findAttribute('language', pre);

      pre.type = 'code';
      pre.lang = language;
      pre.value = code;
      delete pre.children;
    }
  );
};

module.exports = codeBlocks;
