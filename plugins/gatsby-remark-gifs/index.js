const visit = require('unist-util-visit');
const path = require('path');

// match the default from gatsby-remark-images
const DEFAULT_MAX_WIDTH = 650;

module.exports = ({ markdownAST }, pluginOptions) => {
  const { maxWidth = DEFAULT_MAX_WIDTH } = pluginOptions;

  visit(markdownAST, 'image', (node) => {
    if (path.extname(node.url) !== '.gif') {
      return;
    }

    node.data = {
      hProperties: {
        className: 'gatsby-resp-image-image',
        style: `width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: ${maxWidth}px;`,
      },
    };
  });

  return markdownAST;
};
