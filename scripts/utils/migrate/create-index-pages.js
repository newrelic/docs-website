const path = require('path');
const fm = require('front-matter');
const u = require('unist-builder');
const visit = require('unist-util-visit');
const convert = require('unist-util-is/convert');
const vfile = require('vfile');
const { root, link, heading, text } = require('mdast-builder');
const unified = require('unified');
const stringify = require('remark-stringify');
const remarkFrontmatter = require('remark-frontmatter');
const yaml = require('js-yaml');
const { write } = require('to-vfile');

const isIndexFile = convert({ type: 'mdxFile', name: 'index.mdx' });
const { BASE_DIR } = require('../constants');

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

const TYPES = {
  '.mdx': {
    type: 'mdxFile',
    attributes: (file) => ({
      title: fm(file.contents).attributes.title,
    }),
  },
  '.json': {
    type: 'jsonFile',
    attributes: () => ({}),
  },
};

const createSubfolders = (folders, file, parent) => {
  if (folders.length === 0) {
    const { type, attributes: getAttributes } = TYPES[file.extname];

    return {
      ...parent,
      children: [
        ...parent.children,
        u(type, {
          name: file.basename,
          path: path.join(parent.path, file.basename),
          ...getAttributes(file),
        }),
      ],
    };
  }

  const [folder, ...subfolders] = folders;

  const node =
    parent.children.find((child) => child.name === folder) ||
    u(
      'directory',
      {
        name: folder,
        path: path.join(parent.path || '', folder),
        title: toTitle(folder),
      },
      []
    );

  const idx = parent.children.indexOf(node);
  const insertIdx = idx === -1 ? parent.children.length : idx;

  return {
    ...parent,
    children: [
      ...parent.children.slice(0, insertIdx),
      createSubfolders(subfolders, file, node),
      ...parent.children.slice(insertIdx + 1),
    ],
  };
};

const toMDX = (tree) =>
  unified().use(stringify).use(remarkFrontmatter, ['yaml']).stringify(tree);

const frontmatter = (attributes) => ({
  type: 'yaml',
  value: yaml.safeDump(attributes),
});

const createIndexPages = async (files) => {
  const contentDirectory = files
    .sort((a, b) => a.path.localeCompare(b.path))
    .reduce(
      (tree, file) => createSubfolders(file.dirname.split('/'), file, tree),
      u('root', [])
    );

  visit(contentDirectory, 'directory', (dir) => {
    const hasIndexFile = dir.children.some(isIndexFile);

    if (dir.path === 'src' || hasIndexFile) {
      return;
    }

    const tree = root([
      frontmatter({ title: dir.title, template: 'basicDoc' }),
    ]);

    visit(
      dir,
      (node) => node !== dir,
      (node) => {
        if (node.name === 'attribute-dictionary') {
          return [visit.SKIP];
        }

        if (node.type === 'directory') {
          const depth = node.path
            .replace(new RegExp(`${dir.path}\\/`, ''))
            .split('/').length;
          tree.children.push(heading(depth + 1, text(toTitle(node.name))));
        } else if (node.type === 'mdxFile') {
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
              text(node.title)
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
