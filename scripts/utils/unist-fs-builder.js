const u = require('unist-builder');
const path = require('path');

const directory = (dirpath, children = []) => {
  return u(
    'directory',
    { name: path.basename(dirpath), path: dirpath },
    children
  );
};

module.exports = { directory };
