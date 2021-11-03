const fs = require('fs');
const dirTree = require('directory-tree');
const yaml = require('js-yaml');

const WRITE_DIRECTORY = './src/docs-content-nav/';
const READ_DIRECTORY = './src/content/docs/';

/**
 * Strip the file extension from the path of the file
 * @param {string} path The path to strip the extension from.
 * @returns {string} The path without the file extension.
 */
const stripPath = (path) =>
  path.endsWith('.mdx') ? path.substring(0, path.lastIndexOf('.')) : path;

/**
 * Get the slug for the path
 * @param {String} path The path to get the slug for.
 * @returns {String} The slug for the path.
 */
const getSlug = (path) => {
  const strippedPath = stripPath(path);
  return strippedPath.match(/content(.*)/)[1];
};

/**
 * Convert filename with - to readable title
 * @param {String} name The filename to convert to a title.
 * @returns {String} The title.
 */
const convertToTitle = (name) => {
  const strippedPath = stripPath(name);
  return strippedPath
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Check the eldest parent to see if it contains pages, if not recursively edit them
 * @param {Object} parent The parent to check.
 * @returns {Object} The edited parent.
 */
const editEldest = ({ title, path, pages }) => {
  if (!pages) {
    return {
      title,
      path,
    };
  }
  return {
    title,
    path,
    pages: pages.map(editChildren),
  };
};

/**
 * Recursively edit the titles and paths in children
 * @param {Object} child The child to edit.
 * @returns {Object} The edited child.
 */
const editChildren = (child) => {
  const { name, path, children } = child;
  if (!children) {
    return {
      title: convertToTitle(name),
      path: getSlug(path),
    };
  }
  return {
    title: convertToTitle(name),
    path: getSlug(path),
    pages: children.map(editChildren),
  };
};

/**
 * Checks if a filepath is a directory
 * @param {String} filepath The filepath to check.
 * @returns {Boolean}  True if the filepath is a directory, false otherwise.
 */
const isDirectory = (filepath) => fs.statSync(filepath).isDirectory();

/**
 * Gets a list of the eldest parents in directory structure
 * @param {Object[]} tree The directory tree to get the eldest parents from.
 * @returns {Object[]} The list of eldest parents.
 */
const getMainDirectories = (tree) => {
  return tree.children.map((child) => {
    const { name, path: fullPath, children } = child;
    if (!isDirectory(fullPath)) {
      return {
        title: name,
        path: getSlug(fullPath),
      };
    }
    return {
      title: convertToTitle(name),
      path: getSlug(fullPath),
      pages: children,
    };
  });
};

/**
 * Process the results of the file writes
 * @param {Object} results The results of the file writes.
 */
const processResults = (results) => {
  const success = results.filter(({ success }) => success);
  const fail = results.filter(({ fail }) => fail);

  success.length > 0 &&
    console.log(
      `Successfully created ${success.length} Nav files in ${WRITE_DIRECTORY}`
    );
  fail.length > 0 &&
    console.warn(
      `Failed creating ${success.length} Nav files in ${WRITE_DIRECTORY}`
    );
};

const main = async () => {
  const tree = dirTree(READ_DIRECTORY, {
    exclude: /images/,
  });

  if (!tree) {
    console.error('No tree found, check the directory is correct');
    process.exit(1);
  }

  const mainDirectories = getMainDirectories(tree);

  const editedChildren = mainDirectories.map(editEldest);

  const yamlContent = editedChildren.map((child) => {
    return {
      yamlContent: yaml.dump(child, { lineWidth: -1 }),
      name: child.path.replace('/docs/', ''),
    };
  });

  const results = yamlContent.map(({ yamlContent, name }) => {
    try {
      fs.writeFileSync(`${WRITE_DIRECTORY}${name}.yml`, String(yamlContent));
      return { success: name };
    } catch (error) {
      console.error(error);
      return { fail: name };
    }
  });

  processResults(results);
};

main();
