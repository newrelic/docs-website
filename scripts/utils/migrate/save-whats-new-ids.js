const path = require('path');
const vfile = require('vfile');
const { write } = require('to-vfile');
const { DATA_DIR } = require('../constants');

module.exports = async (whatsNewFiles) => {
  const content = whatsNewFiles.reduce(
    (acc, vfile) => ({
      ...acc,
      [vfile.path]: vfile.data.doc.docId,
    }),
    {}
  );

  const file = vfile({
    path: path.join(DATA_DIR, 'whats-new-ids.json'),
    contents: JSON.stringify(content, null, 2),
  });

  write(file, 'utf-8');

  // stretch-goal: comment?
};
