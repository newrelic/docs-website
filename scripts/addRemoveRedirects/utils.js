/* eslint-disable no-console */
const { globSync } = require('glob10');
const { frontmatter, stringifyFrontmatter } = require('../utils/frontmatter');
const fs = require('fs');

/**
 * Adds slashes to beginning and end of directory if missing
 * @param {String} directory - The directory to add slashes to
 * @returns {String} The directory with slashes added if necessary
 */
const formatDirectory = (directory) => {
  if (!directory.startsWith('/')) {
    return `/${directory}`;
  } else if (!directory.endsWith('/')) {
    return directory.concat('/');
  }

  return directory;
};

/**
 * Gets slug from path, relative to contents folder
 * @param {String} filepath - The full filepath of the file
 * @returns {String} The slug of the filepath
 */
const getSlugFromPath = (filepath) => {
  const slug = filepath.match(/content(.*?).mdx/)[1];
  if (!slug) {
    console.error(
      `<!> Could not find slug from path: ${filepath}, please check filepath`
    );
    process.exit(1);
  }
  return slug;
};

/**
 * Reads a file and separates the content and frontmatter data
 * @param {String} path - The full filepath of the file
 * @returns {Object} Original path, slug from path, content, frontmatter data
 */
const separateData = (path) => {
  const file = fs.readFileSync(path, 'utf8');
  const slug = getSlugFromPath(path);
  const separateData = frontmatter(file);
  const { attributes: frontmatterData, body: content } = separateData;
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
  const data = stringifyFrontmatter(content, frontmatterData, {
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
  return {
    frontmatterData: {
      ...frontmatterData,
      redirects: [...frontmatterData.redirects, slug],
    },
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
  const subDir = directory.length ? directory : '/docs/';
  return globSync(`${__dirname}/../../${subDir}/**/*.mdx`);
};

module.exports = {
  getFilePaths,
  separateData,
  joinData,
  addRedirect,
  removeRedirect,
  formatDirectory,
};
