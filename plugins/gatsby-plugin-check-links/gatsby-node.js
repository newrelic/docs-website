const visit = require('unist-util-visit');
const fetch = require('node-fetch');
const unified = require('unified');
const {
  hasAttribute,
  findAttribute,
  isType,
} = require('../../codemods/utils/mdxast');

const BASE_URL = 'https://docs-preview.newrelic.com';

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
const isExternal = (to) => externalPattern.test(to);

const isMdxElement = (node) =>
  isType('mdxBlockElement', node) || isType('mdxSpanElement', node);

const linkVisitor = ({ fileRelativePath }) => (tree) => {
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

const getPageResponse = async (path) => {
  const url = new URL(path, BASE_URL);
  const { status } = await fetch(url, { method: 'HEAD' });

  return status;
};

exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/" } }) {
        nodes {
          mdxAST
          fields {
            fileRelativePath
          }
        }
      }
    }
  `);

  const { allMdx } = data;

  await Promise.all(
    allMdx.nodes.filter(async (node) => {
      const {
        mdxAST,
        fields: { fileRelativePath },
      } = node;
      const processor = unified().use(linkVisitor, { fileRelativePath });
      await processor.run(mdxAST);
    })
  );
};
