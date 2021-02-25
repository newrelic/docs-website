const fs = require('fs');
const path = require('path');
const vfile = require('vfile');
const yaml = require('js-yaml');
const { CONTENT_DIR, NAV_DIR } = require('../constants');
const slugify = require('../slugify');
const he = require('he');

const createNavStructure = (files) => {
  if (!fs.existsSync(NAV_DIR)) {
    fs.mkdirSync(NAV_DIR);
  }

  return files
    .reduce((nav, file) => {
      const { topics } = file.data;

      if (topics.length === 0 || topics[0] === 'Release notes') {
        return nav;
      }

      const [title, ...subtopics] = topics;
      const idx = nav.findIndex((node) => node.title === title);

      return idx === -1
        ? [
            ...nav,
            buildSubnav(
              file,
              {
                title: he.decode(title),
                path: `/docs/${slugify(title)}`,
                pages: [],
              },
              subtopics
            ),
          ]
        : update(nav, idx, (node) => buildSubnav(file, node, subtopics));
    }, [])
    .map((node) =>
      vfile({
        path: path.join(NAV_DIR, `${slugify(node.title)}.yml`),
        contents: yaml.safeDump(node, { lineWidth: 99999 }),
      })
    );
};

const toPath = (file) =>
  path
    .join(file.dirname, path.basename(file.path, file.extname))
    .replace(CONTENT_DIR, '')
    .replace(/\/index$/, '');

const update = (items, idx, updater) => [
  ...items.slice(0, idx),
  updater(items[idx]),
  ...items.slice(idx + 1),
];

const updateChild = (parent, idx, updater) => ({
  ...parent,
  pages: update(parent.pages || [], idx, updater),
});

const buildSubnav = (file, parent, topics) => {
  const title = (
    topics[0] ||
    file.data.doc.shortTitle ||
    file.data.doc.title
  ).trim();
  const subtopics = topics.slice(1);
  const { pages = [] } = parent;
  const idx = pages.findIndex((node) => node.title === title);

  switch (true) {
    case topics.length === 0 && idx >= 0:
      return updateChild(parent, idx, ({ title, ...attrs }) => ({
        title: he.decode(title),
        path: toPath(file),
        ...attrs,
      }));

    case topics.length === 0:
      return {
        ...parent,
        pages: [...pages, { title: he.decode(title), path: toPath(file) }],
      };

    case idx === -1:
      return {
        ...parent,
        pages: [
          ...pages,
          buildSubnav(file, { title: he.decode(title), pages: [] }, subtopics),
        ],
      };

    default:
      return updateChild(parent, idx, (node) =>
        buildSubnav(file, node, subtopics)
      );
  }
};

module.exports = createNavStructure;
