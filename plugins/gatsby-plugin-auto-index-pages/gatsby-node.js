const path = require('path');
const fromList = require('./utils/unist-fs-util-from-list');
const visit = require('unist-util-visit');
const convert = require('unist-util-is/convert');
const { last } = require('lodash');
const unified = require('unified');
const html = require('rehype-stringify');
const h = require('hastscript');
const u = require('unist-builder');

const isDirectory = convert('directory');
const isFile = convert('file');
const isList = convert({ type: 'element', tagName: 'ul' });

const SKIPPED_FOLDERS = ['', 'whats-new', 'docs/release-notes'];

const REPLACEMENTS = [
  [/ios/gi, 'iOS'],
  [/apm/gi, 'APM'],
  [/new relic/gi, 'New Relic'],
  [/\bphp\b/gi, 'PHP'],
  [/\bui\b/gi, 'UI'],
  [/\bapi\b/gi, 'API'],
  [/([wW])hats/gi, "$1hat's"],
];

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

  const files = fileNodes.map((node) => ({
    basename: node.base,
    path: node.relativePath,
    contents: node.childMdx || node.childMarkdownRemark,
  }));

  const list = fromList(files, ({ contents }) => contents);
  const indexPages = [];

  visit(list, 'directory', (dir) => {
    const slug = `/${dir.path}`;

    if (shouldSkipDirectory(dir)) {
      return [visit.SKIP];
    }

    if (existingPaths.includes(slug)) {
      return;
    }

    indexPages.push({
      slug,
      title: sentenceCase(dir.basename),
      html: generateHTML(dir),
    });
  });

  indexPages.forEach(({ slug, title, html }) => {
    createPage({
      path: slug,
      component: path.resolve('src/templates/indexPage.js'),
      context: {
        slug,
        html,
        title,
        fileRelativePath: null,
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

const generateHTML = (dir) => {
  const tree = u('root', []);

  visit(
    dir,
    (node) => node !== dir,
    (node) => {
      if (isDirectory(node)) {
        // Start headings at level 2
        const depth = depthOf(node, dir) + 1;

        tree.children.push(h(`h${depth}`, sentenceCase(node.basename)));

        return;
      }

      const lastChild = last(tree.children);
      const linkListItem = h('li', [
        h('a', { href: node.data.fields.slug }, [
          node.data.frontmatter.title.trim(),
        ]),
      ]);

      if (lastChild && isList(lastChild)) {
        lastChild.children.push(linkListItem);
      } else {
        tree.children.push(h('ul', [linkListItem]));
      }
    }
  );

  return unified().use(html).stringify(tree);
};

const sentenceCase = (dirname) => {
  const [firstWord, ...words] = dirname.split('-');
  const title = [capitalize(firstWord), ...words].join(' ');

  return replace(title);
};

const replace = (string) =>
  REPLACEMENTS.reduce(
    (str, [regex, replacement]) => str.replace(regex, replacement),
    string
  );

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const shouldSkipDirectory = (dir) =>
  SKIPPED_FOLDERS.includes(dir.path) || SKIPPED_FOLDERS.includes(dir.basename);

const depthOf = (node, dir) =>
  node.path.replace(new RegExp(`${dir.path}\\/`, '')).split('/').length;

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
