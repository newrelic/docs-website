/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const cliProgress = require('cli-progress');
const colors = require('ansi-colors');

const progressBar = new cliProgress.SingleBar(
  {
    format:
      // eslint-disable-next-line prefer-template
      'Image imports verification progress |' +
      colors.cyan('{bar}') +
      '| {percentage}% || {value} of {total} Files',
    forceRedraw: true,
  },
  cliProgress.Presets.rect
);

const isFile = (filepath) => fs.statSync(filepath).isFile();
const pathJoin = (base) => (filepath) => path.join(base, filepath);

const getFiles = (filepath) =>
  fs.readdirSync(filepath).map(pathJoin(filepath)).filter(isFile);

const errors = [];

const checkImportStatements = (files) => {
  progressBar.start(files.length, 0);

  // imported images begin with 'import', contain 'image'
  // and can end in ' or " with or without ; and any number of spaces after
  const importRegex = new RegExp(`^import.+images.+("|'|';|";)[ ]*$`, 'gm');
  // eslint-disable-next-line no-useless-escape
  const imgSrcRegex = new RegExp(`<img\s|.*src={.*}`, 'gm');

  //
  const importStatements = files.flatMap((file, i) => {
    progressBar.update(i + 1);

    if (file.includes('src/content/docs/style-guide/images/embed-images.mdx')) {
      return null;
    }
    const textfile = fs.readFileSync(file, 'utf-8');
    const fullImportStatements = textfile.match(importRegex);

    // check whitespace between import statements
    if (fullImportStatements?.length > 1) {
      const lines = textfile.split('\n');
      for (let i = 0; i < fullImportStatements.length - 1; i++) {
        const importLine1 = lines.indexOf(fullImportStatements[i]);
        const importLine2 = lines.indexOf(fullImportStatements[i + 1]);
        if (importLine2 - importLine1 <= 1) {
          const errMessage = `\n The imports on lines \x1b[31m${file}:${
            importLine1 + 1
          }\x1b[0m and \x1b[31m${
            importLine2 + 1
          }\x1b[0m need a new line between them`;
          errors.push(errMessage);
        }
      }
    }

    // check whitespace within import statement
    const imports = fullImportStatements?.map((importStatement) => {
      if (importStatement.trim().split(' ').length !== 4) {
        const errMessage = `\n The import \x1b[31m${importStatement}\x1b[0m in \x1b[31m${file}\x1b[0m has incorrect spacing`;
        errors.push(errMessage);
      }
      return importStatement.split(/'|"/)[0].split(' ')[1];
    });

    // check the img tag src is imported
    const imgSrcs = textfile.match(imgSrcRegex)?.map((source) => {
      return source.split(`src=`)[1].split('}')[0].replace('{', '');
    });

    imgSrcs?.forEach((imgSrc) => {
      if (!imports?.includes(imgSrc)) {
        const errMessage = `\n \x1b[31m${imgSrc}\x1b[0m is used in an img src in \x1b[31m${file}\x1b[0m but never imported`;
        errors.push(errMessage);
      }
    });

    return fullImportStatements;
  });
  progressBar.stop();

  return importStatements.filter(Boolean);
};

const getImageTitles = (importStatements) => {
  const imageTitles = importStatements.map((importStatement) => {
    // using replace here as the matched strings have escaped underscores
    // and we need to remove the backslashes
    return importStatement.split(`'`)[1].split(`/`)[1].replace(/\\/g, '');
  });

  return imageTitles;
};

const getAllImages = () => {
  const imagesPaths = getFiles('src/images');
  return imagesPaths.map((imagePath) => imagePath.split(`/`)[2]);
};

exports.verifyImageImports = (files) => {
  console.log(`\n\n🔍\x1b[92mChecking image imports... \n\x1b[0m`);

  // validates imports and returns them to check against image files for further validation
  const importStatements = checkImportStatements(files);
  const importedImages = getImageTitles(importStatements);
  const inRepoImages = getAllImages();

  const orphanImports = importedImages
    .map((imageImport) => {
      if (!inRepoImages.includes(imageImport)) {
        return `\n ${imageImport}`;
      } else return null;
    })
    .filter(Boolean);
  if (orphanImports.length > 0) {
    const errMessage = `\n The following images are imported but do not have a matching file in src/images: \n \x1b[31m${orphanImports}\x1b[0m \n\n please fix the import name or add back the missing image \n`;
    errors.push(errMessage);
  }
  return errors;
};
