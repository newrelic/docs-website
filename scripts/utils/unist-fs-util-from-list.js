const path = require('path');
const { root, directory, file: fileNode } = require('./unist-fs-builder');
const { insertChild } = require('./unist');

const noop = () => {};

const buildSubtree = (
  file,
  parent,
  getAttributes,
  folders = file.dirname.split('/')
) => {
  if (folders.length === 0) {
    return insertChild(
      fileNode(path.join(parent.path, file.basename), getAttributes(file)),
      parent
    );
  }

  const [folder, ...subfolders] = folders;

  const node =
    parent.children.find((child) => child.basename === folder) ||
    directory(path.join(parent.path || '', folder));

  const idx = parent.children.indexOf(node);

  return insertChild(
    buildSubtree(file, node, getAttributes, subfolders),
    parent,
    idx === -1 ? null : idx
  );
};

const fromList = (files, getAttributes = noop) => {
  return files.reduce(
    (tree, file) => buildSubtree(file, tree, getAttributes),
    root([])
  );
};

module.exports = fromList;
