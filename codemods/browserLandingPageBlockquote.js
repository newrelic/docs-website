const visit = require('unist-util-visit');
const { hasClassName, isMdxElement } = require('./utils/mdxast');
const u = require('unist-builder');

const isIcon = (name, node) =>
  isMdxElement('i', node) && hasClassName(`fa-${name}`, node);

const browserLandingPageBlockquote = () => (tree) => {
  visit(
    tree,
    (node) => isIcon('quote-left', node),
    (node, idx, parent) => {
      const phrasing = parent.children[idx + 1];

      // We are assuming the only instance of the quote-left/quote-right icons
      // occur on the browser landing page, where there is a single paragraph
      // of text between the opening quote and the closing quote.
      parent.children[idx + 1] = u('blockquote', [phrasing]);
      parent.children.splice(idx, 1);

      return visit.EXIT;
    }
  );

  visit(
    tree,
    (node) => isIcon('quote-right', node),
    (_node, idx, parent) => {
      parent.children.splice(idx, 1);

      return visit.EXIT;
    }
  );
};

module.exports = browserLandingPageBlockquote;
