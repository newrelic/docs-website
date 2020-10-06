const visit = require('unist-util-visit');
const {
  removeAttribute,
  isMdxBlockElement,
  hasClassName,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');

const clamshells = () => (tree) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('clamshell-list', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      removeAttribute('className', dl);

      visit(
        dl,
        (node) => isMdxBlockElement('dt', node),
        (dt, idx) => {
          const dd = dl.children[idx + 1];

          dt.name = 'Collapser';

          visit(dt, 'text', (text) => {
            setAttribute('title', text.value, dt);
          });

          dt.children = dd.children;
        }
      );

      visit(
        dl,
        (node) => isMdxBlockElement('dd', node),
        (dd) => {
          removeChild(dd, dl);
        }
      );
    }
  );
};

module.exports = clamshells;
