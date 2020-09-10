const path = require('path');

const CONTENT_DIR = 'src/content/';
const TEMPLATE_DIR = 'src/templates/';

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const { createNodeField } = actions;
    const { fileAbsolutePath } = node;

    // Get the file path to be used as the page location
    const value = fileAbsolutePath
      .replace(`${process.cwd()}/${CONTENT_DIR}`, '')
      .replace('.mdx', '');
    createNodeField({ node, name: 'fileRelativePath', value });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // NOTE: update 1,000 magic number
  const result = await graphql(`
    {
      allMdx(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/content/" } }
      ) {
        edges {
          node {
            fields {
              fileRelativePath
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const { frontmatter, fields } = node;
    const { fileRelativePath } = fields;

    createPage({
      path: fileRelativePath,
      component: path.resolve(`${TEMPLATE_DIR}${frontmatter.template}.js`),
      context: {
        fileRelativePath,
      },
    });
  });
};
