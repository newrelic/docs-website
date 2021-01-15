const visit = require('unist-util-visit');
const { isMdxElement, findAttribute } = require('../utils/mdxast');
const serializeComponent = require('./serializeComponent');
const { set } = require('lodash');

const TITLE_COMPONENTS = ['Collapser', 'Video', 'LandingPageTile'];

const titleComponentsToData = () => (tree) => {
  visit(
    tree,
    (node) => {
      return TITLE_COMPONENTS.some((component) =>
        isMdxElement(component, node)
      );
    },
    (component) => {
      serializeComponent(component);
      const title = findAttribute('title', component);
      title &&
        set(component, 'children', [
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
          ...component.children,
        ]);
    }
  );
};

module.exports = titleComponentsToData;
