const vfile = require('vfile');
const yaml = require('js-yaml');
const { BASE_URL, NAV_JP_DIR } = require('../constants');
const path = require('path');

const createNavJpStructure = (navFiles, jpFiles) => {
  const data = navFiles.reduce((state, file) => {
    return buildNav(jpFiles, yaml.safeLoad(file), state);
  }, []);

  return vfile({
    path: path.join(NAV_JP_DIR, 'jp.json'),
    contents: JSON.stringify(data, null, 2),
  });
};

const buildNav = (jpFiles, { title: enTitle, pages, path }, state) => {
  const jpFile = jpFiles.find(
    (file) => file.data.doc.docUrl.split(BASE_URL).pop().trim() === path
  );

  const title = jpFile ? jpFile.data.doc.title : enTitle;

  const newState =
    enTitle === title
      ? state
      : [...state, { title, englishTitle: enTitle, locale: 'jp' }];

  return (pages || []).reduce((state, page) => {
    return buildNav(jpFiles, page, state);
  }, newState);
};

module.exports = createNavJpStructure;
