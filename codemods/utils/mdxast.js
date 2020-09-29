const { curry } = require('lodash/fp');

const isType = curry((type, node) => node.type === type);

const isMdxBlockElement = curry(
  (name, node) => isType('mdxBlockElement', node) && node.name === name
);

const isMdxSpanElement = curry(
  (name, node) => isType('mdxSpanElement', node) && node.name === name
);

const isMdxElement = curry(
  (name, node) => isMdxBlockElement(name, node) || isMdxSpanElement(name, node)
);

const hasOnlyChild = curry(
  (name, node) => node.children.length === 1 && isType(name, node.children[0])
);

const flatten = (node) => {
  node.children = node.children[0].children;
};

module.exports = {
  flatten,
  isMdxBlockElement,
  isMdxElement,
  isMdxSpanElement,
  hasOnlyChild,
  isType,
};
