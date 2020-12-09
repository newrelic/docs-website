const visit = require('unist-util-visit');
const {
  addAttribute,
  findAttribute,
  isMdxBlockElement,
} = require('./utils/mdxast');

const getVideoProps = (src) => {
  if (src.startsWith('//')) {
    src = `https:${src}`;
  }

  const url = new URL(src);
  if (url.hostname === 'fast.wistia.net') {
    return {
      type: 'wistia',
      id: src.match(/iframe\/([a-zA-Z0-9]+)\??/)[1],
    };
  }
  if (url.hostname === 'www.youtube.com') {
    return {
      type: 'youtube',
      id: src.match(/embed\/([a-zA-Z0-9]+)\??/)[1],
    };
  } else {
    return null;
  }
};

const videos = () => (tree, file) => {
  visit(
    tree,
    (node) => isMdxBlockElement('iframe', node),
    (iframe) => {
      iframe.name = 'Video';
      const srcAttr = findAttribute('src', iframe);
      const videoProps =
        getVideoProps(srcAttr) ||
        file.fail(
          new Error(`Video type not recognized for ${srcAttr}`),
          iframe.position
        );
      iframe.attributes = [];
      addAttribute('type', videoProps.type, iframe);
      addAttribute('id', videoProps.id, iframe);
    }
  );
};

module.exports = videos;
