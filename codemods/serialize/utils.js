const { omit } = require('lodash');
const all = require('mdast-util-to-hast/lib/all');
const u = require('unist-builder');

const serializeTextProp = (attribute) => {
  if (typeof attribute === 'string') {
    return u('text', attribute);
  }

  if (attribute.type === 'mdxValueExpression') {
    return u('text', attribute.value);
  }

  throw new Error('Unable to handle attribute');
};

const serializeProps = (node) => {
  return Buffer.from(
    JSON.stringify(
      node.attributes.map((attribute) => {
        return omit(attribute, ['position']);
      })
    )
  ).toString('base64');
};

const serializeComponent = (h, node, children = []) => {
  return h(
    node,
    'div',
    {
      'data-component': node.name,
      'data-props': serializeProps(node),
    },
    [
      ...children,
      node.children &&
        node.children.length &&
        h(node.position, 'div', { 'data-prop': 'children' }, all(h, node)),
    ].filter(Boolean)
  );
};

module.exports = { serializeComponent, serializeProps, serializeTextProp };
