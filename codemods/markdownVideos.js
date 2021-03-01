const visit = require('unist-util-visit');
const {
  addAttribute,
  findAttribute,
  isMdxBlockElement,
} = require('./utils/mdxast');

const markdownVideos = () => (tree) => {
  visit(tree, isMdxBlockElement('iframe'), (iframe) => {
    const src = findAttribute('src', iframe);
    const title = findAttribute('title', iframe);

    iframe.name = 'video';
    iframe.attributes = [];

    addAttribute('src', src, iframe);
    addAttribute('title', title, iframe);
  });
};

module.exports = markdownVideos;
