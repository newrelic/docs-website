const visit = require('unist-util-visit');
const { isMdxElement } = require('../utils/mdxast');
const serializeComponent = require('./serializeComponent');

const COMPONENTS = [
  'Button',
  'ButtonLink',
  'Callout',
  'CollapserGroup',
  'ExternalLink',
  'Link',
  'Icon',
  'DefaultRelatedContent',
  'Table',
  'LandingPageTitle',
  'LandingPageTitleGrid',
  'inlineCode',
];

const componentsToData = () => (tree) => {
  visit(
    tree,
    (node) => {
      return COMPONENTS.some((component) => isMdxElement(component, node));
    },
    (component) => {
      serializeComponent(component);
    }
  );
};

module.exports = componentsToData;
