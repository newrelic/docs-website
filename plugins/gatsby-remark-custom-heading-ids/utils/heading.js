const filter = require('unist-util-filter');
const toString = require('mdast-util-to-string');
const convert = require('unist-util-is/convert');
const { last } = require('lodash');

const CUSTOM_ID = /\[#[\w].*\]+$/;
const isIgnoredNode = convert(['image']);

const getId = (node) => {
  // `value` here looks like ' [#some-id]'
  const { value } = last(node.children);
  // capture group grabs everything between the `#` and the right bracket `]`
  const id = [...value.matchAll(/\[#(.+)\]/g)]?.[0]?.[1];

  return id;
};

/**
 * Returns true for heading `node`s with a custom id.
 * These look like `## some heading [#heading-id]`.
 */
const isHeadingWithCustomId = (node) => {
  const lastChild = last(node.children);
  return (
    node.type === 'heading' && lastChild && CUSTOM_ID.test(lastChild?.value)
  );
};

const parseHeading = (node) => {
  if (node.type !== 'heading') {
    throw new Error('Node must be a heading');
  }

  node = filter(node, (el) => !isIgnoredNode(el));

  if (isHeadingWithCustomId(node)) {
    return getId(node);
  }

  return { id: null, text: toString(node) };
};

module.exports = { getId, parseHeading, isHeadingWithCustomId };
