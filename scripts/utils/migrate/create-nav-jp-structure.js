const vfile = require('vfile');
const yaml = require('js-yaml');
const { BASE_URL, NAV_JP_DIR } = require('../constants');
const path = require('path');

const createNavJpStructure = (navFiles, jpFiles) => {
  const data = navFiles.reduce((acc, file) => {
    const page = yaml.safeLoad(file);
    return buildNav(jpFiles, page, acc);
  }, {});

  return vfile({
    path: path.join(NAV_JP_DIR, 'jp.json'),
    contents: JSON.stringify(data, null, 2),
  });
};

const buildNav = (jpFiles, { title: enTitle, pages, path }, state = {}) => {
  const jpFile = jpFiles.find(
    (file) => file.data.doc.docUrl.split(BASE_URL).pop().trim() === path
  );

  const title = jpFile ? jpFile.data.doc.title : enTitle;

  const newState = { ...state, [enTitle]: title };

  return (pages || []).reduce((acc, page) => {
    return buildNav(jpFiles, page, acc);
  }, newState);
};

module.exports = createNavJpStructure;
