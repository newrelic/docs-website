const path = require('path');
const { root, directory, file: fileNode } = require('./unist-fs-builder');

const noop = () => {};

const buildSubtree = (
  file,
  parent,
  getAttributes,
  folders = file.dirname.split('/')
) => {
  if (folders.length === 0) {
    parent.children.push(
      fileNode(path.join(parent.path, file.basename), getAttributes(file))
    );

    return parent;
  }

  const [folder, ...subfolders] = folders;

  const node =
    parent.children.find((child) => child.basename === folder) ||
    directory(path.join(parent.path || '', folder));

  if (parent.children.indexOf(node) === -1) {
    parent.children.push(node);
  }

  buildSubtree(file, node, getAttributes, subfolders);

  return parent;
};

const fromList = (files, getAttributes = noop) => {
  return files.reduce(
    (tree, file) => buildSubtree(file, tree, getAttributes),
    root([])
  );
};

module.exports = fromList;
