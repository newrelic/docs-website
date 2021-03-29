const visit = require('unist-util-visit');
const is = require('unist-util-is');

// const LOCAL_IMAGE_RE = /(\/image.*.)\?/;
const LOCAL_IMAGE_RE = /(\/image.*.[png|jpg|jpeg])/;

const jpLinks = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'image'),
    (node) => {
      const matches = LOCAL_IMAGE_RE.exec(node.url);
      if (!matches) {
        console.log('NO MATCHES FOR', node.url);
      }

      // NOTE: this is sloppy because it's a one-off script, please delete and don't judge me
      node.url = matches
        ? `.${matches[0].split('?')[0].replace('image', 'images')}`
        : node.url;
    }
  );
};

module.exports = jpLinks;
