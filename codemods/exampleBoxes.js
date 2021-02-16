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

const isExampleBox = (node) =>
  isMdxBlockElement('dl', node) && hasClassName('example-box', node);

const exampleBoxes = () => (tree, file) => {
  visit(
    tree,
    (node) => isExampleBox(node) && node.children.length === 1,
    (dl) => {
      const child = dl.children[0];
      const [title, children] = child.children;

      if (child.children.length > 2) {
        file.message(
          'Simple collapser example has more than 2 child nodes. Please revisit this implementation to handle the additional nodes',
          child.position.start,
          'example-boxes'
        );
      }

      setAttribute(
        'title',
        isPlainText(title)
          ? toString(title)
          : toJSXExpression(title, file, tree),
        child
      );

      dl.name = 'CollapserGroup';
      child.name = 'Collapser';
      child.children = [children];
      removeAttribute('className', dl);
    }
  );

  visit(tree, isExampleBox, (dl) => {
    dl.name = 'CollapserGroup';
    removeAttribute('className', dl);

    visit(
      dl,
      (node, _idx, parent) => parent === dl && isMdxBlockElement('dt', node),
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
      (node, _idx, parent) => parent === dl && isMdxBlockElement('dd', node),
      (dd) => {
        removeChild(dd, dl);
      }
    );
  });
};

module.exports = exampleBoxes;
