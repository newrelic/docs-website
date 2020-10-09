const visit = require('unist-util-visit');
const { select } = require('unist-util-select');
const {
  isMdxBlockElement,
  isPlainText,
  hasClassName,
  removeAttribute,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');
const { last } = require('lodash');
const { stringify, mdxValueExpression } = require('./utils/mdxast-builder');
const toJSXExpression = require('./utils/to-jsx-expression');

const exampleBoxes = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('example-box', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      removeAttribute('className', dl);

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dt', node) && parent === dl,
        (dt, idx) => {
          const dd = dl.children[idx + 1];
          const isSimpleExample = dd == null || dd.name !== 'dd';
          const children = isSimpleExample ? [last(dt.children)] : dd.children;

          if (isSimpleExample) {
            setAttribute('title', select('text', dt).value, dt);
          } else if (isPlainText(dt)) {
            setAttribute('title', toString(dt), dt);
          } else {
            setAttribute(
              'title',
              mdxValueExpression(stringify(toJSXExpression(dt, file)).trim()),
              dt
            );
          }

          dt.name = 'Collapser';
          dt.children = children;
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
