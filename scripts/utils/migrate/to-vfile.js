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

  return vfile({
    path: path.join(BASE_DIR, dirname, filename + extension),
    contents: doc.body || '',
    data: {
      doc,
      topics: getTopics(doc),
    },
  });
};

const getTopics = (doc) => {
  const topics = Object.entries(doc)
    .reduce(
      (topics, [key, value]) =>
        key.startsWith('topic_') ? [...topics, value] : topics,
      []
    )
    .filter(Boolean);

  return topics.length ? topics : [];
};

module.exports = toVFile;
