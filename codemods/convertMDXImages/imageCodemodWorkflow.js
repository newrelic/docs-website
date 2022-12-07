/* eslint-disable no-console */
const glob = require('glob');
const path = require('path');
const { runConvertImages } = require('./convertImages');
const {
  getAbsolutePaths,
  moveFiles,
  removeDirectories,
} = require('./commands');

const main = async () => {
  // step 1: Grab all the paths that lead to an image
  const pathName = glob.sync(
    path.join(__dirname, '../../src/content/docs/**/images/')
  );

  const i18nPathName = glob.sync(
    path.join(__dirname, '../../src/i18n/content/**/images/')
  );

  console.info('Fetching image paths from src/content');
  const nativeFilePaths = await getAbsolutePaths(pathName);

  console.info('Fetching image paths from src/i18n/content');
  const i18nFilePaths = await getAbsolutePaths(i18nPathName);

  // join the two arrays together
  const allFilePaths = [...nativeFilePaths.flat(), ...i18nFilePaths.flat()];

  // step 2: Move all those files from their relative path to absolute path
  console.info('Moving all files to src/images');
  const imagePath = path.join(__dirname, '../../src/images/');
  const mvResults = await moveFiles(imagePath, allFilePaths);
  console.info(
    `Number of failed image moves: ${mvResults.filter(Boolean).length}`
  );

  // step 3: Remove any directories `**/images/` that are empty
  console.info('Removing all empty images/ directory.');
  const rmResults = await removeDirectories(allFilePaths);
  console.info(
    `Number of failed directory moves: ${rmResults.filter(Boolean).length}`
  );

  // step 4: Run markdown image URL converter
  console.info('Running image codemod on .mdx files');
  const codemodResults = await runConvertImages();
  console.info(
    `Failed file count for .mdx files: ${codemodResults.filter(Boolean).length}`
  );
};

if (require.main === module) {
  main();
}
