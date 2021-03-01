const visit = require('unist-util-visit');
const { isMdxElement, hasAttribute, setAttribute } = require('./utils/mdxast');
const is = require('unist-util-is');

const TOC_LINK = /\?toc=true$/;

const tocLinks = () => (tree) => {
  visit(
    tree,
    (node) => is(node, 'link'),
    (link) => {
      if (TOC_LINK.test(link.url)) {
        link.url = replaceToc(link.url);
      }
    }
  );

  visit(
    tree,
    (node) => isMdxElement('ButtonLink', node) && hasAttribute('to', node),
    (button) => {
      const attr = button.attributes.find((attr) => attr.name === 'to');

      if (TOC_LINK.test(attr.value)) {
        attr.value = replaceToc(attr.value);
        setAttribute('variant', 'primary', button);
      }
    }
  );
};

const replaceToc = (url) => url.replace(TOC_LINK, '/table-of-contents');

module.exports = tocLinks;
