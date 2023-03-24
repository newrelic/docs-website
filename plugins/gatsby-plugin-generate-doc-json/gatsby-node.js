const fs = require('fs');
const path = require('path');
const unified = require('unified');
const toHast = require('mdast-util-to-hast');
const html = require('rehype-stringify');
const removeImports = require('remark-mdx-remove-imports');
const removeExports = require('remark-mdx-remove-exports');
const fencedCodeBlock = require('../../codemods/fencedCodeBlock');
const customHeadingIds = require('../gatsby-remark-custom-heading-ids/utils/visitor');
const handlers = require('../utils/handlers');
const jsxImagesToChildren = require('../utils/jsxImagesToChildren');
const all = require('mdast-util-to-hast/lib/all');

const mdxElement = (h, node) => {
  const handler = handlers[node.name];

  if (!handler) {
    return all(h, node);
  }
  return handler(h, node);
};

const htmlGenerator = unified()
  .use(jsxImagesToChildren)
  .use(fencedCodeBlock)
  .use(removeImports)
  .use(removeExports)
  .use(customHeadingIds)
  .use(html);

exports.onPostBuild = async ({ graphql, store }) => {
  const { program } = store.getState();

  const { data } = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/docs/" } }) {
        nodes {
          mdxAST
          slug
          body
        }
      }
      allImageSharp {
        nodes {
          parent {
            ... on File {
              relativePath
            }
          }
          original {
            src
          }
        }
      }
    }
  `);

  const { allMdx, allImageSharp } = data;

  const imageHashMap = allImageSharp.nodes.reduce(
    (acc, { original, parent }) => ({
      ...acc,
      [parent.relativePath]: original?.src || null,
    }),
    {}
  );

  allMdx.forEach((node) => {
    const { body: mdxBody, slug, mdxAST } = node;

    const filepath = path.join(program.directory, 'public', `${slug}.json`);

    const transformedAST = htmlGenerator.runSync(mdxAST);

    const html = htmlGenerator.stringify(
      toHast(transformedAST, {
        handlers: {
          mdxSpanElement: mdxElement,
          mdxBlockElement: mdxElement,
          code: handlers.CodeBlock,
          image: (h, node, parent) =>
            handlers.image(h, node, parent, imageHashMap),
        },
      })
    );

    const mdx = JSON.stringify(mdxBody);
    const result = { body: html, mdx };

    fs.writeFileSync(filepath, JSON.stringify(result));
  });
};
