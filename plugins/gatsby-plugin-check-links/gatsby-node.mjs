import checkNavLinks from './utils/check-nav-links.mjs';
import { linkVisitorMdx, linkVisitorHtml } from './utils/links-visitors.mjs';
import { unified } from 'unified';

export const onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        nodes {
          mdxAST
          fields {
            fileRelativePath
          }
        }
      }
      allMarkdownRemark {
        nodes {
          htmlAst
          fields {
            fileRelativePath
          }
        }
      }
      allFile(filter: { absolutePath: { regex: "/src/nav/" } }) {
        nodes {
          relativePath
        }
      }
    }
  `);

  const { allMdx, allMarkdownRemark, allFile } = data;

  await checkNavLinks(allFile);

  allMdx.nodes.forEach(async (node) => {
    const {
      mdxAST,
      fields: { fileRelativePath },
    } = node;
    const mdxProcessor = unified().use(linkVisitorMdx, { fileRelativePath });
    await mdxProcessor.run(mdxAST);
  });

  allMarkdownRemark.nodes.forEach(async (node) => {
    const {
      htmlAst,
      fields: { fileRelativePath },
    } = node;
    const htmlProcessor = unified().use(linkVisitorHtml, {
      fileRelativePath,
    });
    await htmlProcessor.run(htmlAst);
  });
};
