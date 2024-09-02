const path = require('path');
const { prop } = require('./scripts/utils/functional.js');
const { createFilePath } = require('gatsby-source-filesystem');
const createSingleNav = require('./scripts/createSingleNav');
const generateTOC = require('mdast-util-toc');
// are needed for our tableOfContents override
const genMDX = require('gatsby-plugin-mdx/utils/gen-mdx.js');
const defaultOptions = require('gatsby-plugin-mdx/utils/default-options.js');
const getTableOfContents = require('gatsby-plugin-mdx/utils/get-table-of-content.js');

const TEMPLATE_DIR = 'src/templates/';
const TRAILING_SLASH = /\/$/;
const releaseNotesPerAgent = {};

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const hasTrailingSlash = (pathname) =>
  pathname === '/' ? false : TRAILING_SLASH.test(pathname);

exports.onPreBootstrap = () => {
  createSingleNav();
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
      },
      alias: {
        images: path.resolve(__dirname, 'static/images/'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const type = node.internal.type;

  if (
    type === 'Mdx' ||
    (type === 'MarkdownRemark' && node.fileAbsolutePath.includes('src/content'))
  ) {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode, trailingSlash: false }),
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
              subject
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
          totalCount
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
    allLocale,
    releaseNotes,
    landingPagesReleaseNotes,
  } = data;

  releaseNotes.group.forEach((el) => {
    const { fieldValue, totalCount } = el;

    const landingPage = landingPagesReleaseNotes.nodes.find(
      (node) => node.frontmatter.subject === fieldValue
    );

    if (landingPage) {
      releaseNotesPerAgent[landingPage.frontmatter.subject] = totalCount;
    }
  });

  const locales = allLocale.nodes
    .filter((locale) => !locale.isDefault)
    .map(prop('locale'));

  const translatedContentNodes = allI18nMdx.edges.map(({ node }) => node);

  allMdx.edges.concat(allMarkdownRemark.edges).forEach(({ node }) => {
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
        false // enable DSG
      );
    });
  });
};

exports.createSchemaCustomization = (
  {
    getNode,
    getNodes,
    pathPrefix,
    reporter,
    cache,
    actions,
    schema,
    store,
    ...helpers
  },
  pluginOptions
) => {
  const { createTypes } = actions;

  const typeDefs = `
  type NavYaml implements Node @dontInfer {
    id: ID!
    title: String!
    path: String
    icon: String
    label: String
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
    eolDate: String
    downloadLink: String
    features: [String]
    bugs: [String]
    security: [String]
  }

  `;

  // this was taken from gatsby-plugin-mdx/gatsby/create-schema-customization.js
  const options = defaultOptions(pluginOptions);

  const pendingPromises = new WeakMap();
  const processMDX = ({ node }) => {
    let promise = pendingPromises.get(node);
    if (!promise) {
      promise = genMDX({
        node,
        options,
        store,
        pathPrefix,
        getNode,
        getNodes,
        cache,
        reporter,
        actions,
        schema,
        ...helpers,
      });
      pendingPromises.set(node, promise);
      promise.then(() => {
        pendingPromises.delete(node);
      });
    }
    return promise;
  };

  const tocExtension = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      tableOfContents: {
        type: `JSON`,
        args: {
          maxDepth: {
            type: `Int`,
            default: 6,
          },
        },
        async resolve(mdxNode, { maxDepth }) {
          const { mdast } = await processMDX({ node: mdxNode });
          const toc = generateTOC(mdast, {
            maxDepth,

            // override gatsby-plugin-mdx tableOfContents options
            // to allow Step headers to show in PageTools
            parents: [
              (node) => node.type === 'mdxBlockElement' && node.name === 'Step',
              'root',
            ],
          });

          return getTableOfContents(toc.map, {});
        },
      },
    },
  });
  createTypes([typeDefs, tocExtension]);
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
      eolDate: {
        resolve: (source) =>
          hasOwnProperty(source, 'eolDate') ? source.eolDate : null,
      },
      downloadLink: {
        resolve: (source) =>
          hasOwnProperty(source, 'downloadLink') ? source.downloadLink : null,
      },
      features: {
        resolve: (source) =>
          hasOwnProperty(source, 'features') ? source.features : null,
      },
      bugs: {
        resolve: (source) =>
          hasOwnProperty(source, 'bugs') ? source.bugs : null,
      },
      security: {
        resolve: (source) =>
          hasOwnProperty(source, 'security') ? source.security : null,
      },
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/404/)) {
    page.context.layout = 'basic';
  }
  if (page.path === '/') {
    page.context.layout = 'homepage';
  }

  if (page.path.match(/404/) && page.path.match(/\/docs\//)) {
    page.context.layout = 'default';
  }

  if (page.path.includes('/install/')) {
    const pagePathArray = page.path.split('/');
    const lastItem = pagePathArray[pagePathArray.length - 1];
    page.context.agent =
      lastItem !== '' ? lastItem : pagePathArray[pagePathArray.length - 2];
  }

  if (hasTrailingSlash(page.context.slug)) {
    page.context.slug = page.context.slug.replace(TRAILING_SLASH, '');
  }

  createPage(page);
};

const createPageFromNode = (
  node,
  { createPage, prefix = '', disableSwiftype = false },
  defer = false
) => {
  const {
    frontmatter: { subject: agentName },
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
  } else if (template === 'releaseNoteLandingPage') {
    const releaseNotes = releaseNotesPerAgent[agentName];
    const releaseNotesPerPage = 10;
    const numPages = Math.ceil(releaseNotes / releaseNotesPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? path.join(prefix, slug, '/')
            : path.join(prefix, slug, `/${i + 1}/`),
        component: path.resolve(path.join(TEMPLATE_DIR, `${template}.js`)),
        context: {
          limit: releaseNotesPerPage,
          skip: i * releaseNotesPerPage,
          numPages,
          currentPage: i + 1,
          ...context,
          fileRelativePath,
          slug,
          slugRegex: `${slug}/.+/`,
          disableSwiftype,
        },
        defer,
      });
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

const getTemplate = (node) => {
  const {
    frontmatter,
    fields: { fileRelativePath },
  } = node;

  switch (true) {
    case /docs\/release-notes\/.*\/index.mdx$/.test(fileRelativePath):
      return {
        template: 'releaseNoteLandingPage',
        context: { subject: frontmatter.subject },
      };

    case fileRelativePath.includes('src/content/docs/release-notes'):
      return { template: 'releaseNote' };

    case fileRelativePath.includes('src/content/eol'):
      return { template: 'eolAnnouncement' };

    case fileRelativePath.includes('src/content/whats-new'):
      return { template: 'whatsNew' };

    default:
      return { template: 'docPage' };
  }
};
