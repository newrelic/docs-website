const path = require('path');
const { CONTENT_DIR } = require('../constants');

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
        title,
        path: toPath(file),
        ...attrs,
      }));

    case topics.length === 0:
      return {
        ...parent,
        pages: [...pages, { title, path: toPath(file) }],
      };

    case idx === -1:
      return {
        ...parent,
        pages: [...pages, buildSubnav(file, { title, pages: [] }, subtopics)],
      };

    default:
      return updateChild(parent, idx, (node) =>
        buildSubnav(file, node, subtopics)
      );
  }
};

module.exports = { update, buildSubnav, toPath, updateChild };
