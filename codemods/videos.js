const visit = require('unist-util-visit');
const {
  addAttribute,
  findAttribute,
  isMdxBlockElement,
} = require('./utils/mdxast');

const getVideoProps = (src) => {
  const domain = src.split('/')[2];
  const url = new URL(src);
  if (url.hostname === 'fast.wistia.net') {
    return {
      id: src.match(/iframe\/([a-zA-Z0-9]+)\??/)[1],
      type: 'wistia',
    };
  }
  if (url.hostname === 'www.youtube.com') {
    return {
      id: src.match(/embed\/([a-zA-Z0-9]+)\??/)[1],
      type: 'youtube',
    };
  } else {
    throw new Error('Video type not recognized.');
  }
};

const videos = () => (tree) => {
  visit(
    tree,
    (node) => isMdxBlockElement('iframe', node),
    (iframe) => {
      iframe.name = 'Video';
      const videoProps = getVideoProps(findAttribute('src', iframe));
      iframe.attributes = [];
      addAttribute('type', videoProps.type, iframe);
      addAttribute('id', videoProps.id, iframe);
    }
  );
};

module.exports = videos;
