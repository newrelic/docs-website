const { findAttribute } = require('../utils/mdxast');
const { serializeComponent, serializeTextProp } = require('./utils');
const all = require('mdast-util-to-hast/lib/all');

const handlers = {
  Button: {
    serialize: serializeComponent,
  },
  ButtonLink: {
    serialize: serializeComponent,
  },
  Callout: {
    serialize: (h, node) => {
      const title = findAttribute('title', node);

      return serializeComponent(h, node, [
        title &&
          h(node.position, 'div', { 'data-prop': 'title' }, [
            serializeTextProp(title),
          ]),
      ]);
    },
  },
  Collapser: {
    serialize: (h, node) => {
      const title = findAttribute('title', node);

      return serializeComponent(h, node, [
        h(node.position, 'div', { 'data-prop': 'title' }, [
          serializeTextProp(title),
        ]),
      ]);
    },
  },
  CollapserGroup: {
    serialize: serializeComponent,
  },
  ExternalLink: {
    serialize: serializeComponent,
  },
  Link: {
    serialize: serializeComponent,
  },
  Icon: {
    serialize: serializeComponent,
  },
  Table: {
    serialize: (h, node) => {
      return h(node, 'table', {}, all(h, node));
    },
  },
  LandingPageTile: {
    serialize: (h, node) => {
      const title = findAttribute('title', node);

      return serializeComponent(h, node, [
        title &&
          h(node.position, 'div', { 'data-prop': 'title' }, [
            serializeTextProp(title),
          ]),
      ]);
    },
  },
  LandingPageTileGrid: {
    serialize: serializeComponent,
  },
  InlineCode: {
    serialize: serializeComponent,
  },
  Video: {
    serialize: (h, node) => {
      const title = findAttribute('title', node);

      return serializeComponent(h, node, [
        title &&
          h(node.position, 'div', { 'data-prop': 'title' }, [
            serializeTextProp(title),
          ]),
      ]);
    },
  },
};

module.exports = handlers;
