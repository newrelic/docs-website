const path = require('path');
const vfile = require('vfile');
const { CONTENT_DIR, TYPES } = require('../constants');

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

  return vfile({
    path: path.join(CONTENT_DIR, dirname, filename + extension),
    contents: doc.body || '',
    data: {
      doc,
      topics: getTopics(doc),
    },
  });
};

const getTopics = (doc) => {
  return Object.entries(doc)
    .reduce(
      (topics, [key, value]) =>
        key.startsWith('topic_') ? [...topics, value] : topics,
      []
    )
    .filter(Boolean);
};

module.exports = toVFile;
