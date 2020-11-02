const visit = require('unist-util-visit');
const {
  hasClassName,
  removeAttribute,
  isMdxBlockElement,
  findChild,
  findAttribute,
  setAttribute,
  removeChild,
} = require('./utils/mdxast');
const is = require('unist-util-is');
const toString = require('mdast-util-to-string');
const { mdxBlockElement } = require('./utils/mdxast-builder');

const isLandingPageTile = isMdxBlockElement('LandingPageTile');
const isTitleLink = (node) =>
  is(node, 'link') && is(node.children[0], 'strong');

const isTitle = (node) => is(node, 'strong') || isTitleLink(node);

const extractTitle = (node) => {
  if (is(node, 'link')) {
    return [toString(node), node.url];
  }

  if (is(node.children[0], 'link')) {
    return [toString(node), node.children[0].url];
  }

  return [toString(node), null];
};

const landingPageTileGrid = () => (tree, file) => {
  visit(tree, hasClassName('landing-page-tile'), (div) => {
    div.name = 'LandingPageTile';
    removeAttribute('className', div);

    const icon = findChild(
      div,
      (node, idx) => idx === 0 && isMdxBlockElement('Icon', node)
    );
    const paragraph = findChild(div, 'paragraph');
    const titleNode = paragraph && findChild(paragraph, isTitle);

    if (titleNode) {
      const plainTextNode = is(paragraph.children[1], 'text')
        ? paragraph.children[1]
        : null;

      const endsTitleSentence =
        Boolean(plainTextNode) && /^\.\s+/.test(plainTextNode.value);

      const [text, link] = extractTitle(titleNode);

      setAttribute('title', endsTitleSentence ? `${text}.` : text, div);

      if (link) {
        setAttribute('href', link, div);
      }

      if (endsTitleSentence) {
        plainTextNode.value = plainTextNode.value
          .replace(/^\.\s+/, '')
          .trimStart();
      }

      removeChild(titleNode, paragraph);
    } else {
      file.message(
        'Title is not found',
        div.position.start,
        'landing-page-tile-grid'
      );
    }

    if (icon) {
      setAttribute('icon', findAttribute('name', icon), div);
      removeChild(icon, div);
    } else {
      file.message(
        'Icon was not found',
        div.position.start,
        'landing-page-title-grid'
      );
    }
  });

  visit(
    tree,
    (_node, _idx, parent) => parent === tree,
    (node, idx, parent) => {
      const previous = idx && parent.children[idx - 1];
      const isFirstTile =
        (isLandingPageTile(node) && idx === 0) ||
        (isLandingPageTile(node) && !isLandingPageTile(previous));

      if (!isFirstTile) {
        return;
      }

      const count = parent.children
        .slice(idx)
        .findIndex((child, idx, items) => {
          const previous = items[idx - 1];

          return (
            previous && isLandingPageTile(previous) && !isLandingPageTile(child)
          );
        });

      const tiles = parent.children.slice(idx, idx + count);
      const tileGrid = mdxBlockElement('LandingPageTileGrid', [], tiles);

      parent.children.splice(idx, count, tileGrid);

      return idx + 1;
    }
  );
};

module.exports = landingPageTileGrid;
