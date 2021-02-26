const visit = require('unist-util-visit');
const { parse } = require('node-html-parser');
const { oneLine } = require('common-tags');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    const root = parse(node.value);
    const element = root.firstChild;

    if (element.tagName !== 'VIDEO') {
      return;
    }

    const src = element.getAttribute('src');
    const title = element.getAttribute('title');

    const rawHTML = oneLine`
    <div class="wistia_responsive_wrapper" style="padding: 56.25% 0 0 0; position: relative; height: 0;"><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="${src}" title="${
      title || ''
    }" class="wistia_embed" scrolling="no" frameborder="0" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"></iframe></div>
    `.trim();

    node.data = {
      hChildren: [{ type: `raw`, value: rawHTML }],
    };
    node.type = `unknown`;
    delete node.value;
  });

  return markdownAST;
};
