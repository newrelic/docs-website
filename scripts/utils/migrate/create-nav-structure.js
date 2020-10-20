const fs = require('fs');
const path = require('path');
const vfile = require('vfile');
const yaml = require('js-yaml');
const { BASE_DIR, NAV_DIR } = require('../constants');

const slug = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/, '-')
    .replace(/[^a-z0-9 -]/g, '');

const createNavStructure = (files) => {
  if (!fs.existsSync(NAV_DIR)) {
    fs.mkdirSync(NAV_DIR);
  }

  return files
    .reduce((nav, file) => {
      const {
        topics: [title, ...subtopics],
      } = file.data;

      if (!title) {
        return nav;
      }

      const idx = nav.findIndex((node) => node.title === title);

      if (idx === -1) {
        return [...nav, buildSubnav(file, { title, children: [] }, subtopics)];
      }

      return [
        ...nav.slice(0, idx),
        buildSubnav(file, nav[idx], subtopics),
        ...nav.slice(idx + 1),
      ];
    }, [])
    .map((node) =>
      vfile({
        path: path.join(NAV_DIR, `${slug(node.title)}.yml`),
        contents: yaml.safeDump(node),
      })
    );
};

const toPath = (file) =>
  path
    .join(file.dirname, path.basename(file.path, file.extname))
    .replace(BASE_DIR, '')
    .replace(/\/index$/, '');

const buildSubnav = (file, parent, topics) => {
  const title = (topics[0] || file.data.doc.title).trim();
  const subtopics = topics.slice(1);
  const { children = [] } = parent;
  const idx = children.findIndex((node) => node.title === title);

  switch (true) {
    case topics.length === 0 && idx >= 0: {
      const node = children[idx];

      return {
        ...parent,
        children: [
          ...children.slice(0, idx),
          { title: node.title, path: toPath(file), ...node },
          ...children.slice(idx + 1),
        ],
      };
    }

    case topics.length === 0:
      return {
        ...parent,
        children: [...children, { title, path: toPath(file) }],
      };

    case idx === -1:
      return {
        ...parent,
        children: [
          ...children,
          buildSubnav(file, { title, children: [] }, subtopics),
        ],
      };

    default: {
      return {
        ...parent,
        children: [
          ...children.slice(0, idx),
          buildSubnav(file, parent.children[idx], subtopics),
          ...children.slice(idx + 1),
        ],
      };
    }
  }
};

module.exports = createNavStructure;
