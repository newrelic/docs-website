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

const remove = (files, { path }) => {
  const sourceFile = findFile(files, path);

  if (!sourceFile) {
    return files;
  }

  const [title, ...subtopics] = path;
  const nav = yaml.safeLoad(sourceFile.contents);
  const updatedNav =
    subtopics.length === 0
      ? { title, children: [] }
      : filterCategory(nav, subtopics, () =>
          sourceFile.message(
            `Nav path not found: ${path.join(' > ')}`,
            null,
            'migrate-nav-structure:remove'
          )
        );

  if (updatedNav.children.length === 0) {
    return files.filter((file) => file !== sourceFile);
  }

  sourceFile.contents = yaml.safeDump(updatedNav, { lineWidth: 9999 });

  return files;
};

const move = (files, { from, to }) => {
  const child = findNode(files, from);

  if (!child) {
    return files;
  }

  if (isRoot(to)) {
    const destinationFileName = `${slugify(to[0] || child.title)}.yml`;
    const destinationFile = vfile({
      path: path.join(NAV_DIR, destinationFileName),
      contents: yaml.safeDump(child, { lineWidth: 99999 }),
    });

    return remove([...files, destinationFile], { path: from });
  }

  const updatedFiles = add(files, { node: child, path: to });

  return remove(updatedFiles, { path: from });
};

const rename = (files, { path, title }) => {
  const sourceFile = findFile(files, path);

  if (!sourceFile) {
    return files;
  }

  if (!title) {
    sourceFile.message(
      'Title not given in instruction',
      null,
      'migrate-nav-structure:rename'
    );
    return files;
  }

  const nav = yaml.safeLoad(sourceFile.contents);
  const updatedNav = updateRecursive(
    nav,
    path.slice(1),
    (node) => ({ ...node, title }),
    () =>
      sourceFile.message(
        `Nav path not found: ${path.join(' > ')}`,
        null,
        'migrate-nav-structure:rename'
      )
  );

  sourceFile.contents = yaml.safeDump(updatedNav, { lineWidth: 9999 });

  return files;
};

const duplicate = (files, { from, to }) => {
  const child = findNode(files, from);

  return child ? add(files, { node: child, path: to }) : files;
};

const add = (files, { node, path: pathName }) => {
  let destinationFile = findFile(
    files,
    isRoot(pathName) ? [node.title] : pathName
  );

  if (!destinationFile) {
    const title = pathName[0] || node.title;

    destinationFile = vfile({
      path: path.join(NAV_DIR, `${slugify(title)}.yml`),
      contents: yaml.safeDump({ title, children: [] }, { lineWidth: 9999 }),
    });

    files = [...files, destinationFile];
  }

  const updatedNav = addChild(
    node,
    yaml.safeLoad(destinationFile.contents),
    pathName.slice(1)
  );

  destinationFile.contents = yaml.safeDump(updatedNav, { lineWidth: 9999 });

  return files;
};

const findFile = (files, path) => {
  const fileName = `${slugify(path[0])}.yml`;
  const file = files.find((file) => file.basename === fileName);

  if (!file) {
    logger.warn(`File not found: ${path.join(NAV_DIR, fileName)}`);

    return null;
  }

  return file;
};

const findNode = (files, path) => {
  const file = findFile(files, path);

  if (!file) {
    return null;
  }

  const subtopics = path.slice(1);
  const nav = yaml.safeLoad(file.contents);
  const child = subtopics.length === 0 ? nav : findCategory(nav, subtopics);

  if (!child) {
    file.message(
      `Nav path not found: ${path.join(' > ')}`,
      null,
      'migrate-nav-structure:move'
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

const updateRecursive = (parent, topics, updater, notFound) => {
  const [title, ...subtopics] = topics;
  const { children = [] } = parent;
  const idx = children.findIndex((child) => child.title === title);

  if (idx === -1) {
    notFound();

    return parent;
  }

  if (subtopics.length === 0) {
    return updateChild(parent, idx, updater);
  }

  return updateChild(parent, idx, (child) =>
    updateRecursive(child, subtopics, updater, notFound)
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

const findCategory = (nav, topics) => {
  if (topics.length === 0) {
    return nav;
  }

  const [title, ...subtopics] = topics;
  const { children = [] } = nav;
  const child = children.find((child) => child.title === title);

  return child ? findCategory(child, subtopics) : null;
};

module.exports = migrateNavStructure;
