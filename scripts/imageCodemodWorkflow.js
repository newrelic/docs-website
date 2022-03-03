/* eslint-disable no-console */
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const { runConvertImages } = require('./convertImages');

const getAbsolutePaths = (paths) => {
  const fileExtension = /\.(png|jpg|jpeg|svg|gif)/i;

  // we want to return the promises
  const promises = paths.map(async (path) => {
    // read all filenames in the path
    const readDirResults = await fs.promises.readdir(path);

    // filter out any files that do not have an image file extension
    const images = readDirResults.filter((fileName) =>
      fileExtension.test(fileName)
    );

    if (images.length > 0) {
      images.forEach((imageFileName, index) => {
        /* Add the filename to the path using a key-value pairing.
         * The key is the filename with '%' replaced with an underscore.
         */
        images[index] = `${imageFileName.replaceAll('%', '_')}|${path.concat(
          imageFileName
        )}`;
      });
      return images.filter(Boolean);
    }
  });

  return Promise.all(promises.flat().filter(Boolean));
};

/**
 *
 * @param {String} newPath
 * @param {Array<String>} filePaths
 */
const moveFiles = async (newPath, filePaths) => {
  const results = filePaths.map(async (namePath) => {
    if (!namePath) {
      return undefined;
    }

    const [newFileName, oldFilePath] = namePath.split('|');

    const promisedResult = await fs.promises.rename(
      oldFilePath,
      newPath.concat(newFileName)
    );
    return promisedResult;
  });
  return Promise.all(results);
};

const removeDirectories = async (filePaths) => {
  const seenPaths = new Set();
  const results = filePaths.map(async (namePath) => {
    if (!namePath) {
      return undefined;
    }

    const [, oldFilePath] = namePath.split('|');
    const indexOfFileName = oldFilePath.lastIndexOf('/');
    const dirPath = oldFilePath.substring(0, indexOfFileName);

    if (seenPaths.has(dirPath.normalize())) {
      return undefined;
    }

    seenPaths.add(dirPath.normalize());

    const dirFiles = await fs.promises.readdir(dirPath);

    if (dirFiles.length === 0) {
      try {
        const result = await fs.promises.rmdir(dirPath);
        return result;
      } catch (err) {
        console.log('my silly little error', err);
      }
    } else {
      return `Directory '${dirPath}' contained files: ${dirFiles}`;
    }
  });
  return Promise.all(results);
};

const main = async () => {
  // step 1: Grab all the paths that lead to an image
  const pathName = glob.sync(
    path.join(__dirname, '../src/content/docs/**/images/')
  );

  const i18nPathName = glob.sync(
    path.join(__dirname, '../src/i18n/content/docs/**/images/')
  );

  console.info('Fetching image paths from src/content');
  const nativeFilePaths = await getAbsolutePaths(pathName);

  console.info('Fetching image paths from src/i18n/content');
  const i18nFilePaths = await getAbsolutePaths(i18nPathName);

  // join the two arrays together
  const allFilePaths = [...nativeFilePaths.flat(), ...i18nFilePaths.flat()];

  // step 2: Move all those files from their relative path to absolute path
  console.info('Moving all files to src/images');
  const imagePath = path.join(__dirname, '../src/images/');
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
