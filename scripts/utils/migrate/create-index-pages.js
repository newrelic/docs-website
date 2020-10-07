const path = require('path');
const fm = require('front-matter');
const visit = require('unist-util-visit');
const convert = require('unist-util-is/convert');
const vfile = require('vfile');
const { root, link, heading, text, list, listItem } = require('mdast-builder');
const toMDX = require('./to-mdx');
const { frontmatter } = require('../mdast');
const { BASE_DIR } = require('../constants');
const fromList = require('../unist-fs-util-from-list');
const { last } = require('lodash');

const isIndexFile = convert({ type: 'file', basename: 'index.mdx' });
const isMDXFile = convert({ type: 'file', extension: '.mdx' });
const isDirectory = convert('directory');
const isList = convert('list');

const REPLACEMENTS = [
  [/ios/gi, 'iOS'],
  [/apm/gi, 'APM'],
  [/new relic/gi, 'New Relic'],
  [/\bphp\b/gi, 'PHP'],
  [/\bui\b/gi, 'UI'],
  [/\bapi\b/gi, 'API'],
  [/([wW])hats/gi, "$1hat's"],
];

const replace = (string) =>
  REPLACEMENTS.reduce(
    (str, [regex, replacement]) => str.replace(regex, replacement),
    string
  );

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const sentenceCase = (dirname) => {
  const [firstWord, ...words] = dirname.split('-');
  const title = [capitalize(firstWord), ...words].join(' ');

  return replace(title);
};

const SKIPPED_FOLDERS = ['src/content/attribute-dictionary', 'images'];

const shouldSkipDirectory = (dir) =>
  SKIPPED_FOLDERS.includes(dir.path) || SKIPPED_FOLDERS.includes(dir.basename);

const toURL = (node) =>
  path.join(
    '/',
    node.path
      .replace('.mdx', '')
      .replace(BASE_DIR, '')
      .replace(/\/index\/?$/, '')
  );

const depthOf = (node, dir) => {
  return node.path.replace(new RegExp(`${dir.path}\\/`, '')).split('/').length;
};

const generateMDX = (dir) => {
  const tree = root([
    frontmatter({ title: sentenceCase(dir.basename), template: 'basicDoc' }),
  ]);

  visit(
    dir,
    (node) => node !== dir,
    (node) => {
      if (shouldSkipDirectory(node)) {
        return [visit.SKIP];
      }

      if (isDirectory(node)) {
        // Start headings at level 2
        tree.children.push(
          heading(depthOf(node, dir) + 1, text(sentenceCase(node.basename)))
        );
      } else if (isMDXFile(node)) {
        const lastChild = last(tree.children);
        const linkListItem = listItem(
          link(toURL(node), '', text(node.data.frontmatter.title.trim()))
        );

        if (isList(lastChild)) {
          lastChild.children.push(linkListItem);
        } else {
          tree.children.push(list('unordered', [linkListItem]));
        }
      }
    }
  );

  return toMDX(tree);
};

const createIndexPages = (files) => {
  const contentDirectory = fromList(
    files.sort((a, b) => a.path.localeCompare(b.path)),
    (file) =>
      file.extname === '.mdx'
        ? { frontmatter: fm(file.contents).attributes }
        : {}
  );

  const indexFiles = [];

  visit(contentDirectory, 'directory', (dir) => {
    if (shouldSkipDirectory(dir)) {
      return [visit.SKIP];
    }

    if (dir.path === 'src' || dir.children.some(isIndexFile)) {
      return;
    }

    indexFiles.push(
      vfile({
        path: path.join(dir.path, 'index.mdx'),
        contents: generateMDX(dir),
      })
    );
  });

  return indexFiles;
};

module.exports = createIndexPages;
