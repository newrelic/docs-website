import yaml from 'js-yaml';
import omit from 'lodash/omit.js';
import toString from 'mdast-util-to-string';
import u from 'unist-builder';

import {
  createJsonStr,
  serializeComponent,
  serializeJSValue,
} from './serialization-helpers.mjs';
import {
  deserializeComponent,
  deserializeJSValue,
} from './deserialization-helpers.mjs';

export default {
  CodeBlock: {
    serialize: (_state, node) => {
      return {
        type: 'element',
        tagName: 'pre',
        properties: {
          'data-type': 'component',
          'data-component': 'CodeBlock',
          'data-props': serializeJSValue(omit(node, ['type'])),
        },
      };
    },
    deserialize: (_state, node) => {
      const { lang, value } = deserializeJSValue(node.properties.dataProps);
      const { meta } = JSON.parse(
        Buffer.from(node.properties.dataProps ?? '', 'base64').toString()
      );
      return {
        type: 'code',
        meta,
        value,
        lang,
      };
    },
  },
  import: {
    deserialize: (_state, node) => {
      const value = Buffer.from(node.properties.dataValue, 'base64').toString();

      return {
        type: 'mdxjsEsm',
        value,
      };
    },
    serialize: (_state, node) => {
      return {
        type: 'element',
        tagName: 'div',
        properties: {
          'data-type': 'import',
          'data-value': Buffer.from(node.value).toString('base64'),
        },
      };
    },
  },
  frontmatter: {
    deserialize: (_state, node) => {
      const data = deserializeJSValue(node.properties.dataValue);
      const frontMatterAtt = node.children.reduce((acc, child) => {
        const key = child.properties.dataKey;
        const value = child.children[0].value;
        return { ...acc, [key]: value };
      }, {});

      return {
        type: 'yaml',
        value: yaml
          .safeDump({ ...data, ...frontMatterAtt }, { lineWidth: Infinity })
          .trim(),
      };
    },
    serialize: (_state, node) => {
      const data = yaml.safeLoad(node.value);
      const serializeValue = (name) =>
        data[name] && {
          type: 'element',
          tagName: 'div',
          properties: {
            'data-key': name,
          },
          children: [{ type: 'text', value: data[name] }],
        };

      return {
        type: 'element',
        tagName: 'div',
        properties: {
          'data-type': 'frontmatter',
          'data-value': serializeJSValue(data),
        },
        children: [
          serializeValue('title'),
          serializeValue('description'),
          serializeValue('shortDescription'),
        ].filter(Boolean),
      };
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
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['title'] }),
  },
  Collapser: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['title'] }),
  },
  CollapserGroup: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  DeveloperIcons: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  DocTile: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, { tagName: 'div', textAttributes: ['title'] }),
  },
  DocTiles: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  // DoNotTranslate component
  DNT: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        classNames: 'notranslate',
        wrapChildren: false,
      }),
  },
  dnt: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        classNames: 'notranslate',
        wrapChildren: false,
      }),
  },
  CONTRIBUTOR_NOTE: {
    // this pulls this component out of translated files
    // there should never be anything to deserialize
    serialize: () => null,
  },
  EolPage: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  ExternalLink: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  FunctionDefinition: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  InlinePopover: {
    deserialize: (state, node) => {
      // this is to remove the `span`'s children to make this
      // a self closing tag.
      node.children = [];
      return deserializeComponent(state, node, { tagName: 'InlinePopover' });
    },
    // serialize: serializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        classNames: 'notranslate',
        wrapChildren: false,
      }),
  },
  InlineSignup: {
    serialize: serializeComponent,
    deserialize: deserializeComponent,
  },
  Link: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  Icon: {
    deserialize: (state, node) =>
      deserializeComponent(state, node, { hasChildrenProp: false }),
    serialize: (state, node) =>
      serializeComponent(state, node, {
        wrapChildren: false,
        // ensure rehype-minify-whitespace does not collapse any whitespace on
        // a text node that follows this node
        children: [u('text', '\u00A0')],
      }),
  },
  OptionReference: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  table: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'table',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  LandingPageTile: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['title'] }),
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
    deserialize: (state, node) => ({
      type: 'mdxJsxFlowElement',
      name: 'InlineCode',
      children: state.all(node),
    }),
    serialize: (_state, node) => {
      return {
        type: 'element',
        tagName: 'code',
        properties: {
          'data-type': 'component',
          'data-component': 'InlineCode',
        },
        children: [u('text', toString(node))],
      };
    },
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
    deserialize: (state, node) =>
      deserializeComponent(state, node, { hasChildrenProp: false }),
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['name'] }),
  },
  TechTileGrid: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  TypeDefReference: {
    deserialize: deserializeComponent,
    serialize: serializeComponent,
  },
  UserJourneyControls: {
    deserialize: (state, node) => {
      const data = deserializeJSValue(node.properties.dataValue);
      const translatedProps = node.children.reduce((acc, child) => {
        const key = child.properties.dataKey;
        const value = child.children[0].value;
        return { ...acc, [key]: value };
      }, {});
      const stuff = data.attributes.map((attr) => {
        const prop = JSON.parse(createJsonStr(attr.value.value));
        prop.title = translatedProps[`${attr.name}-title`];
        prop.body = translatedProps[`${attr.name}-body`];
        attr.value.value = JSON.stringify(prop);
        return attr;
      });

      data.attributes = stuff;

      return {
        ...node,
        ...data,
        type: 'mdxJsxFlowElement',
      };
    },
    serialize: (_state, node) => {
      const serializeAttribute = (name, attribute) => {
        const attributeValue = JSON.parse(createJsonStr(attribute.value));
        return [
          {
            type: 'element',
            tagName: 'div',
            properties: {
              'data-key': `${name}-title`,
            },
            children: [
              {
                type: 'text',
                value: attributeValue.title,
              },
            ],
          },
          {
            type: 'element',
            tagName: 'div',
            properties: {
              'data-key': `${name}-body`,
            },
            children: [
              {
                type: 'text',
                value: attributeValue.body,
              },
            ],
          },
        ];
      };
      const serializedAttributes = node.attributes.flatMap((attribute) =>
        serializeAttribute(attribute.name, attribute.value)
      );
      return {
        type: 'element',
        tagName: 'div',
        properties: {
          'data-type': 'UserJourneyControls',
          'data-value': serializeJSValue(node),
        },
        children: serializedAttributes,
      };
    },
  },
  Video: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['title'] }),
  },
  thead: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'thead',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tbody: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'tbody',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  tr: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'tr',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  th: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'th',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  td: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'td',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  p: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'p',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  ul: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'ul',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  ol: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'ol',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  li: {
    deserialize: deserializeComponent,
    serialize: (state, node) =>
      serializeComponent(state, node, {
        tagName: 'li',
        wrapChildren: false,
        identifyComponent: false,
      }),
  },
  var: {
    deserialize: (state, node) =>
      deserializeComponent(state, node, { type: 'mdxJsxTextElement' }),
    serialize: (state, node) =>
      serializeComponent(state, node, {
        wrapChildren: false,
        identifyComponent: false,
        tagName: 'var',
      }),
  },
  mark: {
    deserialize: (state, node) =>
      deserializeComponent(state, node, { type: 'mdxJsxTextElement' }),
    serialize: (state, node) =>
      serializeComponent(state, node, {
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
    serialize: (state, node) =>
      serializeComponent(state, node, { textAttributes: ['alt'] }),
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
  span: {
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
  h1: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
  h2: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
  h3: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
  h4: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
  h5: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
  h6: {
    deserialize: (h, node) =>
      deserializeComponent(h, node, { type: 'mdxJsxTextElement' }),
    serialize: serializeComponent,
  },
};
