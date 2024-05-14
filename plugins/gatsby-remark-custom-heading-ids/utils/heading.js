const filter = require('unist-util-filter');
const toString = require('mdast-util-to-string');
const convert = require('unist-util-is/convert');
const { last } = require('lodash');

const CUSTOM_ID = /\[#[\w].*\]+$/;
const isIgnoredNode = convert(['image']);

const getIdAndText = (node) => {
  const { value } = last(node.children);
  const textAndId = value.split('[');

  return {
    id: textAndId[1].replace(']', '').replace('#', ''),
    text: textAndId[0].trim(),
  };
};

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
    return getIdAndText(node);
  }

  return { id: null, text: toString(node) };
};

module.exports = { getIdAndText, parseHeading, isHeadingWithCustomId };
