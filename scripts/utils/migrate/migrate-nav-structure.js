const yaml = require('js-yaml');
const vfile = require('vfile');
const path = require('path');
const slugify = require('../slugify');
const { NAV_DIR } = require('../constants');

const TYPES = {
  MOVE: 'MOVE',
  RENAME: 'RENAME',
  REMOVE: 'REMOVE',
  DUPLICATE: 'DUPLICATE',
};

const instructions = [
  {
    type: TYPES.MOVE,
    from: ['Security', 'New Relic security'],
    to: [],
  },
];

const migrateNavStructure = (files) => {
  return instructions.reduce((files, instruction) => {
    switch (instruction.type) {
      case TYPES.MOVE:
        return move(files, instruction);
      default:
        throw new Error(`Unknown instruction: ${instruction.type}`);
    }
  }, files);
};

const move = (files, { from, to }) => {
  const sourceFileName = `${slugify(from[0])}.yml`;
  const subtopics = from.slice(1);

  const sourceFile = files.find((file) => file.basename === sourceFileName);

  const nav = yaml.safeLoad(sourceFile.contents);
  const child = findCategory(nav, subtopics);

  const destinationFileName = `${slugify(to[0] || child.title)}.yml`;

  if (to.length === 0) {
    const destinationFile = vfile({
      path: path.join(NAV_DIR, destinationFileName),
      contents: yaml.safeDump(child, { lineWidth: 99999 }),
    });

    files = [...files, destinationFile];
  }

  return remove(files, { path: from });
};

const remove = (files, { path }) => {
  const [title, ...subtopics] = path;
  const sourceFileName = `${slugify(title)}.yml`;
  const sourceFile = files.find((file) => file.basename === sourceFileName);
  const nav = yaml.safeLoad(sourceFile.contents);
  const updatedNav = filterCategory(nav, subtopics);

  if (updatedNav.children.length === 0) {
    return files.filter((file) => file === sourceFile);
  }

  sourceFile.contents = yaml.safeDump(updatedNav, { lineWidth: 9999 });

  return files;
};

const filterCategory = (nav, topics) => {
  const [title, ...subtopics] = topics;

  if (subtopics.length === 0) {
    return {
      ...nav,
      children: nav.children.filter((child) => child.title !== title),
    };
  }

  const child = nav.children.find((child) => child.title === title);

  return filterCategory(child, subtopics);
};

const findCategory = (nav, topics) => {
  if (topics.length === 0) {
    return nav;
  }

  const [title, ...subtopics] = topics;
  const child = nav.children.find((child) => child.title === title);

  return findCategory(child, subtopics);
};

module.exports = migrateNavStructure;
