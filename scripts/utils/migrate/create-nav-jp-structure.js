const vfile = require('vfile');
const yaml = require('js-yaml');
const { NAV_JP_DIR, TYPES } = require('../constants');
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

const buildNav = (jpFiles, page, state) => {
  const jpFile = jpFiles.find((file) => {
    const { doc } = file.data;
    const url = new URL(doc.docUrl);

    if (doc.type === TYPES.LANDING_PAGE) {
      url.pathname = path.dirname(url.pathname);
    }

    return url.pathname === page.path;
  });

  const title = jpFile ? jpFile.data.doc.title : page.title;

  const newState =
    page.title === title
      ? state
      : [...state, { title, englishTitle: page.title, locale: 'jp' }];

  return (page.pages || []).reduce((state, page) => {
    return buildNav(jpFiles, page, state);
  }, newState);
};

module.exports = createNavJpStructure;
