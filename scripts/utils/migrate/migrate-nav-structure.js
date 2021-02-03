const yaml = require('js-yaml');
const vfile = require('vfile');
const path = require('path');
const slugify = require('../slugify');
const { NAV_DIR, INSTRUCTIONS } = require('../constants');
const logger = require('../logger');
const instructions = require('./instruction-set');
const { omit } = require('lodash');

const hasOwnProperty = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

const migrateNavStructure = (files) => {
  return instructions.reduce((files, instruction) => {
    switch (instruction.type) {
      case INSTRUCTIONS.ADD:
        return add(files, instruction);
      case INSTRUCTIONS.UPDATE:
        return update(files, instruction);
      case INSTRUCTIONS.MOVE:
        return move(files, instruction);
      case INSTRUCTIONS.REMOVE:
        return remove(files, instruction);
      case INSTRUCTIONS.RENAME:
        return rename(files, instruction);
      case INSTRUCTIONS.DUPLICATE:
        return duplicate(files, instruction);
      case INSTRUCTIONS.REORDER:
        return reorder(files, instruction);
      default:
        throw new Error(`Unknown instruction: ${instruction.type}`);
    }
  }, files);
};

const reorder = (files, { path: pathSegments, index }) => {
  const file = findFile(files, pathSegments);

  if (!file) {
    return files;
  }

  const nav = load(file);
  const title = last(pathSegments);
  const [, ...remainingSegments] = pathSegments.slice(0, -1);

  const reorderChild = (parent) => {
    const child = parent.pages.find((child) => child.title === title);
    if (!child) {
      return parent;
    }
    const pages = parent.pages.filter((node) => node !== child);

    return {
      ...parent,
      pages: [...pages.slice(0, index), child, ...pages.slice(index)],
    };
  };

  const updatedNav =
    remainingSegments.length === 0
      ? reorderChild(nav)
      : updateNodeAtPath(nav, pathSegments.slice(1, -1), reorderChild, () =>
          file.message(
            `Nav path not found: ${pathSegments.join(' > ')}`,
            'migrate-nav-structure:reorder'
          )
        );

  write(file, updatedNav);

  return files;
};

const update = (files, { path: pathSegments, node, replace = false }) => {
  const file = findFile(files, pathSegments);

  if (!file) {
    return files;
  }

  const updateChild = (child) =>
    // keep a consistent key order
    replace
      ? node
      : Object.fromEntries(
          Object.entries({
            title: node.title || child.title,
            path: node.path || child.path,
            icon: node.icon || child.icon,
            rootNav: hasOwnProperty(node, 'rootNav')
              ? node.rootNav
              : child.rootNav,
            pages: node.pages || child.pages,
          }).filter(([, value]) => value !== undefined)
        );

  const nav = load(file);

  const updatedNav =
    pathSegments.length === 1
      ? updateChild(nav)
      : updateNodeAtPath(nav, pathSegments.slice(1), updateChild, () =>
          file.message(
            `Nav path not found: ${pathSegments.join(' > ')}`,
            'migrate-nav-structure:update'
          )
        );

  write(file, updatedNav);

  return files;
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
      ? { title, pages: [] }
      : filterCategory(nav, subtopics, () =>
          sourceFile.message(
            `Nav path not found: ${pathSegments.join(' > ')}`,
            null,
            'migrate-nav-structure:remove'
          )
        );

  if (shouldRemoveNode(updatedNav)) {
    return files.filter((file) => file !== sourceFile);
  }

  write(sourceFile, updatedNav);

  return files;
};

const move = (files, { from, to }) => {
  const isWildcard = last(from) === '*';
  const node = findNode(files, isWildcard ? from.slice(0, -1) : from, {
    operation: 'move',
  });

  if (!node) {
    return files;
  }

  if (isRoot(to)) {
    const destinationFile = vfile({
      path: path.join(NAV_DIR, `${slugify(to[0] || node.title)}.yml`),
    });

    write(destinationFile, { path: `/docs/${slugify(node.title)}`, ...node });

    files = [...files, destinationFile];
  } else if (isWildcard) {
    return (node.pages || []).reduce(
      (files, node) =>
        remove(add(files, { node, path: to }), {
          path: from.slice(0, -1).concat(node.title),
        }),
      files
    );
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

  const [, ...remainingSegments] = pathSegments;
  const nav = load(file);

  if (remainingSegments.length === 0) {
    file.stem = slugify(title);

    write(file, { ...nav, title });

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

const add = (files, { node, path: pathSegments, index }) => {
  let destinationFile = findFile(
    files,
    isRoot(pathSegments) ? [node.title] : pathSegments
  );

  if (!destinationFile) {
    const title = pathSegments[0] || node.title;

    destinationFile = vfile({
      path: path.join(NAV_DIR, `${slugify(title)}.yml`),
    });

    write(destinationFile, {
      title,
      path: `/docs/${slugify(title)}`,
      pages: [],
    });

    files = [...files, destinationFile];
  }

  const updatedNav = addChild(
    node,
    load(destinationFile),
    pathSegments.slice(1),
    index
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

const updateList = (items, idx, updater) => [
  ...items.slice(0, idx),
  updater(items[idx]),
  ...items.slice(idx + 1),
];

const updateChild = (parent, idx, updater) => ({
  ...parent,
  pages: updateList(parent.pages || [], idx, updater),
});

const updateNodeAtPath = (
  parent,
  [title, ...pathSegments],
  updater,
  missing
) => {
  const { pages = [] } = parent;
  const idx = pages.findIndex((child) => child.title === title);

  if (idx === -1) {
    missing();

    return parent;
  }

  if (pathSegments.length === 0) {
    return updateChild(parent, idx, updater);
  }

  return updateChild(parent, idx, (child) =>
    updateNodeAtPath(child, pathSegments, updater, missing)
  );
};

const addChild = (node, parent, pathSegments, index) => {
  const [title, ...remainingSegments] = pathSegments;
  const { pages = [] } = parent;
  const idx = pages.findIndex((node) => node.title === title);

  if (pathSegments.length === 0) {
    return {
      ...parent,
      pages:
        index == null
          ? [...pages, node]
          : [...pages.slice(0, idx), node, ...pages.slice(idx)],
    };
  }

  if (idx === -1) {
    return {
      ...parent,
      pages: [
        ...pages,
        addChild(node, { title, pages: [] }, remainingSegments, index),
      ],
    };
  }

  return updateChild(parent, idx, (child) =>
    addChild(node, child, remainingSegments, index)
  );
};

const filterCategory = (nav, pathSegments, missing) => {
  const [title, ...remainingSegments] = pathSegments;
  const idx = nav.pages.findIndex((child) => child.title === title);

  if (idx === -1) {
    missing();
    return nav;
  }

  if (remainingSegments.length === 0) {
    const pages = nav.pages.filter((child) => child.title !== title);

    return pages.length === 0 ? omit(nav, ['pages']) : { ...nav, pages };
  }

  const child = filterCategory(nav.pages[idx], remainingSegments, missing);

  if (shouldRemoveNode(child)) {
    const pages = [...nav.pages.slice(0, idx), ...nav.pages.slice(idx + 1)];

    return pages.length === 0 ? omit(nav, ['pages']) : { ...nav, pages };
  }

  return updateChild(nav, idx, (node) =>
    filterCategory(node, remainingSegments, missing)
  );
};

const findCategory = (nav, pathSegments) => {
  if (pathSegments.length === 0) {
    return nav;
  }

  const [title, ...remainingSegments] = pathSegments;
  const { pages = [] } = nav;
  const child = pages.find((child) => child.title === title);

  return child ? findCategory(child, remainingSegments) : null;
};

const last = (items) => items[items.length - 1];

const load = (file) => yaml.safeLoad(file.contents);

const write = (file, contents) => {
  // set high line width to avoid wrapping
  file.contents = yaml.safeDump(contents, { lineWidth: 9999 });
};

const shouldRemoveNode = (node) =>
  !node.path && (!node.pages || node.pages.length === 0);

module.exports = migrateNavStructure;
