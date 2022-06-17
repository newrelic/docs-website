const fs = require('fs');
const path = require('path');

const isFile = (filepath) => fs.statSync(filepath).isFile();
const isDirectory = (filepath) => fs.statSync(filepath).isDirectory();
const pathJoin = (base) => (filepath) => path.join(base, filepath);

const getDirectories = (filepath) =>
  fs.readdirSync(filepath).map(pathJoin(filepath)).filter(isDirectory);

const getFiles = (filepath) =>
  fs.readdirSync(filepath).map(pathJoin(filepath)).filter(isFile);

const getFilesRecursively = (filepath) =>
  getDirectories(filepath)
    .flatMap(getFilesRecursively)
    .reduce((acc, file) => [...acc, file], getFiles(filepath));

const getAllDocsFiles = () => {
  const files = getFilesRecursively('src/content/docs/synthetics');
  const regex = new RegExp('^import.+', 'gm');
  const filteredFiles = files
    .flatMap((file) => {
      const textfile = fs.readFileSync(file, 'utf-8');
      return textfile.match(regex)?.split('/')?.[1];
    })
    .filter(Boolean);

  console.log(filteredFiles);
};

getAllDocsFiles();
