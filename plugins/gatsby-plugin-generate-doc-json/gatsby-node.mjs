import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import { toHast } from 'mdast-util-to-hast';
import html from 'rehype-stringify';
import removeImports from 'remark-mdx-remove-imports';
import removeExports from 'remark-mdx-remove-exports';
import { all } from 'mdast-util-to-hast/lib/state';

import fencedCodeBlock from '../../codemods/fencedCodeBlock.mjs';
import customHeadingIds from '../gatsby-remark-custom-heading-ids/utils/visitor.mjs';
import jsxImagesToChildren from '../utils/jsxImagesToChildren.mjs';
import handlers from '../utils/handlers.mjs';

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

export const onPostBuild = async ({ graphql, store }) => {
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
