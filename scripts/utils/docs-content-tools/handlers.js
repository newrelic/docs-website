const glob = require('glob');
const frontmatterGH = require('@github-docs/frontmatter');
const fs = require('fs');

/**
 * Adds slashes to beginning and end of directory if missing
 * @param {String} directory - The directory to add slashes to
 * @returns {String} The directory with slashes added if necessary
 */
const formatDirectory = (directory) => {
  !directory.startsWith('/') && (directory = `/${directory}`);
  !directory.endsWith('/') && (directory = directory.concat('/'));
  return directory;
};

/**
 * Gets slug from path, relative to contents folder
 * @param {String} filepath - The full filepath of the file
 * @returns {String} The slug of the filepath
 */
const getSlugFromPath = (filepath) => {
  return filepath.match(/content(.*?).mdx/)[1];
};

/**
 * Reads a file and separates the content and frontmatter data
 * @param {String} path - The full filepath of the file
 * @returns {Object} Original path, slug from path, content, frontmatter data
 */
const separateData = async (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const slug = getSlugFromPath(path);
  const separateData = await frontmatterGH(file);
  const { data: frontmatterData, content } = separateData;
  if (!frontmatterData.redirects) {
    frontmatterData.redirects = [];
  }
  return { path, content, frontmatterData, slug };
};

/**
 * Joins the content and frontmatter data
 * @param {Object} data - content, frontmatterData, path
 * @returns {Object} Combined data and path
 */
const joinData = ({ content, frontmatterData, path }) => {
  const data = frontmatterGH.stringify(content, frontmatterData, {
    lineWidth: -1,
  });

  return { path, data };
};

/**
 * Adds a redirect if the slug is not already in the redirects array
 * @param {Object} data - slug, frontmatterData, rest
 * @returns {Object} Edited frontmatterData, whether the redirect was added or skipped
 */
const addRedirect = ({ frontmatterData, slug, ...rest }) => {
  if (frontmatterData.redirects.includes(slug)) {
    return { frontmatterData, ...rest, skipped: slug };
  }
  frontmatterData.redirects.push(slug);
  return {
    frontmatterData,
    ...rest,
    added: slug,
  };
};

/**
 * Removes a redirect if the slug is in the redirects array
 * @param {Object} data - slug, frontmatterData, rest
 * @returns {Object} Edited frontmatterData, whether the redirect was removed or skipped
 */
const removeRedirect = ({ frontmatterData, slug, ...rest }) => {
  if (frontmatterData.redirects.includes(slug)) {
    frontmatterData.redirects = frontmatterData.redirects.filter(
      (path) => path !== slug
    );
    if (frontmatterData.redirects.length === 0) {
      delete frontmatterData.redirects;
    }
    return {
      frontmatterData,
      ...rest,
      removed: slug,
    };
  }
  return { frontmatterData, ...rest, skipped: slug };
};

/**
 * Globs an array of all mdx files in a directory + sub-directories
 * @param {String} directory - The parent directory to search
 * @returns {String[]} All mdx files in the directory and sub-directories
 */
const getFilePaths = (directory) => {
  if (directory.length === 0) {
    // if user did not supply paths, default to all
    return glob.sync(`${__dirname}/../../../src/content/docs/**/*.mdx`);
  } else {
    return glob.sync(`${__dirname}/../../../src/content${directory}**/*.mdx`);
  }
};

/**
 * Retrieves the user inputs from command line
 * @returns {Object} The directory and action specified by the user
 */
const getUserInputs = () => {
  const userInputs = process.argv.slice(2);
  const actionIndex = userInputs.findIndex(
    (arg) => arg === '--add' || arg === '--remove'
  );
  if (actionIndex === -1) {
    console.warn(
      '<!> No action specified, please append `--add` or `--remove` to the command'
    );
    process.exit(0);
  }
  const action = userInputs[actionIndex].replace('--', '');
  userInputs.splice(actionIndex, 1);
  if (!userInputs[0]) {
    console.warn(
      '<!> No directory specified, please include the directory you want to apply changes to'
    );
    process.exit(0);
  }
  const directoryInput = formatDirectory(userInputs[0]);

  return { action, directoryInput };
};

module.exports = {
  getFilePaths,
  getUserInputs,
  separateData,
  joinData,
  addRedirect,
  removeRedirect,
};
