const { isMdxBlockElement } = require('./utils/mdxast');

const landingPageImagePlacement = () => (tree, file) => {
  if (file.data.doc.type !== 'landing_page') {
    return;
  }

  const tileGridIdx = tree.children.findIndex(
    isMdxBlockElement('LandingPageTileGrid')
  );

  const buttonIdx = tree.children.findIndex(isMdxBlockElement('ButtonLink'));

  const imageAndCaption = tree.children.slice(tileGridIdx + 1, buttonIdx);

  if (imageAndCaption.length === 0) {
    return;
  }

  tree.children.splice(tileGridIdx + 1, imageAndCaption.length);
  tree.children.splice(tileGridIdx, 0, ...imageAndCaption);
};

module.exports = landingPageImagePlacement;
