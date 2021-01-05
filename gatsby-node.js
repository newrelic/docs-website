const path = require('path');
const vfileGlob = require('vfile-glob');
const { read, write } = require('to-vfile');
const { uniq } = require('lodash');

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
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

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
              subject
            }
          }
        }
      }

      allI18nMdx: allMdx(
        filter: { fileAbsolutePath: { regex: "/src/i18n/content/" } }
      ) {
        edges {
          node {
            fields {
              fileRelativePath
              slug
            }
            frontmatter {
              template
              subject
            }
          }
        }
      }

      releaseNotes: allMdx(
        filter: {
          fileAbsolutePath: {
            regex: "/src/content/docs/release-notes/.*(?<!index).mdx/"
          }
        }
        sort: { fields: frontmatter___releaseDate, order: DESC }
      ) {
        group(limit: 1, field: frontmatter___subject) {
          fieldValue
          nodes {
            frontmatter {
              releaseDate
            }
            fields {
              slug
            }
          }
        }
      }

      landingPagesReleaseNotes: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/docs/release-notes/.*/index.mdx$/" }
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            subject
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const {
    allI18nMdx,
    allMarkdownRemark,
    allMdx,
    releaseNotes,
    landingPagesReleaseNotes,
  } = data;

  releaseNotes.group.forEach((el) => {
    const { fieldValue, nodes } = el;

    const landingPage = landingPagesReleaseNotes.nodes.find(
      (node) => node.frontmatter.subject === fieldValue
    );

    landingPage &&
      createRedirect({
        fromPath: path.join(landingPage.fields.slug, 'current'),
        toPath: nodes[0].fields.slug,
      });
  });

  const translatedContentNodes = allI18nMdx.edges.map(({ node }) => node);

  const locales = uniq(
    translatedContentNodes.map((node) => {
      const [locale] = node.fields.slug.replace(/^\//, '').split('/');

      return locale;
    })
  );

  allMdx.edges.concat(allMarkdownRemark.edges).forEach(({ node }) => {
    createPageFromNode(node, { createPage });

    locales.forEach((locale) => {
      const i18nNode = translatedContentNodes.find(
        (i18nNode) =>
          i18nNode.fields.slug.replace(`/${locale}`, '') === node.fields.slug
      );

      createPageFromNode(i18nNode || node, {
        prefix: i18nNode ? '' : locale,
        createPage,
      });
    });
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

const createPageFromNode = (node, { createPage, prefix = '' }) => {
  const {
    fields: { fileRelativePath, slug },
  } = node;

  const { template, context = {} } = getTemplate(node);

  if (process.env.NODE_ENV === 'development' && !template) {
    createPage({
      path: path.join(prefix, slug),
      component: path.resolve(TEMPLATE_DIR, 'dev/missingTemplate.js'),
      context: {
        ...context,
        fileRelativePath,
        layout: 'basic',
      },
    });
  } else {
    createPage({
      path: path.join(prefix, slug),
      component: path.resolve(path.join(TEMPLATE_DIR, `${template}.js`)),
      context: {
        ...context,
        fileRelativePath,
        slug,
        slugRegex: `${slug}/.+/`,
      },
    });
  }
};

const getTemplate = (node) => {
  const {
    frontmatter,
    fields: { fileRelativePath },
  } = node;

  switch (true) {
    case Boolean(frontmatter.template):
      return { template: frontmatter.template };

    case /docs\/release-notes\/.*\/index.mdx$/.test(fileRelativePath):
      return {
        template: 'releaseNoteLandingPage',
        context: { subject: frontmatter.subject },
      };

    case fileRelativePath.includes('src/content/docs/release-notes'):
      return { template: 'releaseNote' };

    case fileRelativePath.includes('src/content/whats-new'):
      return { template: 'whatsNew' };

    default:
      return { template: null };
  }
};

const getFileRelativePath = (path) => path.replace(`${process.cwd()}/`, '');
