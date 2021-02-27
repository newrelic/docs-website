const visit = require('unist-util-visit');
const fetch = require('node-fetch');
const unified = require('unified');
const {
  hasAttribute,
  findAttribute,
  isType,
} = require('../../codemods/utils/mdxast');

const BASE_URL = 'https://docs-preview.newrelic.com';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');

const isMdxElement = (node) =>
  isType('mdxBlockElement', node) || isType('mdxSpanElement', node);

const linkVisitor = (mdxAST) =>
  visit(
    mdxAST,
    (node) =>
      node && isMdxElement(node) && node.attributes && hasAttribute('to', node),
    async (node) => {
      const to = findAttribute('to', node);
      if (!isHash(to) && !isExternal(to)) {
        const code = await getPageResponse(to);
        if (code !== 200) {
          console.log('!! INVALID PATH: ', to);
        }
      }
    }
  );

const processor = unified().use(linkVisitor);

const getPageResponse = async (path) => {
  const url = new URL(path, BASE_URL);
  const { status } = await fetch(url, { method: 'HEAD' });

  if (status !== 200) {
    console.log(status, path);
  }

  return status;
};

exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/" } }) {
        nodes {
          mdxAST
        }
      }
    }
  `);

  const { allMdx } = data;

  await Promise.all(
    allMdx.nodes.filter(async (node) => {
      const { mdxAST } = node;
      await processor.run(mdxAST);
    })
  );
};
