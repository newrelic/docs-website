const path = require('path');
const vfileGlob = require('vfile-glob');
const { read, write } = require('to-vfile');

const { createFilePath } = require('gatsby-source-filesystem');

const TEMPLATE_DIR = 'src/templates/';

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

exports.onPreBootstrap = async ({ reporter, store }) => {
  reporter.info("generating what's new post IDs");
  const { program } = store.getState();
  const file = await read(
    path.join(program.directory, 'src/data/whats-new-ids.json'),
    'utf-8'
  );

  const data = JSON.parse(file.contents);
  let largestID = Object.values(data).reduce(
    (num, id) => Math.max(parseInt(id, 10), num),
    0
  );

  return new Promise((resolve) => {
    vfileGlob(
      path.join(program.directory, 'src/content/whats-new/**/*.md')
    ).subscribe({
      next: (file) => {
        const slug = file.path
          .replace(/.*?src\/content/, '')
          .replace('.md', '');

        if (!data[slug]) {
          data[slug] = String(++largestID);
        }
      },
      complete: async () => {
        file.contents = JSON.stringify(data, null, 2);

        await write(file, 'utf-8');

        resolve();
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'Mdx' ||
    (node.internal.type === 'MarkdownRemark' &&
      node.fileAbsolutePath.includes('src/content'))
  ) {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, trailingSlash: false }),
    });
  }

  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'fileRelativePath',
      value: getFileRelativePath(node.fileAbsolutePath),
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/content/" } }
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              fileRelativePath
              slug
            }
          }
        }
      }

      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/" } }) {
        edges {
          node {
            fields {
              fileRelativePath
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { allMarkdownRemark, allMdx } = data;

  allMdx.edges.concat(allMarkdownRemark.edges).forEach(({ node }) => {
    const {
      fields: { fileRelativePath, slug },
    } = node;

    const template = getTemplate(node);

    if (process.env.NODE_ENV === 'development' && !template) {
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
        component: path.resolve(path.join(TEMPLATE_DIR, `${template}.js`)),
        context: {
          fileRelativePath,
          slug,
        },
      });
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type MarkdownRemarkFrontmatter {
    template: String
  }

  type NavYaml implements Node @dontInfer {
    id: ID!
    title: String!
    path: String
    icon: String
    pages: [NavYaml!]!
    rootNav: Boolean!
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
      rootNav: {
        resolve: (source) =>
          hasOwnProperty(source, 'rootNav') ? source.rootNav : true,
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

const getTemplate = (node) => {
  const {
    fields: { fileRelativePath },
  } = node;

  switch (true) {
    case Boolean(node.frontmatter.template):
      return node.frontmatter.template;
    case fileRelativePath.includes('src/content/docs/release-notes'):
      return 'releaseNote';
    case fileRelativePath.includes('src/content/whats-new'):
      return 'whatsNew';
    default:
      throw new Error(`Unknown template for doc: ${fileRelativePath}`);
  }
};

const getFileRelativePath = (path) => path.replace(`${process.cwd()}/`, '');
