const {
  hasAttribute,
  findAttribute,
  isType,
} = require('../../../codemods/utils/mdxast');
const is = require('hast-util-is-element');
const getPageResponse = require('./get-page-response');
const visit = require('unist-util-visit');

const externalPattern = new RegExp(
  '^((https|http|ftp|rtsp|mms)?://)' +
    "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" +
    '(([0-9]{1,3}.){3}[0-9]{1,3}' +
    '|' +
    "([0-9a-z_!~*'()-]+.)*" +
    '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' +
    '[a-z]{2,6})' +
    '(:[0-9]{1,4})?' +
    '((/?)|' +
    "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
);

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => {
  if (to.startsWith('//')) {
    return externalPattern.test(to.slice(2));
  }
  return externalPattern.test(to);
};

const isMdxElement = (node) =>
  isType('mdxBlockElement', node) || isType('mdxSpanElement', node);

const linkVisitorMdx = ({ fileRelativePath }) => async (tree) => {
  const invalidLinks = [];
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
          if (code !== 200) {
            invalidLinks.push(to);
          }
        }
      } catch (error) {
        console.log('ERROR:', to);
      }
    }
  );
  if (invalidLinks.length) {
    console.log(`!! Found ${invalidLinks.length} links on ${fileRelativePath}`);
    invalidLinks.forEach((link) => console.log(`- ${link}`));
  }
};

const linkVisitorHtml = ({ fileRelativePath }) => async (tree) => {
  const invalidLinks = [];
  visit(
    tree,
    (node) => is(node, 'a'),
    async (a) => {
      const to = a.properties.href;
      try {
        if (!isHash(to) && !isExternal(to)) {
          const code = await getPageResponse(to);
          if (code !== 200) {
            invalidLinks.push(to);
          }
        }
      } catch (error) {
        console.log('ERROR:', to);
      }
    }
  );
  console.log(invalidLinks);
  if (invalidLinks.length) {
    console.log(`!! Found ${invalidLinks.length} links on ${fileRelativePath}`);
    invalidLinks.forEach((link) => console.log(`- ${link}`));
  }
};

module.exports = { linkVisitorMdx, linkVisitorHtml };
