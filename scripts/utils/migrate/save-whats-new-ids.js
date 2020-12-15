const path = require('path');
const vfile = require('vfile');
const { write } = require('to-vfile');
const { DATA_DIR, CONTENT_DIR } = require('../constants');

const getSlug = ({ path: filepath }) =>
  filepath.replace(CONTENT_DIR, '').replace('.md', '');

module.exports = async (whatsNewFiles) => {
  const content = whatsNewFiles.reduce(
    (acc, vfile) => ({
      ...acc,
      [getSlug(vfile)]: vfile.data.doc.docId,
    }),
    {}
  );

  const file = vfile({
    path: path.join(DATA_DIR, 'whats-new-ids.json'),
    contents: JSON.stringify(content, null, 2),
  });

  await write(file, 'utf-8');
};
