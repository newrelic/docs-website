const visit = require('unist-util-visit');
const {
  removeAttribute,
  addAttribute,
  hasClassName,
  findAttribute,
} = require('./utils/mdxast');

const VARIANTS = ['btn-primary'];

const buttons = () => (tree, file) => {
  if (file.path === './src/content/docs/agents/go-agent/index.mdx') {
    console.dir(tree, { depth: 4 });
  }
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
          value: {
            type: 'mdxValueExpression',
            value: 'Link',
          },
          type: 'mdxAttribute',
        });
        addAttribute('to', href, a);
      }

      a.name = 'Button';
      addAttribute('variant', variant, a);
      removeAttribute('className', a);
      removeAttribute('href', a);
    }
  );

  // We are assuming all pages have frontmatter

  if (addImport) {
    tree.children.splice(1, 0, {
      type: 'import',
      value: `import { Link } from 'gatsby'`,
    });
  }
};

module.exports = buttons;
