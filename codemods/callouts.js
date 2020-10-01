const visit = require('unist-util-visit');
const {
  addAttribute,
  isMdxBlockElement,
  removeAttribute,
} = require('./utils/mdxast');

const SPECIAL_VARIANTS = {
  permissions: 'tip',
  note: 'tip',
  pricing: 'tip',
};

const callouts = () => (tree) => {
  visit(
    tree,
    (node) => {
      return (
        isMdxBlockElement('div', node) &&
        node.attributes.some(
          (attr) => attr.name === 'className' && attr.value.includes('callout-')
        )
      );
    },
    (div) => {
      const { value: className } = div.attributes.find(
        (attr) => attr.name === 'className'
      );
      const callout = className
        .split(/\s+/)
        .find((className) => className.startsWith('callout-'));

      const variant = callout.replace('callout-', '');

      div.name = 'Callout';

      addAttribute('variant', SPECIAL_VARIANTS[variant] || variant, div);
      removeAttribute('className', div);
    }
  );
};

module.exports = callouts;
