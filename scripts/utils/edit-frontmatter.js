const { readSync } = require('to-vfile');
const remarkFrontmatter = require('remark-frontmatter');
const remarkParse = require('remark-parse');
const remarkStringify = require('remark-stringify');
const unified = require('unified');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

/**
 * Adds a redirect to frontmatter
 * @param {Object} frontmatter - Frontmatter of the mdx file
 * @param {String} slug - the slug of the filepath
 * @returns {Object} The frontmatter with added redirect
 */
const addRedirect = (frontmatter, slug) => ({
  ...frontmatter,
  redirects: [...frontmatter.redirects, slug],
});

/**
 * Removes a redirect from frontmatter
 * @param {Object} frontmatter - Frontmatter of the mdx file
 * @param {String} slug - the slug of the filepath
 * @returns {Object} The frontmatter with redirect removed
 */
const removeRedirect = (frontmatter, slug) => ({
  ...frontmatter,
  redirects: frontmatter.redirects.filter((path) => path !== slug),
});

/**
 * Gets slug from path, relative to contents folder
 * @param {String} filepath - The full filepath of the file
 * @returns {String} The slug of the filepath
 */
const getSlugFromPath = (filepath) => {
  return filepath.match(/content(.*?).mdx/)[1];
};

/**
 * Replaces the frontmatter in a vFile tree
 * @param {Object} frontmatter - Frontmatter of the mdx file
 * @param {Object} fileTree - full vFile tree contents of the file
 * @returns {Object} The updated vFile tree contents
 */
const replaceFrontmatter = (frontmatter, fileTree) => {
  const frontmatterIndex = fileTree.children.findIndex(
    (child) => child.type === 'yaml'
  );
  fileTree.children[frontmatterIndex].value = frontmatter.trim();
  return fileTree;
};

/**
 * Convert mdx file to vFile tree object including frontmatter for manipulation
 * @param {String} filepath - The full filepath of the file
 * @returns {Object} vFile tree object with file contents and frontmatter
 */
const mdxToVfile = async (filepath) => {
  const path = filepath;
  const file = readSync(path);

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, { type: 'yaml', marker: '-' });

  const vFile = processor.runSync(processor.parse(file));

  return vFile;
};

/**
 * Gets the yaml value of the frontmatter object
 * @param {Object} frontmatter - Frontmatter of the mdx file
 * @returns {String} The yaml value of the frontmatter
 */
const getYamlFromFrontmatter = (frontmatter) => {
  return frontmatter[0].value;
};

/**
 * Gets the frontmatter object from the vFile tree contents
 * @param {Object} fileTree - the vFile tree contents
 * @returns {Object} The full frontmatter object
 */
const getFrontmatter = (fileTree) => {
  const frontmatterContent = fileTree.children?.filter(
    (child) => child.type === 'yaml'
  );

  return frontmatterContent;
};

/**
 * Converts a yaml string to JSON for manipulation
 * @param {String} content - The yaml content
 * @returns {Object} The yaml converted to JSON
 */
const yamlToJson = (content) => {
  const yamlJson = yaml.loadAll(content);
  return yamlJson;
};

/**
 * Converts a JSON object to yaml
 * @param {Object} content - The JSON content
 * @returns {String} A yaml string
 */
const jsonToYaml = (content) => {
  return yaml.dump(content, { lineWidth: 100 });
};

/**
 * Writes the mdx content to file
 * @param {Object} fileTree - The JSON content
 * @param {String} filepath - The full filepath of the file
 */
const writeMdx = async (fileTree, filepath) => {
  try {
    fs.writeFileSync(path.resolve(filepath), fileTree || '');
  } catch (err) {
    console.error(`Unable to write page ${filepath}: ${err}`);
  }
};

module.exports = {
  writeMdx,
  replaceFrontmatter,
  addRedirect,
  removeRedirect,
  getSlugFromPath,
  yamlToJson,
  getFrontmatter,
  mdxToVfile,
  jsonToYaml,
  getYamlFromFrontmatter,
};
