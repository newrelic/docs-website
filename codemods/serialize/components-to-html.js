const visit = require('unist-util-visit');
const { isMdxElement, findAttribute } = require('../utils/mdxast');
const serializeComponent = require('./serializeComponent');
const { set } = require('lodash');

const handlers = {
  Button: {
    serialize: (node) => serializeComponent(node),
  },
  ButtonLink: {
    serialize: (node) => serializeComponent(node),
  },
  Callout: {
    serialize: (node) => serializeComponent(node),
  },
  Collapser: {
    serialize: (node) => {
      serializeComponent(node);
      const title = findAttribute('title', node);
      title &&
        set(node, 'children', [
          {
            type: 'text',
            value: '',
            data: {
              hName: 'div',
              hProperties: {
                'data-prop-text': 'title',
              },
              hChildren: [
                {
                  type: 'text',
                  value: title,
                },
              ],
            },
          },
          ...node.children,
        ]);
    },
  },
  CollapserGroup: {
    serialize: (node) => serializeComponent(node),
  },
  ExternalLink: {
    serialize: (node) => serializeComponent(node),
  },
  Link: {
    serialize: (node) => serializeComponent(node),
  },
  Icon: {
    serialize: (node) => serializeComponent(node),
  },
  Table: {
    serialize: (node) => {
      node.data = {
        hName: 'table',
      };
    },
  },
  LandingPageTile: {
    serialize: (node) => {
      serializeComponent(node);
      const title = findAttribute('title', node);
      title &&
        set(node, 'children', [
          {
            type: 'text',
            value: '',
            data: {
              hName: 'div',
              hProperties: {
                'data-prop-text': 'title',
              },
              hChildren: [
                {
                  type: 'text',
                  value: title,
                },
              ],
            },
          },
          ...node.children,
        ]);
    },
  },
  LandingPageTileGrid: {
    serialize: (node) => serializeComponent(node),
  },
  InlineCode: {
    serialize: (node) => serializeComponent(node),
  },
  Video: {
    serialize: (node) => {
      serializeComponent(node);
      const title = findAttribute('title', node);
      title &&
        set(node, 'children', [
          {
            type: 'text',
            value: '',
            data: {
              hName: 'div',
              hProperties: {
                'data-prop-text': 'title',
              },
              hChildren: [
                {
                  type: 'text',
                  value: title,
                },
              ],
            },
          },
          ...node.children,
        ]);
    },
  },
};

const componentsToData = () => (tree) => {
  visit(
    tree,
    (node) =>
      Object.keys(handlers).some((componentName) =>
        isMdxElement(componentName, node)
      ),
    (node, ...args) => {
      handlers[node.name].serialize(node, ...args);
    }
  );
};

module.exports = componentsToData;
