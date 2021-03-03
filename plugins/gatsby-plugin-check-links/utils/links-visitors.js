const {
  hasAttribute,
  findAttribute,
  isType,
} = require('../../../codemods/utils/mdxast');
const is = require('hast-util-is-element');
const getPageResponse = require('./get-page-response');
const visit = require('unist-util-visit');

const isHash = (to) => to.startsWith('#');
const isExternal = (to) =>
  to.startsWith('https://') || to.startsWith('mailto:');

const isMdxElement = (node) =>
  isType('mdxBlockElement', node) || isType('mdxSpanElement', node);

const linkVisitorMdx = ({ fileRelativePath }) => async (tree) => {
  visit(
    tree,
    (node) =>
      (isMdxElement(node) && node.attributes && hasAttribute('to', node)) ||
      isType('link', node),
    async (node) => {
      const to = isType('link', node) ? node.url : findAttribute('to', node);
      try {
        if (!isHash(to) && !isExternal(to)) {
          const code = await getPageResponse(to);
          if (code === 404) {
            console.log(`INVALID LINK: ${to} \n > file: ${fileRelativePath}`);
          }
        }
      } catch (error) {
        console.error('ERROR:', to);
      }
    }
  );
};

const linkVisitorHtml = ({ fileRelativePath }) => async (tree) => {
  visit(
    tree,
    (node) => is(node, 'a'),
    async (a) => {
      const to = a.properties.href;
      try {
        if (!isHash(to) && !isExternal(to)) {
          const code = await getPageResponse(to);
          if (code === 404) {
            console.log(`INVALID LINK: ${to} \n > file: ${fileRelativePath}`);
          }
        }
      } catch (error) {
        console.log('ERROR:', to);
      }
    }
  );
};

module.exports = { linkVisitorMdx, linkVisitorHtml };
