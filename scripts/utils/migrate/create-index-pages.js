/* eslint-disable no-console */
const path = require('path');
const fm = require('front-matter');
const visit = require('unist-util-visit');
const convert = require('unist-util-is/convert');
const vfile = require('vfile');
const { root, link, heading, text } = require('mdast-builder');
const { write } = require('to-vfile');
const toMDX = require('./to-mdx');
const { frontmatter } = require('../mdast');
const { BASE_DIR } = require('../constants');
const fromList = require('../unist-fs-util-from-list');

const isIndexFile = convert({ type: 'file', basename: 'index.mdx' });
const isMDXFile = convert({ type: 'file', extension: '.mdx' });
const isDirectory = convert('directory');

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

const titleize = (dirname) => {
  const [firstWord, ...words] = dirname.split('-');
  const title = [capitalize(firstWord), ...words].join(' ');

  return replace(title);
};

const SKIPPED_FOLDERS = ['src/content/attribute-dictionary'];

const shouldSkipDirectory = (dir) => SKIPPED_FOLDERS.includes(dir.path);

const toURL = (node) =>
  path.join(
    '/',
    node.path
      .replace('.mdx', '')
      .replace(BASE_DIR, '')
      .replace(/\/index\/?$/, '')
  );

const generateMDX = (dir) => {
  const tree = root([
    frontmatter({ title: titleize(dir.basename), template: 'basicDoc' }),
  ]);

  visit(
    dir,
    (node) => node !== dir,
    (node) => {
      if (shouldSkipDirectory(node)) {
        return [visit.SKIP];
      }

      if (isDirectory(node)) {
        const depth = node.path
          .replace(new RegExp(`${dir.path}\\/`, ''))
          .split('/').length;
        tree.children.push(heading(depth + 1, text(titleize(node.basename))));
      } else if (isMDXFile(node)) {
        tree.children.push(
          link(toURL(node), '', text(node.data.frontmatter.title))
        );
      }
    }
  );

  return toMDX(tree);
};

const createIndexPages = async (files) => {
  const contentDirectory = fromList(
    files.sort((a, b) => a.path.localeCompare(b.path)),
    (file) =>
      file.extname === '.mdx'
        ? { frontmatter: fm(file.contents).attributes }
        : {}
  );

  visit(contentDirectory, 'directory', (dir) => {
    if (shouldSkipDirectory(dir)) {
      return [visit.SKIP];
    }

    if (dir.path === 'src' || dir.children.some(isIndexFile)) {
      return;
    }

    write(
      vfile({
        path: path.join(dir.path, 'index.mdx'),
        contents: generateMDX(dir),
      }),
      'utf-8'
    ).catch((e) => console.error(e));
  });
};

module.exports = createIndexPages;
