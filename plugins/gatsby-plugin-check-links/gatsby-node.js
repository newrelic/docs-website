const checkNavLinks = require('./utils/check-nav-links');
const { linkVisitorMdx, linkVisitorHtml } = require('./utils/links-visitors');
const unified = require('unified');

exports.onPostBuild = async ({ graphql }) => {
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
          htmlAST
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

  await Promise.all(
    allMdx.nodes.forEach(async (node) => {
      const {
        mdxAST,
        fields: { fileRelativePath },
      } = node;
      const mdxProcessor = unified().use(linkVisitorMdx, { fileRelativePath });
      await mdxProcessor.run(mdxAST);
    })
  );

  await Promise.all(
    allMarkdownRemark.nodes.forEach(async (node) => {
      const {
        htmlAST,
        fields: { fileRelativePath },
      } = node;
      const htmlProcessor = unified().use(linkVisitorHtml, {
        fileRelativePath,
      });
      await htmlProcessor.run(htmlAST);
    })
  );
};
