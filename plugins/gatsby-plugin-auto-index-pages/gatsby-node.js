const path = require('path');
const visit = require('unist-util-visit');
const generateHTML = require('./utils/generate-html');
const fromList = require('./utils/unist-fs-util-from-list');
const { prop } = require('../../scripts/utils/functional.js');
const { sentenceCase } = require('./utils/string');
const createLocalizedRedirect = require('../../gatsby/utils/create-localized-redirect');
const taxonomyRedirects = require('../../src/data/taxonomy-redirects.json');

exports.createPages = async ({ actions, graphql, reporter }, pluginOptions) => {
  const { skippedDirectories } = pluginOptions;
  const { createPage, createRedirect } = actions;

  const { data, errors } = await graphql(`
    query MyQuery {
      tableOfContents: allFile(
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { in: ["index.mdx", "index.md"] }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
      translatedTableOfContents: allFile(
        filter: {
          sourceInstanceName: { eq: "translated-content" }
          base: { in: ["index.mdx", "index.md"] }
        }
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
      allLocale(filter: { isDefault: { eq: false } }) {
        nodes {
          locale
        }
      }
      allFile(
        sort: { fields: [relativePath] }
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { nin: ["index.mdx", "index.md"] }
          children: {
            elemMatch: { internal: { type: { in: ["MarkdownRemark", "Mdx"] } } }
          }
        }
      ) {
        nodes {
          base
          relativePath
          childMdx {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      translatedFiles: allFile(
        sort: { fields: [relativePath] }
        filter: {
          sourceInstanceName: { eq: "translated-content" }
          base: { nin: ["index.mdx", "index.md"] }
          children: {
            elemMatch: { internal: { type: { in: ["MarkdownRemark", "Mdx"] } } }
          }
        }
      ) {
        nodes {
          base
          relativePath
          childMdx {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          childMarkdownRemark {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors[0]);
  }

  const {
    allLocale,
    tableOfContents: { nodes: tableOfContentsNodes },
    translatedTableOfContents: { nodes: translatedTableOfContentsNodes },
    allFile: { nodes: fileNodes },
    translatedFiles: { nodes: translatedFileNodes },
  } = data;

  const allLocales = allLocale.nodes.map(prop('locale'));

  const { nodes: locales } = allLocale;

  const existingPaths = tableOfContentsNodes
    .map(getSlug)
    .concat(fileNodes.map(getSlug));

  const files = fileNodes.map((node) => ({
    basename: node.base,
    path: node.relativePath,
    contents: node.childMdx || node.childMarkdownRemark,
  }));

  const list = fromList(files, ({ contents }) => contents);

  visit(list, 'directory', (dir) => {
    const slug = `/${dir.path}`;

    if (skippedDirectories.includes(dir.path)) {
      return [visit.SKIP];
    }

    if (existingPaths.includes(slug)) {
      return;
    }

    createPage({
      path: slug,
      component: path.resolve('src/templates/indexPage.js'),
      context: {
        slug,
        html: generateHTML(dir),
        title: sentenceCase(dir.basename),
        fileRelativePath: null,
      },
    });

    const redirectsFrom = taxonomyRedirects.find(({ url }) => url === slug);

    if (redirectsFrom) {
      reporter.verbose(`Setup taxonomy redirects for ${slug}`);

      redirectsFrom.paths.forEach((from) => {
        reporter.verbose(`\tRedirect from ${from}`);

        createLocalizedRedirect({
          fromPath: from,
          toPath: slug,
          locales: allLocales,
          isPermanent: true,
          redirectInBrowser: true,
          createRedirect,
        });
      });
    }
  });

  locales.forEach(({ locale }) => {
    visit(list, 'directory', (dir) => {
      const slug = `/${dir.path}`;
      const localizedSlug = path.join(`/${locale}`, slug);

      if (skippedDirectories.includes(dir.path)) {
        return [visit.SKIP];
      }

      if (existingPaths.includes(slug)) {
        return;
      }

      dir.children
        .filter(isDirectory)
        .filter(hasChildren)
        .flatMap(prop('children'))
        .filter(isFile)
        .forEach((child) => {
          const localizedFileSlug = path.join(
            `/${locale}`,
            child.data.fields.slug
          );
          const matchedNode = translatedFileNodes.find(
            ({
              childMdx: {
                fields: { slug },
              },
            }) => slug === localizedFileSlug
          );
          if (matchedNode) {
            child.data.frontmatter.title =
              matchedNode.childMdx.frontmatter.title;
          }
          child.data.fields.slug = localizedFileSlug;
        });
      createPage({
        path: localizedSlug,
        component: path.resolve('src/templates/indexPage.js'),
        context: {
          slug: localizedSlug,
          html: generateHTML(dir),
          title: sentenceCase(dir.basename),
          fileRelativePath: null,
        },
      });
    });
  });

  tableOfContentsNodes.forEach((node) => {
    if (!node.childMdx || node.childMdx.frontmatter.type !== 'landingPage') {
      return;
    }
    const landingPageSlug = getSlug(node);
    const slug = path.join(landingPageSlug, 'table-of-contents');

    createPage({
      path: slug,
      component: path.resolve('src/templates/tableOfContents.js'),
      context: {
        fileRelativePath: null,
        slug,
        landingPageSlug,
        title: getTitle(node),
      },
    });

    locales.forEach(({ locale }) => {
      const localizedSlug = path.join(`/${locale}`, slug);
      const localizedLandingPageSlug = path.join(`/${locale}`, landingPageSlug);

      const translatedNode =
        translatedTableOfContentsNodes.find(
          (node) => getSlug(node) === localizedLandingPageSlug
        ) || node;

      createPage({
        path: localizedSlug,
        component: path.resolve('src/templates/tableOfContents.js'),
        context: {
          fileRelativePath: null,
          slug: localizedSlug,
          landingPageSlug: localizedLandingPageSlug,
          title: getTitle(translatedNode),
        },
      });
    });
  });
};

const getTitle = (node) => getField(node, 'frontmatter.title');
const getSlug = (node) => getField(node, 'fields.slug');

const getField = (node, field) =>
  field
    .split('.')
    .reduce(
      (obj, property) => obj && obj[property],
      node.childMdx || node.childMarkdownRemark
    );
const isDirectory = ({ type }) => type === 'directory';
const isFile = ({ type }) => type === 'file';
const hasChildren = (dir) => dir.children && dir.children.length;
