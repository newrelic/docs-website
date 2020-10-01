const fs = require('fs');
const path = require('path');
const vfile = require('vfile');
const getCategories = require('../get-categories');
const { BASE_DIR, TYPES } = require('../../constants');

const DEFAULT_EXTENSION = '.mdx';

const EXTENSIONS = {
  [TYPES.ATTRIBUTE_DEFINITION]: '.json',
};

const createFiles = (docs) => {
  return docs.map((doc) => {
    const dirname = path.join(BASE_DIR, ...getCategories(doc.docUrl));

    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }

    const slug = doc.docUrl.split('/').slice(-1);

    return vfile({
      stem: doc.type === TYPES.LANDING_PAGE ? 'index' : slug,
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
