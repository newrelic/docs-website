const visit = require('unist-util-visit');
const {
  addAttribute,
  hasClassName,
  findAttribute,
} = require('./utils/mdxast');

const videos = () => (tree) => {
  visit(
    tree,
    (node) => hasClassName('wistia_embed', node),
    (iframe) => {
      iframe.name = 'Video';
      const videoID = findAttribute('src', iframe).match(
        /iframe\/([a-zA-Z0-9]+)\??/
      )[1];
      iframe.attributes = [];
      addAttribute('type', 'wistia', iframe);
      addAttribute('id', videoID, iframe);
    }
  );
};

module.exports = videos;
