const path = require('path');
const fs = require('fs');
const serializeMDX = require('../../actions/serialize-mdx');

const JP_DIR = 'src/i18n/content/jp/docs';
const OUT_DIR = 'serializedContent';

const replace = (x, sub = '') => (str) => str.replace(x, sub);
const pathJoin = (base) => (filepath) => path.join(base, filepath);
const getFullPath = pathJoin(process.cwd());

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
  fs.existsSync(filepath) ? fs.readFileSync(getFullPath(filepath)) : null;

const serializeContent = async (filepaths) =>
  Promise.all(filepaths.map(getContent).filter(Boolean).map(serializeMDX));

const writeFile = (filepaths, locale) => (content, index) => {
  const mdxFilepath = filepaths[index];
  const filepath = path
    .join(
      OUT_DIR,
      locale,
      path.dirname(mdxFilepath),
      path.basename(mdxFilepath, '.mdx') + '.html'
    )
    .replace('src/content/docs/', '')
    .replace('src/i18n/content/jp/docs/', '');

  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content);
};

const main = async () => {
  try {
    const jpFilePaths = getFilesRecursively(JP_DIR);
    const enFilePaths = jpFilePaths.map(replace('i18n/content/jp', 'content'));

    const serializedJPContent = await serializeContent(jpFilePaths);
    const serializedEnContent = await serializeContent(enFilePaths);

    serializedJPContent.forEach(writeFile(jpFilePaths, 'jp'));
    serializedEnContent.forEach(writeFile(enFilePaths, 'en'));
  } catch (e) {
    console.log('[!]', 'Unable to serialize content');
    console.error(e);
  }
};

main();
