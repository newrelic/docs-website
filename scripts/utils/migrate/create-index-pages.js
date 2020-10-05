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

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

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

const toTitle = (dirname) => {
  const [firstWord, ...words] = dirname.split('-');

  return replace([capitalize(firstWord), ...words].join(' '));
};

const SKIPPED_FOLDERS = ['src/content/attribute-dictionary'];

const createIndexPages = async (files) => {
  const contentDirectory = fromList(
    files.sort((a, b) => a.path.localeCompare(b.path)),
    (file) =>
      file.extname === '.mdx'
        ? { frontmatter: fm(file.contents).attributes }
        : {}
  );

  visit(contentDirectory, 'directory', (dir) => {
    if (SKIPPED_FOLDERS.includes(dir.path)) {
      return [visit.SKIP];
    }

    if (dir.path === 'src' || dir.children.some(isIndexFile)) {
      return;
    }

    const tree = root([
      frontmatter({ title: toTitle(dir.basename), template: 'basicDoc' }),
    ]);

    visit(
      dir,
      (node) => node !== dir,
      (node) => {
        if (SKIPPED_FOLDERS.includes(node.path)) {
          return [visit.SKIP];
        }

        if (node.type === 'directory') {
          const depth = node.path
            .replace(new RegExp(`${dir.path}\\/`, ''))
            .split('/').length;
          tree.children.push(heading(depth + 1, text(toTitle(node.basename))));
        } else if (isMDXFile(node)) {
          tree.children.push(
            link(
              path.join(
                '/',
                node.path
                  .replace('.mdx', '')
                  .replace(BASE_DIR, '')
                  .replace(/\/index\/?$/, '')
              ),
              '',
              text(node.data.frontmatter.title)
            )
          );
        }
      }
    );

    const indexFile = vfile({
      path: path.join(dir.path, 'index.mdx'),
      contents: toMDX(tree),
    });

    write(indexFile, 'utf-8').catch((e) => console.error(e));
  });
};

module.exports = createIndexPages;
