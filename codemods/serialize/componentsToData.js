const visit = require('unist-util-visit');
const { isMdxElement } = require('../utils/mdxast');
const serializeComponent = require('./serializeComponent');

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
    serialize: (node) => serializeComponent(node),
  },
  LandingPageTitle: {
    serialize: (node) => serializeComponent(node),
  },
  LandingPageTitleGrid: {
    serialize: (node) => serializeComponent(node),
  },
  InlineCode: {
    serialize: (node) => serializeComponent(node),
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
