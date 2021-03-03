const visit = require('unist-util-visit');
const is = require('hast-util-is-element');
const DOCS_SITE_URL = 'https://docs.newrelic.com';

const addAbsoluteImagePath = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'img'),
    (img) => {
      img.properties.src = `${DOCS_SITE_URL}${img.properties.src}`;
    }
  );
};

module.exports = addAbsoluteImagePath;
