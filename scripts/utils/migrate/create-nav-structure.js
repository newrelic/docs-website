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

const buildSubnav = (file, parent, topics) => {
  if (topics.length === 0) {
    return {
      ...parent,
      children: [
        ...parent.children,
        {
          title: file.data.doc.title.trim(),
          path: path
            .join(file.dirname, path.basename(file.path, file.extname))
            .replace(BASE_DIR, '')
            .replace(/\/index$/, ''),
        },
      ],
    };
  }

  const [title, ...subtopics] = topics;
  const idx = parent.children.findIndex((node) => node.title === title);

  if (idx === -1) {
    return {
      ...parent,
      children: [
        ...parent.children,
        buildSubnav(file, { title, children: [] }, subtopics),
      ],
    };
  }

  return {
    ...parent,
    children: [
      ...parent.children.slice(0, idx),
      buildSubnav(file, parent.children[idx], subtopics),
      ...parent.children.slice(idx + 1),
    ],
  };
};

module.exports = createNavStructure;
