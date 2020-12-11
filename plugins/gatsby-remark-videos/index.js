const visit = require('unist-util-visit');
const { parse } = require('node-html-parser');

module.exports = ({ markdownAST }, pluginOptions) => {
  const { maxWidth } = pluginOptions;

  visit(markdownAST, 'html', (node) => {
    const root = parse(node.value);
    const element = root.firstChild;

    if (element.tagName !== 'VIDEO') {
      return;
    }

    const src = element.getAttribute('src');
    const title = element.getAttribute('title');

    node.value = `
<div class="wistia_responsive_padding" style="padding: 56.25% 0 0 0; position: relative; max-width: ${
      maxWidth ? `${maxWidth}px` : 'none'
    };">
  <div class="wistia_responsive_wrapper" style="height: 100%; width: 100%; position: absolute; left: 0; top: 0;">
    <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="${src}" title="${title}" class="wistia_embed" frameborder="0" />
  </div>
</div>
    `.trim();
  });

  return markdownAST;
};
