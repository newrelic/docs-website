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
      const { value: className } = a.attributes.find(
        (attr) => attr.name === 'className'
      );

      const { value: href } = a.attributes.find((attr) => attr.name === 'href');

      const variant = className
        .split(/\s+/)
        .find(
          (className) =>
            className.startsWith('btn-') && VARIANTS.includes(className)
        )
        .replace('btn-', '');

      if (href) {
        a.attributes.push({
          name: 'as',
          value: 'a',
          type: 'mdxBlockElement',
        });
      } else {
        removeAttribute('href', a);
      }

      a.name = 'Button';
      addAttribute('variant', variant, a);
      removeAttribute('className', a);
    }
  );
};

module.exports = buttons;
