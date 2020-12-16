const path = require('path');

const EXCLUDED_PATHS = ['/'];

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query MyQuery {
      allNavYaml {
        nodes {
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
      tableOfContents: allFile(
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { in: ["index.mdx", "index.md"] }
          relativePath: { regex: "/^(?!whats-new).*$/" }
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
        filter: {
          sourceInstanceName: { eq: "markdown-pages" }
          base: { nin: ["index.mdx", "index.md"] }
          children: {
            elemMatch: { internal: { type: { in: ["MarkdownRemark", "Mdx"] } } }
          }
          relativePath: { regex: "/^(?!whats-new).*$/" }
        }
      ) {
        nodes {
          relativeDirectory
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

    fragment NavFields on NavYaml {
      title
      path
    }
  `);

  const {
    allNavYaml: { nodes: navNodes },
    tableOfContents: { nodes: tableOfContentsNodes },
    allFile: { nodes: fileNodes },
  } = data;

  const existingPaths = tableOfContentsNodes
    .map(getSlug)
    .concat(fileNodes.map(getSlug));

  const indexPaths = uniq(fileNodes.map((node) => `/${node.relativeDirectory}`))
    .filter(
      (slug) => !existingPaths.includes(slug) && !EXCLUDED_PATHS.includes(slug)
    )
    .forEach((slug) => {
      debugger;

      const pages = fileNodes
        .filter((node) => getSlug(node).startsWith(slug))
        .map((node) => {
          const f = findPage;
          const g = getPathToNode;
          const n = navNodes;
          const url = getSlug(node);
          const nav = navNodes.find((nav) => findPage(nav, url));

          return {
            url,
            title: getTitle(node),
            nav: nav ? getPathToNode(nav, url) : [],
          };
        });

      createPage({
        path: slug,
        component: path.resolve('src/templates/indexPage.js'),
        context: {
          slug,
          fileRelativePath: null,
          pages,
        },
      });
    });

  tableOfContentsNodes.forEach((node) => {
    const slug = path.join(getSlug(node), 'table-of-contents');

    createPage({
      path: slug,
      component: path.resolve('src/templates/tableOfContents.js'),
      context: {
        fileRelativePath: null,
        slug,
      },
    });
  });
};

const uniq = (arr) => [...new Set(arr)];

const getTitle = (node) =>
  (node.childMdx || node.childMarkdownRemark).frontmatter.title;

const getSlug = (node) =>
  (node.childMdx || node.childMarkdownRemark).fields.slug;

const findPage = (page, path) => {
  if (page.path === path) {
    return page;
  }

  if (page.pages == null || page.pages.length === 0) {
    return null;
  }

  return page.pages.find((child) => findPage(child, path));
};

const getPathToNode = (node, url, path = []) => {
  if (node.path === url) {
    return path;
  }

  if (node.pages == null || node.pages.length === 0) {
    return null;
  }

  path.push(node.title);

  const found = node.pages.find((child) => {
    return getPathToNode(child, url, path);
  });

  if (found) {
    return path;
  }

  path.pop();
};
