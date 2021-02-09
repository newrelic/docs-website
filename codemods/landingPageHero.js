const visit = require('unist-util-visit');
const { mdxBlockElement } = require('./utils/mdxast-builder');

// This codemod assumes it is run after the landing page tile grid has been run
const landingPageHero = () => (tree, file) => {
  if (file.data.doc.type !== 'landing_page') {
    return;
  }

  visit(tree, 'root', (root) => {
    const frontmatterIdx = 0; // frontmatter always comes first
    const gridIdx = root.children.findIndex(
      (node) => node.name === 'LandingPageTileGrid'
    );

    const heroContent = root.children.slice(frontmatterIdx + 1, gridIdx);
    const hero = mdxBlockElement('LandingPageHero', [], heroContent);

    root.children.splice(frontmatterIdx + 1, heroContent.length, hero);

    return visit.EXIT;
  });
};

module.exports = landingPageHero;
