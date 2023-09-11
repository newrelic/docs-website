import { u } from 'unist-builder';
import { all } from './all.mjs';

const own = {}.hasOwnProperty;

// Transform an unknown node.
const unknown = (h, node) => {
  if (text(node)) {
    return h.augment(node, u('text', node.value));
  }

  return h(node, 'div', all(h, node));
};

// Visit a node.
export const one = (h, node, parent) => {
  const type = node && node.type;
  let fn;

  // Fail on non-nodes.
  if (!type) {
    throw new Error(`Expected node, got ${node}`);
  }

  if (own.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.indexOf(type) > -1) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent);
};

// Check if the node should be renderered as a text node.
function text(node) {
  const data = node.data || {};

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false;
  }

  return 'value' in node;
}

function returnNode(h, node) {
  let clone;

  if (node.children) {
    clone = { ...node };
    clone.children = all(h, node);
    return clone;
  }

  return node;
}
