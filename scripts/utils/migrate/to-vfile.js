const path = require('path');
const vfile = require('vfile');
const { BASE_DIR, TYPES } = require('../constants');

const DEFAULT_EXTENSION = '.mdx';

const EXTENSIONS = {
  [TYPES.ATTRIBUTE_DEFINITION]: '.json',
};

const toVFile = (doc) => {
  const url = new URL(doc.docUrl);
  const dirname = path.dirname(url.pathname);
  const basename = path.basename(url.pathname);
  const filename = doc.type === TYPES.LANDING_PAGE ? 'index' : basename;
  const extension = EXTENSIONS[doc.type] || DEFAULT_EXTENSION;

  const file = vfile({
    path: path.join(BASE_DIR, dirname, filename + extension),
    contents: doc.body || '',
    data: {
      doc,
    },
  });

  return file;
};

module.exports = toVFile;
