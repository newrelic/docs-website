const fs = require('fs');

/**
 * Function traverses through directory paths and fetches
 * all paths that lead to an image.
 * Function also handles created a new filename that removes any
 * accidental encoding (example: file%2.png -> file_2.png)
 * Returns an array of strings formatted to 'new-image-fileName|path-to-image'
 *
 *
 * @param {String[]} paths - array of absolute file paths
 * @param {RegExp} [regex] - optional regex test against file names/extensions.
 *
 * @example
 * // input
 * const paths = ['src/content/path/to/images/', ...]
 * const regex = /\.(png|jpg|jpeg|svg|gif)/i
 *
 * // result
 * ['imageFile.png|src/content/path/to/images/imageFile.png', ...]
 *                           Defaults to image extensions.
 * @returns {Promise} Array of files to move
 */
const getAbsolutePaths = (paths, regex = /\.(png|jpg|jpeg|svg|gif)/i) => {
  const promises = paths.map(async (path) => {
    // read all filenames in the path
    const readDirResults = await fs.promises.readdir(path);

    // filter out any files that do not have an image file extension
    const images = readDirResults.filter((fileName) => regex.test(fileName));

    if (images.length > 0) {
      images.forEach((imageFileName, index) => {
        // Add the filename to the path using a key-value pairing formated in a string.
        // The key is the new filename.
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
 * Function handles moving files at a relative path to an absolute path
 * at newPath.
 *
 * @param {String} newPath - path to move files to
 * @param {Array<String>} filePaths - paths to move
 *
 * @example
 * // input
 * const newPath = 'path/to/dir'
 * const filePaths = ['filename.png|path/to/dir/filename.png', ...]
 *
 * @returns {Promise<Array<String>>}
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

/**
 * Function handles removing directories nested inside content.
 *
 * @param {Array<String>} filePaths - absolute file paths with filename
 *
 * @example
 * // input
 * const filePaths = ['filename.png|path/to/dir/filename.png', ...]
 *
 * @returns {Promise}
 */
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

        // we dont really care about the error, since our goal is to remove the directory.
      } catch (err) {
        return undefined;
      }
    } else {
      return `Directory '${dirPath}' contained files: ${dirFiles}`;
    }
  });
  return Promise.all(results);
};

module.exports = { getAbsolutePaths, moveFiles, removeDirectories };
