const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const {
  removeAttribute,
  isMdxBlockElement,
  hasClassName,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');
const { stringify, mdxValueExpression } = require('./utils/mdxast-builder');
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
          const isPlainTextTitle =
            dt.children.length === 1 &&
            dt.children[0].type === 'paragraph' &&
            dt.children[0].children.every((node) => node.type === 'text');

          dt.name = 'Collapser';

          if (isPlainTextTitle) {
            setAttribute('title', toString(dt), dt);
          } else {
            setAttribute(
              'title',
              mdxValueExpression(stringify(toJSXExpression(dt, file)).trim()),
              dt
            );
          }

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
