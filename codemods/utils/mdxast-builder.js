const u = require('unist-builder');

const mdxAttribute = (name, value) => u('mdxAttribute', { name, value });
const mdxValueExpression = (value) => u('mdxValueExpression', value);

const mdxSpanElement = (name, attributes = [], children = []) =>
  u('mdxSpanElement', { attributes, name }, children);

const mdxBlockElement = (name, attributes = [], children = []) =>
  u('mdxBlockElement', { attributes, name }, children);

module.exports = {
  mdxAttribute,
  mdxBlockElement,
  mdxSpanElement,
  mdxValueExpression,
};
