const {
  getFilePaths,
  getUserInputs,
  separateData,
  joinData,
  addRedirect,
  removeRedirect,
} = require('./handlers');
const fs = require('fs');

/**
 * Process the results from the add/remove redirects and prints them
 * @param {Object} results - Object containing either added/skipped/removed redirects
 */
const processResults = (results) => {
  const addedRedirects = results.filter((file) => file.added);
  const skippedRedirects = results.filter((file) => file.skipped);
  const removedRedirects = results.filter((file) => file.removed);

  if (addedRedirects.length) {
    console.log('Added Redirects to the following paths:');
    addedRedirects.forEach((filepath) => console.log(` - ${filepath.added}`));
  }

  if (removedRedirects.length) {
    console.log('Removed Redirects from the following paths:');
    removedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.removed}`)
    );
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

const main = async () => {
  const { action, directoryInput } = getUserInputs();
  const filePaths = await getFilePaths(directoryInput);
  const separatedData = await Promise.all(filePaths.map(separateData));

  const editedData = separatedData.map((data) => {
    if (action === 'add') {
      return addRedirect(data);
    }
    return removeRedirect(data);
  });

  const joinedData = await Promise.all(editedData.map(joinData));

  await joinedData.forEach(({ data, path }) => {
    try {
      fs.writeFileSync(path, String(data));
    } catch (err) {
      console.error(err);
    }
  });
  processResults(editedData);
};

main();
