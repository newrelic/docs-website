const path = require('path');
const { prop } = require('./scripts/utils/functional.js');
const externalRedirects = require('./src/data/external-redirects.json');
const { createFilePath } = require('gatsby-source-filesystem');

const TEMPLATE_DIR = 'src/templates/';
const TRAILING_SLASH = /\/$/;

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const hasTrailingSlash = (pathname) =>
  pathname === '/' ? false : TRAILING_SLASH.test(pathname);

const appendTrailingSlash = (pathname) =>
  pathname.endsWith('/') ? pathname : `${pathname}/`;

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
      },
      alias: {
        images: path.resolve(__dirname, 'src/images/'),
      },
    },
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
              translationType
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

      createPageFromNode(
        i18nNode || node,
        {
          prefix: i18nNode ? '' : locale,
          createPage,
          disableSwiftype: !i18nNode,
        },
        false // disable DSG
      );
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
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter
  }
  type Mdx implements Node {
    frontmatter: Frontmatter
  }
  type Frontmatter {
    isFeatured: Boolean
    translationType: String
    dataSource: String
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
          hasOwnProperty(source, 'rootNav') ? source.rootNav : false,
      },
    },
    Frontmatter: {
      isFeatured: {
        resolve: (source) =>
          hasOwnProperty(source, 'isFeatured') ? source.isFeatured : false,
      },
      translationType: {
        resolve: (source) =>
          hasOwnProperty(source, 'translationType')
            ? source.translationType
            : null,
      },
      dataSource: {
        resolve: (source) =>
          hasOwnProperty(source, 'dataSource') ? source.dataSource : null,
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
  // Create redirects for paths with and without a trailing slash
  const pathWithTrailingSlash = hasTrailingSlash(fromPath)
    ? fromPath
    : path.join(fromPath, '/');
  const pathWithoutTrailingSlash = pathWithTrailingSlash.slice(0, -1);

  createRedirect({
    fromPath: pathWithTrailingSlash,
    toPath: appendTrailingSlash(toPath),
    isPermanent,
    redirectInBrowser,
  });

  createRedirect({
    fromPath: pathWithoutTrailingSlash,
    toPath: appendTrailingSlash(toPath),
    isPermanent,
    redirectInBrowser,
  });

  locales.forEach((locale) => {
    createRedirect({
      fromPath: path.join(`/${locale}`, pathWithTrailingSlash),
      toPath: appendTrailingSlash(path.join(`/${locale}`, toPath)),
      isPermanent,
      redirectInBrowser,
    });
    createRedirect({
      fromPath: path.join(`/${locale}`, pathWithoutTrailingSlash),
      toPath: appendTrailingSlash(path.join(`/${locale}`, toPath)),
      isPermanent,
      redirectInBrowser,
    });
  });
};

const createPageFromNode = (
  node,
  { createPage, prefix = '', disableSwiftype = false },
  defer = false
) => {
  const {
    fields: { fileRelativePath, slug },
  } = node;

  const { template, context = {} } = getTemplate(node);

  if (process.env.NODE_ENV === 'development' && !template) {
    createPage({
      path: path.join(prefix, slug, '/'),
      component: path.resolve(TEMPLATE_DIR, 'dev/missingTemplate.js'),
      context: {
        ...context,
        fileRelativePath,
        layout: 'basic',
      },
    });
  } else {
    createPage({
      path: path.join(prefix, slug, '/'),
      component: path.resolve(path.join(TEMPLATE_DIR, `${template}.js`)),
      context: {
        ...context,
        fileRelativePath,
        slug,
        slugRegex: `${slug}/.+/`,
        disableSwiftype,
      },
      defer,
    });
  }
};

const TEMPLATES_BY_TYPE = {
  landingPage: 'landingPage',
  apiDoc: 'docPage',
  releaseNote: 'releaseNote',
  troubleshooting: 'docPage',
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
