const visit = require('unist-util-visit');
const {
  removeAttribute,
  addAttribute,
  hasClassName,
  findAttribute,
} = require('./utils/mdxast');

const VARIANT = /\bbtn-((?!lg)[a-z]+\b)/;
const VARIANTS = { primary: 'primary', secondary: 'link' };

const buttons = () => (tree, file) => {
  visit(
    tree,
    (node) => {
      return hasClassName('btn', node);
    },
    (a) => {
      const className = findAttribute('className', a);
      const href = findAttribute('href', a);

      const [, variant] = className.match(VARIANT) || [];
      const themeVariant = VARIANTS[variant];
      a.name = 'Button';

      if (href) {
        a.name = 'ButtonLink';
        addAttribute('to', href, a);
      }

      removeAttribute('className', a);
      removeAttribute('href', a);

      if (themeVariant) {
        addAttribute('variant', themeVariant, a);
      } else {
        file.message(
          `Unknown variant '${variant}'`,
          a.position.start,
          'buttons'
        );
      }
    }
  );
};

module.exports = buttons;
