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
      h(node, 'pre', {
        'data-type': 'component',
        'data-component': 'CodeBlock',
        'data-props': serializeJSValue(omit(node, ['type'])),
      }),
    deserialize: (h, node) =>
      h(node, 'code', deserializeJSValue(node.properties.dataProps)),
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
      const frontMatterAtt = node.children.reduce((acc, child) => {
        const key = child.properties.dataKey;
        const value = child.children[0].value;
        return { ...acc, [key]: value };
      }, {});

      return h(
        node,
        'yaml',
        yaml
          .safeDump({ ...data, ...frontMatterAtt }, { lineWidth: Infinity })
          .trim()
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
  ButtonGroup: {
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
  DocTile: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  DocTiles: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  DoNotTranslate: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        classNames: 'notranslate',
        wrapChildren: false,
      }),
  },
  ExternalLink: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  InlinePopover: {
    deserialize: (h, node) => {
      // this is to remove the `span`'s children to make this
      // a self closing tag.
      node.children = [];
      return deserializeComponent(h, node, { tagName: 'InlinePopover' });
    },
    serialize: (h, node) =>
      h(
        node,
        'span',
        {
          'data-type': 'component',
          'data-component': 'InlinePopover',
        },
        [u('text', 'account license key')]
      ),
  },
  Link: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Icon: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { hasChildrenProp: false }),
    serialize: (h, node) =>
      serializeComponent(h, node, {
        wrapChildren: false,
        // ensure rehype-minify-whitespace does not collapse any whitespace on
        // a text node that follows this node
        children: [u('text', '\u00A0')],
      }),
  },
  table: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, {
        tagName: 'table',
        wrapChildren: false,
        identifyComponent: false,
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
  LandingPageHero: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  HeroContent: {
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
        {
          'data-type': 'component',
          'data-component': 'InlineCode',
        },
        [u('text', toString(node))]
      );
    },
  },
  ImageSizing: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  InstallFeedback: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  Side: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  SideBySide: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  Steps: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  Step: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  Tabs: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  TabsBar: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  TabsBarItem: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  TabsPages: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  TabsPageItem: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  TechTile: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { hasChildrenProp: false }),
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['name'] }),
  },
  TechTileGrid: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
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
  var: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxSpanElement' }),
    serialize: (h, node) =>
      serializeComponent(h, node, {
        wrapChildren: false,
        identifyComponent: false,
        tagName: 'var',
      }),
  },
  mark: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxSpanElement' }),
    serialize: (h, node) =>
      serializeComponent(h, node, {
        wrapChildren: false,
        identifyComponent: false,
        tagName: 'mark',
      }),
  },
  figcaption: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  dd: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  dt: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  img: {
    deserialize: deserializeComponent,
    serialize: (h, node) =>
      serializeComponent(h, node, { textAttributes: ['alt'] }),
  },
  a: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  nobr: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  br: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  strong: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  b: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  sup: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  iframe: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
};
