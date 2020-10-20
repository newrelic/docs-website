const yaml = require('js-yaml');
const vfile = require('vfile');
const path = require('path');
const slugify = require('../slugify');
const { NAV_DIR } = require('../constants');
const logger = require('../logger');

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
  {
    type: TYPES.MOVE,
    from: ['APIs', 'Get started', 'Intro to APIs'],
    to: ['Telemetry Data Platform', 'APIs'],
  },
  {
    type: TYPES.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Get started'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: TYPES.MOVE,
    from: [
      'Telemetry Data Platform',
      'Ingest and manage data',
      'Understand data',
    ],
    to: ['Telemetry Data Platform'],
  },
  {
    type: TYPES.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Manage data'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: TYPES.MOVE,
    from: ['Telemetry Data Platform', 'Ingest and manage data', 'Ingest APIs'],
    to: ['Telemetry Data Platform'],
  },
  {
    type: TYPES.MOVE,
    from: ['Logs'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.RENAME,
    path: [
      'Full-Stack Observability',
      'Logs',
      'Enable log management in New Relic',
    ],
    title: 'Logs in context',
  },
  {
    type: TYPES.MOVE,
    from: ['APM'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.MOVE,
    from: ['Browser'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.RENAME,
    path: ['Full-Stack Observability', 'Browser'],
    title: 'Browser monitoring',
  },
  {
    type: TYPES.MOVE,
    from: ['Understand dependencies'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.MOVE,
    from: ['Infrastructure'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.RENAME,
    path: ['Full-Stack Observability', 'Infrastructure'],
    title: 'Infrastructure monitoring',
  },
  {
    type: TYPES.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure alerts',
      'Infrastucture alert conditions',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: TYPES.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure alerts',
    ],
  },
  {
    type: TYPES.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastructure monitoring UI',
      'Infrastucture UI',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: TYPES.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Infrastucture monitoring UI',
    ],
  },
  {
    type: TYPES.MOVE,
    from: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Integrations',
      'Types of integrations',
    ],
    to: ['Full-Stack Observability', 'Infrastructure monitoring'],
  },
  {
    type: TYPES.REMOVE,
    path: [
      'Full-Stack Observability',
      'Infrastructure monitoring',
      'Integrations',
    ],
  },
  {
    type: TYPES.MOVE,
    from: ['Mobile Monitoring'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.MOVE,
    from: ['Serverless function monitoring'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.MOVE,
    from: ['Synthetics'],
    to: ['Full-Stack Observability'],
  },
  {
    type: TYPES.RENAME,
    path: ['Full-Stack Observability', 'Synthetics'],
    title: 'Synthetic monitoring',
  },
];

const migrateNavStructure = (files) => {
  return instructions.reduce((files, instruction) => {
    switch (instruction.type) {
      case TYPES.MOVE:
        return move(files, instruction);
      case TYPES.REMOVE:
        return remove(files, instruction);
      case TYPES.RENAME:
        return rename(files, instruction);
      default:
        throw new Error(`Unknown instruction: ${instruction.type}`);
    }
  }, files);
};

const rename = (files, { path, title }) => {
  const sourceFileName = `${slugify(path[0])}.yml`;
  const sourceFile = files.find((file) => file.basename === sourceFileName);

  if (!sourceFile) {
    logger.warn(`File not found: ${path.join(NAV_DIR, sourceFileName)}`);

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

const move = (files, { from, to }) => {
  const sourceFileName = `${slugify(from[0])}.yml`;
  const subtopics = from.slice(1);

  const sourceFile = files.find((file) => file.basename === sourceFileName);

  if (!sourceFile) {
    logger.warn(`File not found: ${path.join(NAV_DIR, sourceFileName)}`);

    return files;
  }

  const nav = yaml.safeLoad(sourceFile.contents);
  const child = subtopics.length === 0 ? nav : findCategory(nav, subtopics);

  if (!child) {
    sourceFile.message(
      `Nav path not found: ${from.join(' > ')}`,
      null,
      'migrate-nav-structure:move'
    );

    return files;
  }

  const destinationFileName = `${slugify(to[0] || child.title)}.yml`;
  let destinationFile = files.find(
    (file) => file.basename === destinationFileName
  );

  if (to.length === 0) {
    destinationFile = vfile({
      path: path.join(NAV_DIR, destinationFileName),
      contents: yaml.safeDump(child, { lineWidth: 99999 }),
    });

    files = [...files, destinationFile];

    return remove(files, { path: from });
  }

  if (!destinationFile) {
    destinationFile = vfile({
      path: path.join(NAV_DIR, destinationFileName),
      contents: yaml.safeDump(
        { title: to[0], children: [] },
        { lineWidth: 9999 }
      ),
    });

    files = [...files, destinationFile];
  }

  const updatedNav = addChild(
    child,
    yaml.safeLoad(destinationFile.contents),
    to.slice(1)
  );

  destinationFile.contents = yaml.safeDump(updatedNav, { lineWidth: 9999 });

  return remove(files, { path: from });
};

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

const remove = (files, { path }) => {
  const [title, ...subtopics] = path;
  const sourceFileName = `${slugify(title)}.yml`;
  const sourceFile = files.find((file) => file.basename === sourceFileName);

  if (!sourceFile) {
    logger.warn(`File not found: ${path.join(NAV_DIR, sourceFileName)}`);

    return files;
  }

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
