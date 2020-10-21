const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

const TEMPLATE_DIR = 'src/templates/';

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const { createNodeField } = actions;

    // Get the file path to be used as the page location
    const fileRelativePath = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: 'fileRelativePath',
      value: fileRelativePath,
    });
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
              topics
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
        nav: frontmatter.topics && frontmatter.topics[0],
      },
    });
  });
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type NavYaml implements Node @dontInfer {
    id: ID!
    title: String!
    path: String
    pages: [NavYaml!]!
  }
  `;

  createTypes(typeDefs);
};
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    NavYaml: {
      pages: {
        resolve: (source) => {
          return source.pages || [];
        },
      },
    },
  });
};
