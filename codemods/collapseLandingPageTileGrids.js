const visit = require('unist-util-visit');
const { isMdxBlockElement, removeChild } = require('./utils/mdxast');

const collapseLandingPageTileGrids = () => (tree, file) => {
  if (file.data.doc.type !== 'landing_page') {
    return;
  }

  visit(
    tree,
    (_node, _idx, parent) => parent === tree,
    (node, idx, parent) => {
      const previous = idx && parent.children[idx - 1];

      if (previous && isTileGrid(node) && isTileGrid(previous)) {
        previous.children = previous.children.concat(node.children);
        removeChild(node, parent);

        return idx;
      }
    }
  );
};

const isTileGrid = (node) => isMdxBlockElement('LandingPageTileGrid', node);

module.exports = collapseLandingPageTileGrids;
