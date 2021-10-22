const glob = require('glob');
const {
  writeMdx,
  replaceFrontmatter,
  removeRedirect,
  getSlugFromPath,
  yamlToJson,
  getFrontmatter,
  mdxToVfile,
  jsonToYaml,
  getYamlFromFrontmatter,
} = require('./utils/edit-frontmatter');
const toMDX = require('./utils/migrate/to-mdx');

const processFiles = async (filepath) => {
  const slug = getSlugFromPath(filepath);
  const fileTree = await mdxToVfile(filepath);
  const frontmatter = getFrontmatter(fileTree);
  const yamlContent = getYamlFromFrontmatter(frontmatter);
  const yamlJson = yamlToJson(yamlContent);
  const frontmatterJson = yamlJson[0];
  const { redirects } = frontmatterJson;

  if (!redirects || !redirects.includes(slug)) {
    return { skipped: slug };
  }

  const editedFrontMatter = removeRedirect(frontmatterJson, slug);
  const updatedYamlFrontmatter = jsonToYaml(editedFrontMatter);
  const updatedContents = replaceFrontmatter(updatedYamlFrontmatter, fileTree);
  const mdx = await toMDX(updatedContents);
  await writeMdx(mdx, filepath);
  return { removed: slug };
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

  if (!filePaths.length) {
    console.log(`No mdx files found in directory or sub-directories`);
    return;
  }
  const filesProcessed = await Promise.all(
    filePaths.map((filepath) => processFiles(filepath))
  );

  const removedRedirects = filesProcessed.filter(
    (filepath) => filepath.removed
  );
  const skippedRedirects = filesProcessed.filter(
    (filepath) => filepath.skipped
  );

  if (removedRedirects.length) {
    console.log('Removed Redirects from the following paths:');
    removedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.removed}`)
    );
  }

  if (skippedRedirects.length) {
    console.log('The following files do not contain the slug in redirects:');
    skippedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.skipped}`)
    );
  }
};

main();
