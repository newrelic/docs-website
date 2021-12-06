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
// const all = require('hast-util-to-mdast/lib/all');

module.exports = {
  // CodeBlock: {
  //   serialize: (h, node) =>
  //     h(
  //       node,
  //       'pre',
  //       {
  //         'data-type': 'component',
  //         'data-component': 'CodeBlock',
  //         'data-props': serializeJSValue(omit(node, ['type'])),
  //       },
  //       [h(node, 'code')]
  //     ),
  //   deserialize: (h, node) =>
  //     h(node, 'code', deserializeJSValue(node.properties.dataProps)),
  // },
  CodeBlock: {
    serialize: (h, node) => {
      // console.log('start:', node);
      return h(
        node,
        'pre',
        {
          'data-type': 'component',
          'data-component': 'CodeBlock',
          'data-props': serializeJSValue(omit(node, ['type'])),
        },
        [h(node, 'code')]
      );
    },
    deserialize: (h, node) => {
      const results = h(
        node,
        'code',
        deserializeJSValue(node.properties.dataProps)
      );
      // console.log('end:', results);
      return results;
    },
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
  DoNotTranslate: {
    deserialize: deserializeComponent,
    // deserialize: (h, node) => {
    //   console.dir(node, { depth: null });
    //   return h(
    //     node,
    //     node.properties.dataTag,
    //     deserializeJSValue(node.properties.dataProps)
    //   );
    // },
    // serialize: (h, node) => {
    //   const inferredTagName = node.type === 'mdxSpanElement' ? 'span' : 'div';
    //   return h(node, inferredTagName, {
    //     'data-type': 'component',
    //     'data-component': 'DoNotTranslate',
    //     'data-tag': inferredTagName,
    //     'data-props': serializeJSValue(omit(node, ['type'])),
    //   });
    // },
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
        { 'data-type': 'component', 'data-component': 'InlineCode' },
        [u('text', toString(node))]
      );
    },
  },
  ImageSizing: {
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
  span: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
};
