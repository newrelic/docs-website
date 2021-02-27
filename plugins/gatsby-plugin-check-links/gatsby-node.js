const visit = require('unist-util-visit');
const fetch = require('node-fetch');

const BASE_URL = 'https://docs-preview.newrelic.com';

const isHash = (to) => to.startsWith('#');
const isExternal = (to) => to.startsWith('http');

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

  Promise.all(
    allMdx.nodes.forEach((node) => {
      const { mdxAST } = node;
      visit(
        mdxAST,
        (node) => node && node.attributes && hasAttribute('to', node),
        async (node) => {
          const to = findAttribute('to', node);
          if (!isHash(to) && !isExternal(to)) {
            const code = await getPageResponse(to);
            if (code !== 200) {
              console.log('INVALID PATH:', to);
            }
          }
        }
      );
    })
  );
};
