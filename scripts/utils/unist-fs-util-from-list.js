const path = require('path');
const { root, directory, file: fileNode } = require('./unist-fs-builder');

const noop = () => {};

const buildSubtree = (
  file,
  parent,
  getAttributes,
  [pathSegment, ...remainingSegments] = file.path.split('/')
) => {
  if (pathSegment === file.basename) {
    parent.children.push(
      fileNode(path.join(parent.path, file.basename), getAttributes(file))
    );

    return parent;
  }

  const node =
    parent.children.find((child) => child.basename === pathSegment) ||
    directory(path.join(parent.path || '', pathSegment));

  if (parent.children.indexOf(node) === -1) {
    parent.children.push(node);
  }

  buildSubtree(file, node, getAttributes, remainingSegments);

  return parent;
};

const fromList = (files, getAttributes = noop) => {
  return files.reduce(
    (tree, file) => buildSubtree(file, tree, getAttributes),
    root([])
  );
};

module.exports = fromList;
