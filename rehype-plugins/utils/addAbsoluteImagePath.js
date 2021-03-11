const visit = require('unist-util-visit');
const is = require('hast-util-is-element');

const prependSiteUrl = (src) => `https://docs.newrelic.com${src}`;

const addAbsoluteImagePath = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'img'),
    (img) => {
      img.properties.src = prependSiteUrl(img.properties.src);
      img.properties.srcSet = (img.properties.srcSet || []).map((entry) => {
        const [src, size] = entry.split(' ');

        return [prependSiteUrl(src), size].join(' ');
      });
    }
  );
};

module.exports = addAbsoluteImagePath;
