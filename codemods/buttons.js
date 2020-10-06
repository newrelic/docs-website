const visit = require('unist-util-visit');
const {
  isMdxBlockElement,
  removeAttribute,
  addAttribute,
} = require('./utils/mdxast');

const VARIANTS = ['btn-primary'];

const buttons = () => (tree) => {
  visit(
    tree,
    (node) => {
      return (
        isMdxBlockElement('a', node) &&
        node.attributes.some(
          (attr) => attr.name === 'className' && attr.value.includes('btn')
        )
      );
    },
    (a) => {
      a.name = 'Button';

      const { value: className } = a.attributes.find(
        (attr) => attr.name === 'className'
      );

      const variant = className
        .split(/\s+/)
        .find(
          (className) =>
            className.startsWith('btn-') && VARIANTS.includes(className)
        )
        .replace('btn-', '');

      addAttribute('variant', variant, a);
      a.attributes.push({
        name: 'as',
        value: 'a',
        type: 'mdxBlockElement',
      });
      removeAttribute('className', a);
    }
  );
};

module.exports = buttons;
