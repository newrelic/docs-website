const u = require('unist-builder');
const path = require('path');

const directory = (dirpath, children = []) => {
  return u(
    'directory',
    { basename: path.basename(dirpath), path: dirpath },
    children
  );
};

const file = (filepath, data) => {
  return u('file', {
    data: data || {},
    extension: path.extname(filepath),
    path: filepath,
    basename: path.basename(filepath),
  });
};

const root = (children = []) => u('root', children);

module.exports = { directory, file, root };
