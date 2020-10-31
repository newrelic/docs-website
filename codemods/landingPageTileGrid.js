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
  const visitTile = (div) => {
    div.name = 'LandingPageTile';
    removeAttribute('className', div);

    const icon = findChild(
      div,
      (node, idx) => idx === 0 && isMdxBlockElement('Icon', node)
    );
    const paragraph = findChild(div, 'paragraph');
    const titleNode = paragraph && findChild(paragraph, isTitle);

    if (titleNode) {
      const [text, link] = extractTitle(titleNode);

      setAttribute('title', text, div);

      if (link) {
        setAttribute('href', link, div);
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
  };

  visit(tree, hasClassName('landing-page-tile-grid'), (div) => {
    div.name = 'LandingPageTileGrid';
    removeAttribute('className', div);

    div.children.forEach((child) => visitTile(child));
  });
};

module.exports = landingPageTileGrid;
