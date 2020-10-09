const visit = require('unist-util-visit');
const { select } = require('unist-util-select');
const {
  isMdxBlockElement,
  hasClassName,
  removeAttribute,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');
const { last } = require('lodash');

const exampleBoxes = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('example-box', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      // removeAttribute('className', dl);

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dt', node) && parent === dl,
        (dt, idx) => {
          const dd = dl.children[idx + 1];
          const isSimpleExample = dd == null || dd.name !== 'dd';
          const { value: title } = select('text', dt);

          const children = isSimpleExample ? [last(dt.children)] : dd.children;

          dt.name = 'Collapser';
          dt.children = children;
          setAttribute('title', title, dt);
        }
      );

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dd', node) && parent === dl,
        (dd) => {
          removeChild(dd, dl);
        }
      );
    }
  );
};

module.exports = exampleBoxes;
