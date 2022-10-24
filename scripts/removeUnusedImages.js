const fs = require('fs');
const path = require('path');
const { IMAGE_ALLOWLIST } = require('./utils/constants');

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

const getAllImageImports = (path) => {
  const files = getFilesRecursively(path);
  const regex = new RegExp(`^import.+images.+("|'|';|";)[ ]*$`, 'gm');
  // imported images begin with 'import', contain 'image'
  // and can end in ' or " with or without ; and any number of spaces after
  const importStatements = files
    .flatMap((file) => {
      const textfile = fs.readFileSync(file, 'utf-8');
      return textfile.match(regex);
    })
    .filter(Boolean);
  const imageTitles = importStatements.map((importStatement) => {
    return importStatement.split(`'`)[1].split(`/`)[1].replace(/\\/g, '');
    // using replace here as the matched strings have escaped underscores
    // and we need to remove the backslashes
  });
  return imageTitles;
};

const getAllImages = () => {
  const imagesPaths = getFiles('src/images');
  return imagesPaths.map((imagePath) => imagePath.split(`/`)[2]);
};

const deleteUnusedImages = () => {
  const englishImportedImages = getAllImageImports('src/content/docs');
  const i18nImportedImages = getAllImageImports('src/i18n/content');

  const importedImages = englishImportedImages.concat(i18nImportedImages);
  const inRepoImages = getAllImages();

  const imagesNotBeingUsed = inRepoImages.filter(
    (image) =>
      !importedImages.includes(image) && !IMAGE_ALLOWLIST.includes(image)
  );
  console.log(
    `Deleting ${imagesNotBeingUsed.length} image/s not being imported in any file`
  );
  imagesNotBeingUsed.forEach((image) => fs.unlinkSync(`src/images/${image}`));
};

deleteUnusedImages();
