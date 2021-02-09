const visit = require('unist-util-visit');
const { mdxBlockElement } = require('./utils/mdxast-builder');

const containsImage = (node) => {
  if (node.type === 'image') {
    return true;
  }

  return node.children && node.children.some(containsImage);
};

// This codemod assumes it is run after the landing page tile grid has been run
const landingPageHero = () => (tree, file) => {
  if (file.data.doc.type !== 'landing_page') {
    return;
  }

  visit(tree, 'root', (root) => {
    const gridIdx = root.children.findIndex(
      (node) => node.name === 'LandingPageTileGrid'
    );

    const heroContent = root.children.slice(1, gridIdx);
    const imageIdx = heroContent.findIndex(containsImage);

    const hero = mdxBlockElement(
      'LandingPageHero',
      [],
      imageIdx === -1
        ? heroContent
        : [
            mdxBlockElement('HeroContent', [], heroContent.slice(0, imageIdx)),
            ...heroContent.slice(imageIdx),
          ]
    );

    root.children.splice(1, heroContent.length, hero);

    return visit.EXIT;
  });
};

module.exports = landingPageHero;
