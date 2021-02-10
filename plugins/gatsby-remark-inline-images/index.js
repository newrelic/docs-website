const visit = require('unist-util-visit');
const phrasing = require('mdast-util-phrasing');
const { get } = require('lodash');

const parseStyleString = (string) =>
  string
    .split(/;\s*/)
    .filter(Boolean)
    .reduce((style, rule) => {
      const [property, value] = rule.split(/:\s*/);

      return { ...style, [property]: value };
    }, {});

const compileStyleObject = (styles) =>
  Object.entries(styles)
    .map((rule) => rule.join(': '))
    .join('; ');

// NOTE: This plugin requires gatsby-remark-mdx-v2-images to run before it
module.exports = ({ markdownAST }, pluginOptions) => {
  const { spacing } = pluginOptions;

  visit(
    markdownAST,
    (node) =>
      node.type === 'jsx' &&
      matchesImage(get(node, 'data.hProperties.className', '')),
    (node, idx, parent) => {
      const isBlockImage =
        parent.type === 'paragraph' && parent.children.length === 1;

      // gatsby-remark-images already treats images as block-level images.
      // Let's leave them alone.
      if (isBlockImage) {
        return;
      }

      const style = parseStyleString(node.hProperties.style);

      style.display = 'inline-block';
      style.width = '100%';

      if (spacing && phrasing(parent.children[idx - 1])) {
        style.marginLeft = spacing;
      }

      if (spacing && phrasing(parent.children[idx + 1])) {
        style.marginRight = spacing;
      }

      node.hProperties.style = compileStyleObject(style);
    }
  );

  return markdownAST;
};

const matchesImage = (className) => className.match(/gatsby-resp-image/);
