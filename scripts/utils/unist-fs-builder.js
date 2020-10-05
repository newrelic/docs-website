const u = require('unist-builder');
const path = require('path');

const directory = (dirpath, children = []) => {
  return u(
    'directory',
    { name: path.basename(dirpath), path: dirpath },
    children
  );
};

const file = (filepath, data = {}) => {
  return u('file', {
    data,
    extension: path.extname(filepath),
    path: filepath,
    basename: path.basename(filepath),
  });
};

module.exports = { directory, file };
