const all = require('mdast-util-to-hast/lib/all');
const { findAttribute } = require('../../../codemods/utils/mdxast');
const toString = require('mdast-util-to-string');
const u = require('unist-builder');

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

const getAllAttributes = (node) =>
  node.attributes
    ? node.attributes.reduce((obj, { name: propName, value }) => {
        return { ...obj, [propName]: value };
      }, {})
    : {};

module.exports = {
  CodeBlock: (h, node) => {
    const props =
      node.meta &&
      node.meta.split(' ').reduce((obj, metaProp) => {
        const [propName, propValue] = metaProp.split('=');
        return {
          ...obj,
          [propName]: propValue,
        };
      });

    return h(
      node,
      'pre',
      {
        ...stripNulls({ ...props, lang: node.lang }),
      },
      [h(node, 'code', {}, [u('text', toString(node))])]
    );
  },
  Callout: (h, node) => {
    return h(
      node,
      'div',
      {
        className: `callout-${findAttribute('variant', node)}`,
      },
      [u('text', toString(node))]
    );
  },
  Button: (h, node) => {
    const className = [
      findAttribute('variant', node),
      findAttribute('size', node),
    ].filter(Boolean);
    return h(
      node,
      'button',
      {
        className: className.reduce(
          (str, prop) => str.append(` btn-${prop}`),
          'btn'
        ),
      },
      [u('text', toString(node))]
    );
  },
  ButtonLink: (h, node) => {
    const className = [
      findAttribute('variant', node),
      findAttribute('size', node),
    ].filter(Boolean);
    return h(
      node,
      'a',
      {
        className: className.reduce((arr, prop) => [...arr, `btn-${prop}`], [
          'btn',
        ]),
        href: findAttribute('to', node),
      },
      [u('text', toString(node))]
    );
  },
  Collapser: (h, node) => {
    return h(
      node,
      'div',
      {
        className: 'collapser',
        title: findAttribute('title', node),
      },
      all(h, node)
    );
  },
  CollapserGroup: (h, node) => {
    return h(
      node,
      'div',
      {
        className: 'collapser-group',
      },
      all(h, node)
    );
  },
  ExternalLink: (h, node) =>
    h(node, 'a', stripNulls(getAllAttributes(node)), all(h, node)),
  Link: (h, node) =>
    h(
      node,
      'a',
      {
        href: findAttribute('to', node),
      },
      all(h, node)
    ),
  Icon: (h, node) => {
    return h(
      node,
      'span',
      {
        className: 'icon',
        name: findAttribute('name', node),
      },
      [u('text', '\u00A0')]
    );
  },
  InlineCode: (h, node) => h(node, 'code', {}, [u('text', toString(node))]),
  table: (h, node) => h(node, 'table', {}, all(h, node)),
  thead: (h, node) => h(node, 'thead', {}, all(h, node)),
  tbody: (h, node) => h(node, 'tbody', {}, all(h, node)),
  tr: (h, node) => h(node, 'tr', {}, all(h, node)),
  th: (h, node) => h(node, 'tr', {}, all(h, node)),
  td: (h, node) => h(node, 'tr', {}, all(h, node)),
  var: (h, node) => h(node, 'tr', {}, [u('text', toString(node))]),
  mark: (h, node) => h(node, 'tr', {}, [u('text', toString(node))]),
};
