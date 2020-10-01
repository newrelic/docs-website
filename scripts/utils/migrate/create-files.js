const path = require('path');
const vfile = require('vfile');
const { BASE_DIR, TYPES } = require('../../constants');

const DEFAULT_EXTENSION = '.mdx';

const EXTENSIONS = {
  [TYPES.ATTRIBUTE_DEFINITION]: '.json',
};

const createFiles = (docs) => {
  return docs.map((doc) => {
    const url = new URL(doc.docUrl);
    const pathSegments = url.pathname.replace(/^\//, '').split('/');

    const dirname = path.join(BASE_DIR, ...pathSegments.slice(0, -1));

    return vfile({
      stem:
        doc.type === TYPES.LANDING_PAGE
          ? 'index'
          : pathSegments[pathSegments.length - 1],
      extname: EXTENSIONS[doc.type] || DEFAULT_EXTENSION,
      dirname,
      contents: doc.body || '',
      meta: {
        doc,
      },
    });
  });
};

module.exports = createFiles;
