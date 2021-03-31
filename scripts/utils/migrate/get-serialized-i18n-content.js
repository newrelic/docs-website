const path = require('path');
const fs = require('fs');
const serializeMDX = require('../../actions/serialize-mdx');

const JP_DIR = 'src/i18n/content/jp/docs';
const OUT_DIR = '~/Desktop';

const pathJoin = (filepath) => (name) => path.join(filepath, name);
const replace = (x, sub = '') => (str) => str.replace(x, sub);

const isDirectory = (filepath) => fs.statSync(filepath).isDirectory();
const isFile = (filepath) => fs.statSync(filepath).isFile();
const isMdx = (filepath) => path.extname(filepath) === '.mdx';

const getDirectories = (filepath) =>
  fs.readdirSync(filepath).map(pathJoin(filepath)).filter(isDirectory);

const getFiles = (filepath) =>
  fs.readdirSync(filepath).map(pathJoin(filepath)).filter(isFile);

const getFilesRecursively = (filepath) =>
  getDirectories(filepath)
    .flatMap(getFilesRecursively)
    .reduce((acc, file) => [...acc, file], getFiles(filepath))
    .filter(isMdx);

const getContent = (filepath) =>
  fs.readFileSync(path.join(process.cwd(), filepath));

const serializeContent = async (filepaths) =>
  Promise.all(filepaths.map(getContent).map(serializeMDX));

const main = async () => {
  try {
    const jpFilePaths = getFilesRecursively(JP_DIR);
    const enFilePaths = jpFilePaths.map(replace('i18n/content/jp', 'content'));

    const serializedJPContent = await serializeContent(jpFilePaths);
    const serializedEnContent = await serializeContent(enFilePaths);

    // TODO: save
  } catch (e) {
    console.log('[!]', 'Unable to serialize content');
    console.error(e);
  }
};

main();
