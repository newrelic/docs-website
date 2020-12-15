const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query MyQuery {
      tableOfContents: allFile(
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { in: ["index.mdx", "index.md"] }
          relativePath: { regex: "/^(?!whats-new).*$/" }
        }
      ) {
        nodes {
          childMdx {
            fields {
              slug
            }
          }
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
      allFile(
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { nin: ["index.mdx", "index.md"] }
          children: {
            elemMatch: { internal: { type: { in: ["MarkdownRemark", "Mdx"] } } }
          }
          relativePath: { regex: "/^(?!whats-new).*$/" }
        }
      ) {
        nodes {
          relativeDirectory
        }
      }
    }
  `);

  const {
    tableOfContents: { nodes: tableOfContentsNodes },
    allFile: { nodes: fileNodes },
  } = data;

  tableOfContentsNodes.forEach((node) => {
    const slug = path.join(getSlug(node), 'table-of-contents');

    createPage({
      path: slug,
      component: path.resolve('src/templates/tableOfContents.js'),
      context: {
        fileRelativePath: null,
        slug,
      },
    });
  });
};

const getSlug = (node) =>
  (node.childMdx || node.childMarkdownRemark).fields.slug;
