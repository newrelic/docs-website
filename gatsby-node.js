const path = require('path');
const vfileGlob = require('vfile-glob');
const { read, write } = require('to-vfile');
const { prop } = require('./scripts/utils/functional.js');
const externalRedirects = require('./src/data/external-redirects.json');

const { createFilePath } = require('gatsby-source-filesystem');

const TEMPLATE_DIR = 'src/templates/';
const TRAILING_SLASH = /\/$/;

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const hasTrailingSlash = (pathname) =>
  pathname === '/' ? false : TRAILING_SLASH.test(pathname);

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
              type
            }
            fields {
              fileRelativePath
              slug
            }
          }
        }
      }

      whatsNewPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/content/whats-new/" } }
      ) {
        nodes {
          fields {
            slug
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
              type
              subject
              redirects
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
              type
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
            redirects
          }
        }
      }

      allLocale {
        nodes {
          locale
          isDefault
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
    allLocale,
    whatsNewPosts,
  } = data;

  const locales = allLocale.nodes
    .filter((locale) => !locale.isDefault)
    .map(prop('locale'));

  externalRedirects.forEach(({ url, paths }) => {
    paths.forEach((path) => {
      createRedirect({
        fromPath: path,
        toPath: url,
        isPermanent: true,
        redirectInBrowser: true,
      });
    });
  });

  releaseNotes.group.forEach((el) => {
    const { fieldValue, nodes } = el;

    const landingPage = landingPagesReleaseNotes.nodes.find(
      (node) => node.frontmatter.subject === fieldValue
    );

    if (landingPage) {
      const { redirects } = landingPage.frontmatter;

      createLocalizedRedirect({
        locales,
        fromPath: path.join(landingPage.fields.slug, 'current'),
        toPath: nodes[0].fields.slug,
        isPermanent: false,
        createRedirect,
      });

      if (redirects) {
        redirects.forEach((fromPath) => {
          createLocalizedRedirect({
            locales,
            fromPath,
            toPath: landingPage.fields.slug,
            isPermanent: false,
            createRedirect,
          });
        });
      }
    }
  });

  const translatedContentNodes = allI18nMdx.edges.map(({ node }) => node);

  allMdx.edges.concat(allMarkdownRemark.edges).forEach(({ node }) => {
    const {
      fields: { slug },
      frontmatter: { redirects },
    } = node;

    if (redirects) {
      redirects.forEach((fromPath) => {
        createLocalizedRedirect({
          locales,
          fromPath,
          toPath: slug,
          createRedirect,
        });
      });
    }

    createPageFromNode(node, { createPage });

    locales.forEach((locale) => {
      const i18nNode = translatedContentNodes.find(
        (i18nNode) =>
          i18nNode.fields.slug.replace(`/${locale}`, '') === node.fields.slug
      );

      createPageFromNode(i18nNode || node, {
        prefix: i18nNode ? '' : locale,
        createPage,
        disableSEO: !i18nNode,
      });
    });
  });

  whatsNewPosts.nodes.forEach((node) => {
    const {
      fields: { slug },
    } = node;

    createLocalizedRedirect({
      locales,
      fromPath: slug.replace(/\/\d{4}\/\d{2}/, ''),
      toPath: slug,
      createRedirect,
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
    icon: String
    filterable: Boolean!
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
      filterable: {
        resolve: (source) =>
          hasOwnProperty(source, 'filterable') ? source.filterable : true,
      },
      rootNav: {
        resolve: (source) =>
          hasOwnProperty(source, 'rootNav') ? source.rootNav : true,
      },
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = { ...page };

  if (page.path.match(/404/)) {
    page.context.layout = 'basic';
  }

  if (!page.context.fileRelativePath) {
    page.context.fileRelativePath = getFileRelativePath(page.componentPath);
  }

  if (hasTrailingSlash(page.context.slug)) {
    page.context.slug = page.context.slug.replace(TRAILING_SLASH, '');
  }

  deletePage(oldPage);
  createPage(page);
};

const createLocalizedRedirect = ({
  fromPath,
  toPath,
  locales,
  redirectInBrowser = true,
  isPermanent = true,
  createRedirect,
}) => {
  createRedirect({
    fromPath,
    toPath,
    isPermanent,
    redirectInBrowser,
  });

  locales.forEach((locale) => {
    createRedirect({
      fromPath: path.join(`/${locale}`, fromPath),
      toPath: path.join(`/${locale}`, toPath),
      isPermanent,
      redirectInBrowser,
    });
  });
};

const createPageFromNode = (
  node,
  { createPage, prefix = '', disableSEO = false }
) => {
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
        disableSEO,
      },
    });
  }
};

const TEMPLATES_BY_TYPE = {
  landingPage: 'landingPage',
  apiDoc: 'docPage',
  releaseNote: 'releaseNote',
  troubleshooting: 'docPage',
  apiLandingPage: 'apiLandingPage',
};

const getTemplate = (node) => {
  const {
    frontmatter,
    fields: { fileRelativePath },
  } = node;

  switch (true) {
    case Boolean(frontmatter.type):
      return { template: TEMPLATES_BY_TYPE[frontmatter.type] };

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
      return { template: 'docPage' };
  }
};

const getFileRelativePath = (path) => path.replace(`${process.cwd()}/`, '');
