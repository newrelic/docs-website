const visit = require('unist-util-visit');
const { isMdxBlockElement, setAttribute } = require('./utils/mdxast');

const landingPageButtonType = () => (tree, file) => {
  if (file.data.doc.type !== 'landing_page') {
    return;
  }

  visit(tree, isMdxBlockElement('ButtonLink'), (button) => {
    setAttribute('variant', 'normal', button);
  });
};

module.exports = landingPageButtonType;
