const path = require('path');
const vfile = require('vfile');
const { BASE_DIR, TYPES } = require('../constants');

const DEFAULT_EXTENSION = '.mdx';

const EXTENSIONS = {
  [TYPES.ATTRIBUTE_DEFINITION]: '.json',
};

const mapToVFiles = (docs) => {
  return docs.map((doc) => {
    const url = new URL(doc.docUrl);

    const file = vfile({
      extname: EXTENSIONS[doc.type] || DEFAULT_EXTENSION,
      path: path.join(BASE_DIR, url.pathname),
      contents: doc.body || '',
      meta: {
        doc,
      },
    });

    if (doc.type === TYPES.LANDING_PAGE) {
      file.stem = 'index';
    }

    return file;
  });
};

module.exports = mapToVFiles;
