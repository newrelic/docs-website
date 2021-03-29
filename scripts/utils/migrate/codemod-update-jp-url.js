const visit = require('unist-util-visit');
const is = require('unist-util-is');

const URL_TO_REMOVE = 'https://jajp-newrelic-docs.onelink-translations.com';

const jpLinks = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'link'),
    (link) => {
      link.url = link.url.replace(URL_TO_REMOVE, '');
    }
  );
};

module.exports = jpLinks;
