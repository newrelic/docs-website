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
const toString = require('mdast-util-to-string');
const toJSXExpression = require('./utils/to-jsx-expression');

const exampleBoxes = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('example-box', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      removeAttribute('className', dl);

      if (dl.children.length === 1) {
        const node = dl.children[0];

        node.name = 'Collapser';

        if (node.children.length > 2) {
          file.message(
            'Simple collapser example has more than 2 child nodes. Please revisit this implementation to handle the additional nodes',
            node.position.start,
            'example-boxes'
          );
        }

        const [title, children] = node.children;

        setAttribute(
          'title',
          isPlainText(title) ? toString(title) : toJSXExpression(title, file),
          node
        );

        node.children = [children];
      } else {
        visit(
          dl,
          (node, idx, parent) =>
            parent === dl &&
            isMdxBlockElement('dt', node) &&
            parent.children[idx + 1] != null,
          (dt, idx) => {
            const dd = dl.children[idx + 1];

            setAttribute(
              'title',
              isPlainText(dt) ? toString(dt) : toJSXExpression(dt, file),
              dt
            );

            dt.name = 'Collapser';
            dt.children = dd.children;
          }
        );

        visit(
          dl,
          (node, _idx, parent) =>
            parent === dl && isMdxBlockElement('dd', node),
          (dd) => {
            removeChild(dd, dl);
          }
        );
      }
    }
  );
};

module.exports = exampleBoxes;
