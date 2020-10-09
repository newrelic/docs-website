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
  let addImport = false;
  visit(
    tree,
    (node) => {
      return hasClassName('btn', node);
    },
    (a) => {
      addImport = true;
      const className = findAttribute('className', a);
      const href = findAttribute('href', a);

      const [, variant] = className.match(VARIANT) || [];
      const themeVariant = VARIANTS[variant];

      if (href) {
        a.attributes.push({
          name: 'as',
          value: {
            type: 'mdxValueExpression',
            value: 'Link',
          },
          type: 'mdxAttribute',
        });
        addAttribute('to', href, a);
      }

      a.name = 'Button';
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

  // We are assuming all pages have frontmatter and therefore not handling
  // pages where frontmatter is missing. If the need arises, we'll have to insert
  // the import statement as the first child instead of the second child.

  if (addImport) {
    tree.children.splice(1, 0, {
      type: 'import',
      value: `import { Link } from 'gatsby'`,
    });
  }
};

module.exports = buttons;
