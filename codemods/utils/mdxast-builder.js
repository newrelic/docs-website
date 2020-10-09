const u = require('unist-builder');
const createProcessor = require('../../scripts/utils/codemod/create-processor');

const mdxAttribute = (name, value) => u('mdxAttribute', { name, value });
const mdxValueExpression = (value) => u('mdxValueExpression', value);

const mdxSpanElement = (name, attributes = [], children = []) =>
  u('mdxSpanElement', { attributes, name }, children);

const mdxBlockElement = (name, attributes = [], children = []) =>
  u('mdxBlockElement', { attributes, name }, children);

const stringify = (tree) => createProcessor().stringify(tree);

module.exports = {
  mdxAttribute,
  mdxBlockElement,
  mdxSpanElement,
  mdxValueExpression,
  stringify,
};
