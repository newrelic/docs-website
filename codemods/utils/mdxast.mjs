import curry from 'lodash/fp/curry.js';
import { convert } from 'unist-util-is';
import { mdxAttribute } from './mdxast-builder.mjs';

export const isType = curry((type, node) => node.type === type);

export const isMdxBlockElement = curry(
  (name, node) => isType('mdxBlockElement', node) && node.name === name
);

export const isMdxSpanElement = curry(
  (name, node) => isType('mdxSpanElement', node) && node.name === name
);

export const isMdxElement = curry(
  (name, node) => isMdxBlockElement(name, node) || isMdxSpanElement(name, node)
);

export const hasOnlyChild = curry(
  (name, node) => node.children.length === 1 && isType(name, node.children[0])
);

export const flatten = (node) => {
  node.children = node.children[0].children;
};

export const hasAttribute = curry((attribute, node) =>
  node.attributes.some((attr) => attr.name === attribute)
);

export const findAttribute = (attributeName, node) => {
  if (!node.attributes) {
    return null;
  }
  const attribute = node.attributes.find((attr) => attr.name === attributeName);
  return attribute ? attribute.value : null;
};

export const hasClassName = curry((className, node) => {
  if (!node.attributes) {
    return false;
  }
  return node.attributes.some(
    (attr) =>
      attr.name === 'className' &&
      attr.value.split(/\s+/).some((cn) => cn === className)
  );
});

export const setAttribute = (name, value, node) => {
  const attribute =
    node.attributes && node.attributes.find((attr) => attr.name === name);

  if (attribute) {
    attribute.value = value;
  } else {
    addAttribute(name, value, node);
  }
};

export const removeAttribute = curry((attribute, node) => {
  const idx = node.attributes.findIndex((attr) => {
    return typeof attribute === 'function'
      ? attribute(attr)
      : attr.name === attribute;
  });

  if (idx !== -1) {
    node.attributes.splice(idx, 1);
  }
});

const addAttribute = curry((name, value, node) => {
  node.attributes.push(mdxAttribute(name, value));
});

const removeChild = curry((child, parent) => {
  const idx = parent.children.indexOf(child);

  if (idx !== -1) {
    parent.children.splice(idx, 1);
  }
});

export const isPlainText = (node) => {
  return (
    node.children.every((node) => node.type === 'text') ||
    (node.children.length === 1 &&
      node.children[0].type === 'paragraph' &&
      isPlainText(node.children[0]))
  );
};

export const findChild = (node, test) => {
  const matches = convert(test);

  return node.children.find((child, idx) => matches(child, idx, node));
};

export const parseImport = (node) => {
  const match = node.value.match(/import (\w+?) from ['"](.*?)['"]/);

  return match ? { expression: match[1], path: match[2] } : null;
};

export const containsImport = (tree, node) => {
  return tree.children.some((child) => {
    if (child.type !== 'import') {
      return false;
    }

    if (child.value === node.value) {
      return true;
    }

    const childImport = parseImport(child);
    const nodeImport = parseImport(node);

    // Git/macOS are case insensitive so `./images/Debian.png` is the same as
    // `./images/debian.png.`
    return childImport.path.toLowerCase() === nodeImport.path.toLowerCase();
  });
};
