const fs = require('fs');
const path = require('path');
const vfile = require('vfile');
const yaml = require('js-yaml');
const { NAV_DIR } = require('../constants');
const slugify = require('../slugify');
const { update, buildSubnav } = require('./build-nav');

const createNavStructure = (files) => {
  if (!fs.existsSync(NAV_DIR)) {
    fs.mkdirSync(NAV_DIR);
  }

  return files
    .reduce((nav, file) => {
      const { topics } = file.data;

      if (topics.length === 0) {
        return nav;
      }

      const [title, ...subtopics] = topics;
      const idx = nav.findIndex((node) => node.title === title);

      return idx === -1
        ? [
            ...nav,
            buildSubnav(
              file,
              { title, path: `/docs/${slugify(title)}`, pages: [] },
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

module.exports = createNavStructure;
