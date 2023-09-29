import generateTOC from 'mdast-util-toc';
import path, { dirname } from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

import { prop } from './scripts/utils/functional.js';
import externalRedirects from './src/data/external-redirects.json' assert { type: 'json' };
import createSingleNav from './scripts/createSingleNav.js';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const TEMPLATE_DIR = 'src/templates/';
const TRAILING_SLASH = /\/$/;
const releaseNotesPerAgent = {};

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const hasTrailingSlash = (pathname) =>
  pathname === '/' ? false : TRAILING_SLASH.test(pathname);

const appendTrailingSlash = (pathname) =>
  pathname.endsWith('/') ? pathname : `${pathname}/`;

/**
 * @type {import('gatsby').GatsbyNode['onPreBootstrap']}
 */
export const onPreBootstrap = () => {
  createSingleNav();
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateWebpackConfig']}
 */
export const onCreateWebpackConfig = ({ actions }) => {
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

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  console.time('createPages graphql query');
  const { data, errors } = await graphql(`
    {
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
            internal {
              contentFilePath
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
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/src/content/" } } }
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
              redirects
              hideNavs
            }
            internal {
              contentFilePath
            }
          }
        }
      }
      allI18nMdx: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/src/i18n/content/" } }
        }
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
            internal {
              contentFilePath
            }
          }
        }
      }
      releaseNotes: allMdx(
        filter: {
          internal: {
            contentFilePath: {
              regex: "/src/content/docs/release-notes/.*(?<!index).mdx/"
            }
          }
        }
        sort: { frontmatter: { releaseDate: DESC } }
      ) {
        group(limit: 1, field: { frontmatter: { subject: SELECT } }) {
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
          internal: {
            contentFilePath: { regex: "/docs/release-notes/.*/index.mdx$/" }
          }
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
      allInstallConfig {
        edges {
          node {
            redirects
            agentName
          }
        }
      }
    }
  `);
  console.timeEnd('createPages graphql query');

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const {
    allI18nMdx,
    allMarkdownRemark,
    allMdx,
    releaseNotes = { group: [] },
    landingPagesReleaseNotes,
    allLocale,
    allInstallConfig = { edges: [] },
    whatsNewPosts = { nodes: [] },
  } = data;
  const landingPageNodes = new Map();
  landingPagesReleaseNotes.nodes.forEach((node) =>
    landingPageNodes.set(node.frontmatter.subject, node)
  );

  console.log(
    '🐸landingPagesReleaseNotes.nodes.length',
    landingPagesReleaseNotes.nodes.length
  );
  console.log('🐸releaseNotes.group.length', releaseNotes.group.length);
  console.log('🐸allMdx.edges.length', allMdx.edges.length);
  console.log('🐸allI18nMdx.edges.length', allI18nMdx.edges.length);
  console.log(
    '🐸allMarkdownRemark.edges.length',
    allMarkdownRemark.edges.length
  );

  const locales = allLocale.nodes
    .filter((locale) => !locale.isDefault)
    .map(prop('locale'));

  console.time('creating redirects');
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
  console.timeEnd('creating redirects');

  console.time('creating localized redirects');
  allInstallConfig.edges.forEach(({ node: { redirects, agentName } }) => {
    redirects?.forEach((redirect) =>
      createLocalizedRedirect({
        locales,
        fromPath: redirect,
        toPath: `/install/${agentName}/`,
        createRedirect,
      })
    );
  });

  releaseNotes.group.forEach((el) => {
    const { fieldValue, nodes, totalCount } = el;

    const landingPage = landingPageNodes.get(fieldValue);

    if (landingPage) {
      releaseNotesPerAgent[landingPage.frontmatter.subject] = totalCount;
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

  const localeRegex = /src\/i18n\/content\/(.*?)\//g;
  const i18nReplaceRegex = /src\/i18n\/content\/.*?\//;
  const translatedContentNodes = new Map();
  allI18nMdx.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    const locale = getCaptureGroup(localeRegex, slug);
    const nonI18nSlug = slug.replace(i18nReplaceRegex, 'src/content');
    const nodes = translatedContentNodes.get(nonI18nSlug) ?? {};
    nodes[locale] = node;
    translatedContentNodes.set(nonI18nSlug, nodes);
  });

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
      const i18nNode = translatedContentNodes.get(node.fields.slug)?.[locale];

      createPageFromNode(
        i18nNode || node,
        {
          prefix: i18nNode ? '' : locale,
          createPage,
          disableSwiftype: !i18nNode,
        },
        true // enable DSG
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
  console.timeEnd('creating localized redirects');

  // Redirect for VSU page to new Introduction to APM doc
  createRedirect({
    fromPath: '/docs/apm/new-relic-apm/getting-started/introduction-apm/',
    toPath: '/introduction-apm',
    isPermanent: false,
    redirectInBrowser: true,
  });
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
export const createSchemaCustomization = ({ actions }) => {
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
    dataSource: String
    hideNavs: Boolean
    eolDate: String
    downloadLink: String
    signupBanner: SignupBanner
    features: [String]
    bugs: [String]
    security: [String]
  }
  type SignupBanner {
    cta: String
    url: String
    text: String
  }
  `;

  createTypes(typeDefs);
};

/**
 * @type {import('gatsby').GatsbyNode['createResolvers']}
 */
export const createResolvers = ({ createResolvers }) => {
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
      hideNavs: {
        resolve: (source) =>
          hasOwnProperty(source, 'hideNavs') ? source.hideNavs : null,
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
    SignupBanner: {
      cta: {
        resolve: (source) =>
          hasOwnProperty(source, 'cta') ? source.cta : null,
      },
      url: {
        resolve: (source) =>
          hasOwnProperty(source, 'url') ? source.url : null,
      },
      text: {
        resolve: (source) =>
          hasOwnProperty(source, 'text') ? source.text : null,
      },
    },
  });
};

/**
 * @type {import('gatsby').GatsbyNode['onCreatePage']}
 */
export const onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === '/') {
    page.context.quicklaunchSlug =
      'docs/new-relic-solutions/get-started/quick-launch-guide';
    page.context.layout = 'homepage';
  }
  if (page.path === '/jp/') {
    page.context.quicklaunchSlug =
      'jp/docs/new-relic-solutions/get-started/quick-launch-guide';
  }
  if (page.path === '/kr/') {
    page.context.quicklaunchSlug =
      'kr/docs/new-relic-solutions/get-started/quick-launch-guide';
  }

  if (page.path.match(/404/)) {
    page.context.layout = 'basic';
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

  createRedirect({
    fromPath: pathWithTrailingSlash,
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
  });
};

const createPageFromNode = (
  node,
  { createPage, prefix = '', disableSwiftype = false },
  defer = false
) => {
  const {
    frontmatter: { subject: agentName, hideNavs },
    fields: { fileRelativePath, slug },
    internal: { contentFilePath },
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
    const templatePath = path.resolve(
      path.join(TEMPLATE_DIR, `${template}.js`)
    );
    createPage({
      path: path.join(prefix, slug, '/'),
      component: `${templatePath}?__contentFilePath=${contentFilePath}`,
      context: {
        ...context,
        fileRelativePath,
        hideNavs,
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

const getCaptureGroup = (regex, string) => string.match(regex)[1];

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
