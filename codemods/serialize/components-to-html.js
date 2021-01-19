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
    serialize: (h, node) =>
      serializeComponent(h, node, { tagName: 'code', wrapChildren: false }),
  },
  Video: {
    serialize: (h, node) => {
      return serializeComponent(h, node, { textAttributes: ['title'] });
    },
  },
  thead: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'thead',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tbody: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tbody',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tr: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tr',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  th: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'th',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  td: {
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'td',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
};

module.exports = handlers;
