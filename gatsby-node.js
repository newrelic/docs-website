const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const TEMPLATE_DIR = 'src/templates/';

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const { createNodeField } = actions;

    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, trailingSlash: false }),
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // NOTE: update 1,000 magic number
  const { data, errors } = await graphql(`
    query {
      allMdx(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/src/content/" } }
      ) {
        edges {
          node {
            fields {
              fileRelativePath
              slug
            }
            frontmatter {
              template
              topics
            }
          }
        }
      }

      allNavYaml {
        edges {
          node {
            ...NavFields
            pages {
              ...NavFields
              pages {
                ...NavFields
                pages {
                  ...NavFields
                  pages {
                    ...NavFields
                    pages {
                      ...NavFields
                      pages {
                        ...NavFields
                        pages {
                          ...NavFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    fragment NavFields on NavYaml {
      title
      path
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMdx, allNavYaml } = data;

  allMdx.edges.forEach(({ node }) => {
    const { frontmatter, fields } = node;
    const { fileRelativePath, slug } = fields;

    const nav = allNavYaml.edges
      .map(({ node }) => node)
      .find((nav) =>
        // table-of-contents pages should get the same nav as their landing page
        findPage(nav, slug.replace(/\/table-of-contents$/, ''))
      );
    if (process.env.NODE_ENV === 'development' && !frontmatter.template) {
      createPage({
        path: slug,
        component: path.resolve(TEMPLATE_DIR, 'dev/missingTemplate.js'),
        context: {
          fileRelativePath,
          layout: 'basic',
        },
      });
    } else {
      createPage({
        path: slug,
        component: path.resolve(`${TEMPLATE_DIR}${frontmatter.template}.js`),
        context: {
          fileRelativePath,
          slug,
          nav: nav && nav.title,
        },
      });
    }
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/404/)) {
    page.context.layout = 'basic';

    createPage(page);
  }

  if (!page.context.fileRelativePath) {
    page.context.fileRelativePath = getFileRelativePath(page.componentPath);

    createPage(page);
  }
};

const getFileRelativePath = (path) => path.replace(`${process.cwd()}/`, '');

const findPage = (page, path) => {
  if (page.path === path) {
    return page;
  }

  if (page.pages == null || page.pages.length === 0) {
    return null;
  }

  return page.pages.find((child) => findPage(child, path));
};
