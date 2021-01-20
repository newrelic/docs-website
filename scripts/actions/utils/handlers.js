const {
  serializeComponent,
  serializeJSValue,
} = require('./serialization-helpers');
const {
  deserializeComponent,
  deserializeJSValue,
} = require('./deserialization-helpers');
const yaml = require('js-yaml');
const u = require('unist-builder');
const toString = require('mdast-util-to-string');
const { omit } = require('lodash');

module.exports = {
  CodeBlock: {
    serialize: (h, node) =>
      h(
        node,
        'pre',
        {
          'data-type': 'component',
          'data-component': 'CodeBlock',
          'data-props': serializeJSValue(omit(node, ['type'])),
        },
        [h(node, 'code')]
      ),
  },
  import: {
    deserialize: (h, node) => {
      const value = Buffer.from(node.properties.dataValue, 'base64').toString();

      return h(node, 'import', value);
    },
    serialize: (h, node) =>
      h(node, 'div', {
        'data-type': 'import',
        'data-value': Buffer.from(node.value).toString('base64'),
      }),
  },
  frontmatter: {
    deserialize: (h, node) => {
      const data = deserializeJSValue(node.properties.dataValue);

      return h(
        node,
        'yaml',
        yaml.safeDump(data, { lineWidth: Infinity }).trim()
      );
    },
    serialize: (h, node) => {
      const data = yaml.safeLoad(node.value);
      const serializeValue = (name) =>
        data[name] &&
        h(node, 'div', { 'data-key': name }, [u('text', data[name])]);

      return h(
        node,
        'div',
        {
          'data-type': 'frontmatter',
          'data-value': serializeJSValue(data),
        },
        [
          serializeValue('title'),
          serializeValue('description'),
          serializeValue('shortDescription'),
        ].filter(Boolean)
      );
    },
  },
  // React fragment
  [null]: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Button: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  ButtonLink: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Callout: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  Collapser: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  CollapserGroup: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  ExternalLink: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Link: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Icon: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { ignoreChildren: true }),
    serialize: (h, node) =>
      serializeComponent(h, node, {
        wrapChildren: false,
        // ensure rehype-minify-whitespace does not collapse any whitespace on
        // a text node that follows this node
        children: [u('text', '\u00A0')],
      }),
  },
  Table: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'table',
        wrapChildren: false,
      }),
  },
  LandingPageTile: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  LandingPageTileGrid: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  InlineCode: {
    deserialize: (h, node) =>
      h(node, 'mdxSpanElement', { name: 'InlineCode' }, node.children),
    serialize: (h, node) => {
      return h(
        node,
        'code',
        { 'data-type': 'component', 'data-component': 'InlineCode' },
        [u('text', toString(node))]
      );
    },
  },
  Video: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['title'] }),
  },
  thead: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'thead',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tbody: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tbody',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tr: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'tr',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  th: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'th',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  td: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'td',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
};
