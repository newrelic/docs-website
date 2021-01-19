const { serializeComponent, serializeTextProp } = require('./utils');
const all = require('mdast-util-to-hast/lib/all');

const handlers = {
  // React fragment
  [null]: {
    serialize: serializeComponent,
  },
  Button: {
    serialize: serializeComponent,
  },
  ButtonLink: {
    serialize: serializeComponent,
  },
  Callout: {
    serialize: (h, node) => {
      return serializeComponent(h, node, { textAttributes: ['title'] });
    },
  },
  Collapser: {
    serialize: (h, node) => {
      return serializeComponent(h, node, { textAttributes: ['title'] });
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
      return serializeComponent(h, node, { textAttributes: ['title'] });
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
      return serializeComponent(h, node, { textAttributes: ['title'] });
    },
  },
};

module.exports = handlers;
