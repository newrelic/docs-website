const glob = require('glob');
const {
  writeMdx,
  replaceFrontmatter,
  addRedirect,
  getSlugFromPath,
  yamlToJson,
  getFrontmatter,
  mdxToVfile,
  jsonToYaml,
  getYamlFromFrontmatter,
} = require('./utils/edit-frontmatter');
const toMDX = require('./utils/migrate/to-mdx');

/**
 * Writes the mdx content to file
 * @param {String} filepath - The path to an mdx file
 * @returns {Object} filepath - The full filepath of the file
 */
const processFiles = async (filepath) => {
  const slug = getSlugFromPath(filepath);
  const fileTree = await mdxToVfile(filepath);
  const frontmatter = getFrontmatter(fileTree);
  const yamlContent = getYamlFromFrontmatter(frontmatter);
  const yamlJson = yamlToJson(yamlContent);
  const frontmatterJson = yamlJson[0];
  const { redirects } = frontmatterJson;

  if (!redirects) {
    frontmatterJson.redirects = [];
  }

  if (redirects.includes(slug)) {
    return { skipped: slug };
  }

  const editedFrontMatter = addRedirect(frontmatterJson, slug);
  const updatedYamlFrontmatter = jsonToYaml(editedFrontMatter);
  const updatedContents = replaceFrontmatter(updatedYamlFrontmatter, fileTree);
  const mdx = await toMDX(updatedContents);
  await writeMdx(mdx, filepath);
  return { added: slug };
};

const main = async () => {
  const directoryInput = process.argv.slice(2);
  let filePaths;
  if (directoryInput.length === 0) {
    // if user did not supply paths, default to all
    filePaths = glob.sync(`${__dirname}/../src/content/docs/**/*.mdx`);
  } else {
    filePaths = glob.sync(
      `${__dirname}/../src/content${directoryInput}**/*.mdx`
    );
  }
  const filesProcessed = await Promise.all(
    filePaths.map((filepath) => processFiles(filepath))
  );

  const addedRedirects = filesProcessed.filter((filepath) => filepath.added);
  const skippedRedirects = filesProcessed.filter(
    (filepath) => filepath.skipped
  );

  if (addedRedirects.length) {
    console.log('Added Redirects to the following paths:');
    addedRedirects.forEach((filepath) => console.log(` - ${filepath.added}`));
  }

  if (skippedRedirects.length) {
    console.log(
      'The following files either contain no redirects or already contain the slug:'
    );
    skippedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.skipped}`)
    );
  }
};

main();
