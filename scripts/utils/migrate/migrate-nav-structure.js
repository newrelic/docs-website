const yaml = require('js-yaml');
const vfile = require('vfile');
const path = require('path');
const slugify = require('../slugify');
const { NAV_DIR, INSTRUCTIONS } = require('../constants');
const logger = require('../logger');
const instructions = require('./instruction-set');

const migrateNavStructure = (files) => {
  return instructions.reduce((files, instruction) => {
    switch (instruction.type) {
      case INSTRUCTIONS.MOVE:
        return move(files, instruction);
      case INSTRUCTIONS.REMOVE:
        return remove(files, instruction);
      case INSTRUCTIONS.RENAME:
        return rename(files, instruction);
      case INSTRUCTIONS.DUPLICATE:
        return duplicate(files, instruction);
      default:
        throw new Error(`Unknown instruction: ${instruction.type}`);
    }
  }, files);
};

const remove = (files, { path: pathSegments }) => {
  const sourceFile = findFile(files, pathSegments);

  if (!sourceFile) {
    return files;
  }

  const [title, ...subtopics] = pathSegments;
  const nav = load(sourceFile);
  const updatedNav =
    subtopics.length === 0
      ? { title, children: [] }
      : filterCategory(nav, subtopics, () =>
          sourceFile.message(
            `Nav path not found: ${pathSegments.join(' > ')}`,
            null,
            'migrate-nav-structure:remove'
          )
        );

  if (updatedNav.children.length === 0) {
    return files.filter((file) => file !== sourceFile);
  }

  write(sourceFile, updatedNav);

  return files;
};

const move = (files, { from, to }) => {
  const node = findNode(files, from, { operation: 'move' });

  if (!node) {
    return files;
  }

  if (isRoot(to)) {
    const destinationFile = vfile({
      path: path.join(NAV_DIR, `${slugify(to[0] || node.title)}.yml`),
    });

    write(destinationFile, node);

    files = [...files, destinationFile];
  } else {
    files = add(files, { node, path: to });
  }

  return remove(files, { path: from });
};

const rename = (files, { path: pathSegments, title }) => {
  const file = findFile(files, pathSegments);

  if (!file) {
    return files;
  }

  const updatedNav = updateNodeAtPath(
    load(file),
    pathSegments.slice(1),
    (node) => ({ ...node, title }),
    () =>
      file.message(
        `Nav path not found: ${pathSegments.join(' > ')}`,
        'migrate-nav-structure:rename'
      )
  );

  write(file, updatedNav);

  return files;
};

const duplicate = (files, { from, to }) => {
  const child = findNode(files, from, { operation: 'duplicate' });

  return child ? add(files, { node: child, path: to }) : files;
};

const add = (files, { node, path: pathSegments }) => {
  let destinationFile = findFile(
    files,
    isRoot(pathSegments) ? [node.title] : pathSegments
  );

  if (!destinationFile) {
    const title = pathSegments[0] || node.title;

    destinationFile = vfile({
      path: path.join(NAV_DIR, `${slugify(title)}.yml`),
    });

    write(destinationFile, { title, children: [] });

    files = [...files, destinationFile];
  }

  const updatedNav = addChild(
    node,
    load(destinationFile),
    pathSegments.slice(1)
  );

  write(destinationFile, updatedNav);

  return files;
};

const findFile = (files, pathSegments) => {
  const fileName = `${slugify(pathSegments[0])}.yml`;
  const file = files.find((file) => file.basename === fileName);

  if (!file) {
    logger.warn(`File not found: ${path.join(NAV_DIR, fileName)}`);

    return null;
  }

  return file;
};

const findNode = (files, pathSegments, { operation } = {}) => {
  const file = findFile(files, pathSegments);

  if (!file) {
    return null;
  }

  const subtopics = pathSegments.slice(1);
  const nav = load(file);
  const child = subtopics.length === 0 ? nav : findCategory(nav, subtopics);

  if (!child) {
    file.message(
      `Nav path not found: ${pathSegments.join(' > ')}`,
      null,
      operation ? `migrate-nav-structure:${operation}` : 'migrate-nav-structure'
    );

    return null;
  }

  return child;
};

const isRoot = (path) => path.length === 0;

const update = (items, idx, updater) => [
  ...items.slice(0, idx),
  updater(items[idx]),
  ...items.slice(idx + 1),
];

const updateChild = (parent, idx, updater) => ({
  ...parent,
  children: update(parent.children || [], idx, updater),
});

const updateNodeAtPath = (parent, [title, ...path], updater, missing) => {
  const { children = [] } = parent;
  const idx = children.findIndex((child) => child.title === title);

  if (idx === -1) {
    missing();

    return parent;
  }

  if (path.length === 0) {
    return updateChild(parent, idx, updater);
  }

  return updateChild(parent, idx, (child) =>
    updateNodeAtPath(child, path, updater, missing)
  );
};

const addChild = (node, parent, topics) => {
  const [title, ...subtopics] = topics;
  const { children = [] } = parent;
  const idx = children.findIndex((node) => node.title === title);

  if (topics.length === 0) {
    return {
      ...parent,
      children: [...children, node],
    };
  }

  if (idx === -1) {
    return {
      ...parent,
      children: [
        ...children,
        addChild(node, { title, children: [] }, subtopics),
      ],
    };
  }

  return updateChild(parent, idx, (child) => addChild(node, child, subtopics));
};

const filterCategory = (nav, topics, missing) => {
  const [title, ...subtopics] = topics;
  const idx = nav.children.findIndex((child) => child.title === title);

  if (idx === -1) {
    missing();
    return nav;
  }

  if (subtopics.length === 0) {
    return {
      ...nav,
      children: nav.children.filter((child) => child.title !== title),
    };
  }

  const child = filterCategory(nav.children[idx], subtopics, missing);

  if (child.children.length === 0 && !child.path) {
    return {
      ...nav,
      children: [...nav.children.slice(0, idx), ...nav.children.slice(idx + 1)],
    };
  }

  return {
    ...nav,
    children: [
      ...nav.children.slice(0, idx),
      filterCategory(nav.children[idx], subtopics, missing),
      ...nav.children.slice(idx + 1),
    ],
  };
};

const findCategory = (nav, path) => {
  if (path.length === 0) {
    return nav;
  }

  const [title, ...subtopics] = path;
  const { children = [] } = nav;
  const child = children.find((child) => child.title === title);

  return child ? findCategory(child, subtopics) : null;
};

const load = (file) => yaml.safeLoad(file.contents);

const write = (file, contents) => {
  // set high line width to avoid wrapping
  file.contents = yaml.safeDump(contents, { lineWidth: 9999 });
};

module.exports = migrateNavStructure;
