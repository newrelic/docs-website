const path = require('path');
const fromList = require('./utils/unist-fs-util-from-list');
const visit = require('unist-util-visit');
const generateHTML = require('./utils/generate-html');
const { sentenceCase } = require('./utils/string');

exports.createPages = async ({ actions, graphql, reporter }, pluginOptions) => {
  const { skippedDirectories } = pluginOptions;
  const { createPage } = actions;

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
            fields {
              slug
            }
          }
          childMarkdownRemark {
            fields {
              slug
            }
          }
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
              contentType
              shortDescription
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
    tableOfContents: { nodes: tableOfContentsNodes },
    allFile: { nodes: fileNodes },
  } = data;

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
  });

  tableOfContentsNodes.forEach((node) => {
    const landingPageSlug = getSlug(node);
    const slug = path.join(landingPageSlug, 'table-of-contents');

    createPage({
      path: slug,
      component: path.resolve('src/templates/tableOfContents.js'),
      context: {
        fileRelativePath: null,
        slug,
        landingPageSlug,
      },
    });
  });
};

const getSlug = (node) =>
  (node.childMdx || node.childMarkdownRemark).fields.slug;
