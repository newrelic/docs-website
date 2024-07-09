/* eslint-disable no-console */
const {
  getFilePaths,
  separateData,
  formatDirectory,
  joinData,
  addRedirect,
  removeRedirect,
} = require('./utils');
const { program } = require('commander');
const fs = require('fs');

/**
 * Process the results from the add/remove redirects and prints them
 * @param {Object} results - Object containing either added/skipped/removed redirects
 */
const processResults = (editedData) => {
  const joinedData = editedData.map(joinData);

  joinedData.forEach(({ data, path }) => {
    try {
      fs.writeFileSync(path, String(data));
    } catch (err) {
      console.error(err);
    }
  });

  const addedRedirects = editedData.filter((file) => file.added);
  const skippedRedirects = editedData.filter((file) => file.skipped);
  const removedRedirects = editedData.filter((file) => file.removed);

  if (addedRedirects.length) {
    console.log('(✔️) Added Redirects to the following paths:');
    addedRedirects.forEach((filepath) => console.log(` - ${filepath.added}`));
  }

  if (removedRedirects.length) {
    console.log('(✔️) Removed Redirects from the following paths:');
    removedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.removed}`)
    );
  }

  if (skippedRedirects.length) {
    console.log(
      '(✔️) The following files either contain no redirects or already contain the slug:'
    );
    skippedRedirects.forEach((filepath) =>
      console.log(` - ${filepath.skipped}`)
    );
  }
};

const addRedirects = (path) => {
  const formattedPath = formatDirectory(path);
  const filePaths = getFilePaths(formattedPath);
  const separatedData = filePaths.map(separateData);
  const editedData = separatedData.map((data) => addRedirect(data));
  processResults(editedData);
};

const removeRedirects = (path) => {
  const formattedPath = formatDirectory(path);
  const filePaths = getFilePaths(formattedPath);
  const separatedData = filePaths.map(separateData);
  const editedData = separatedData.map((data) => removeRedirect(data));
  processResults(editedData);
};

const checkDirectory = (path) => {
  const filePaths = getFilePaths(path);

  if (!filePaths.length) {
    console.warn(
      `<!> No .mdx files found in the directory. Please check: ${path}`
    );
    return;
  }
};

const addRemoveRedirects = program
  .name('addRemoveRedirects')
  .description('create or delete redirects for all files in a given directory');

addRemoveRedirects
  .command('add')
  .description(
    "add a redirect for the file's current location for all files in a given directory (and any sub-directories)"
  )
  .argument('path')
  .action((path) => {
    checkDirectory(path);
    addRedirects(path);
  });

addRemoveRedirects
  .command('remove')
  .description(
    "remove a redirect for the file's current location for all files in a given directory (and any sub-directories)"
  )
  .argument('path')
  .action((path) => {
    checkDirectory(path);
    removeRedirects(path);
  });

program.parse();
