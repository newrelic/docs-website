const visit = require('unist-util-visit');
const is = require('hast-util-is-element');
const DOCS_SITE_URL = 'https://docs.newrelic.com';

const addAbsoluteImagePath = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'img'),
    (img) => {
      img.src = `${DOCS_SITE_URL}${src}`;
    }
  );
};

module.exports = addAbsoluteImagePath;
