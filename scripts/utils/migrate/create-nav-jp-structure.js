const vfile = require('vfile');
const yaml = require('js-yaml');
const { BASE_URL, NAV_JP_DIR } = require('../constants');
const slugify = require('../slugify');
const path = require('path');

const createNavJpStructure = (navFiles, jpFiles) => {
  return navFiles
    .map((file) => {
      const doc = yaml.safeLoad(file);
      return buildNav(jpFiles, doc.title, doc.path, doc.pages);
    })
    .map((node) => {
      if (node && node.title) {
        return vfile({
          path: path.join(NAV_JP_DIR, `${slugify(node.title)}.yml`),
          contents: yaml.safeDump(node.title, { lineWidth: 99999 }),
        });
      } else return;
    });
};

const buildNav = (jpFiles, enTitle, path, pages) => {
  const jpTitle = jpFiles.find((file) => {
    console.log(file.data.doc.docUrl.split(BASE_URL).pop().trim(), 'JP');
    console.log(path, 'PATH');
    if (file.data.doc.docUrl.split(BASE_URL).pop().trim() === path) {
      return file.data.doc.title;
    }
  });

  const title = jpTitle ? jpTitle : enTitle;

  if (pages) {
    return pages.map((page) => {
      return buildNav(jpFiles, page.title, page.path, page.pages);
    });
  }
  return { title, path };
};

module.exports = createNavJpStructure;
