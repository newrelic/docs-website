const { curry } = require('lodash/fp');

const isMdxType = curry((type, node) => node.type === type);

const isMdxBlockElement = curry(
  (name, node) => isMdxType('mdxBlockElement', node) && node.name === name
);

const isMdxSpanElement = curry(
  (name, node) => isMdxType('mdxSpanElement', node) && node.name === name
);

const isMdxElement = curry(
  (name, node) => isMdxBlockElement(name, node) || isMdxSpanElement(name, node)
);

module.exports = {
  isMdxBlockElement,
  isMdxElement,
  isMdxSpanElement,
  isMdxType,
};
