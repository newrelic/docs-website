const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const {
  removeAttribute,
  isMdxBlockElement,
  isPlainText,
  hasClassName,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');
const toJSXExpression = require('./utils/to-jsx-expression');

const clamshells = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('clamshell-list', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      removeAttribute('className', dl);

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dt', node) && parent === dl,
        (dt, idx) => {
          const dd = dl.children[idx + 1];

          setAttribute(
            'title',
            isPlainText(dt) ? toString(dt) : toJSXExpression(dt, file, tree),
            dt
          );

          dt.name = 'Collapser';
          dt.children = dd.children;
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

module.exports = clamshells;
