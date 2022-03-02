const fs = require('fs');
const glob = require('glob');
const path = require('path');

// const mv = (pathNames) => {
//   const imagesPath = glob.sync(path.join(__dirname, '../src/images'));
// };

const getAbsolutePaths = (pathname) => {
  const fileExtension = /\.(png|jpg|jpeg|svg|gif)/i;
  const paths = glob.sync(path.join(__dirname, pathname));

  const promises = paths.map(async (urlPath, _, promiseArray) => {
    const readDirResults = await fs.promises.readdir(urlPath);

    const nestedImages = readDirResults.filter(
      (fileName) => !fileExtension.test(fileName)
    );

    console.log(nestedImages);
    const fileNames = readDirResults
      .filter((fileName) => fileExtension.test(fileName))
      .map(async (file, _, pushFiles) => {
        try {
          const absolutePath = `${urlPath}${file}`;
          const stat = await fs.promises.lstat(absolutePath);

          if (stat.isFile() && fileExtension.test(absolutePath)) {
            // return pushFiles.push(absolutePath);
            return;
          } else {
            console.log('is dir');
            const nestedImagesFiles = await fs.promises.readdir(absolutePath);
            const absolutePaths = nestedImagesFiles.map((image) => {
              return `${absolutePath}${image}`;
            });
            return [...pushFiles, ...absolutePaths];
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    return [...promiseArray, ...fileNames];
  });

  return Promise.all(promises);
};

// eslint-disable-next-line no-unused-vars
const changeFileNames = () => {
  const pathNames = glob.sync(path.join(__dirname, '../src/images/*'));

  pathNames.forEach((urlPath) => {
    const filename = path.basename(urlPath);
    const dir = path.dirname(urlPath);
    const newFileName = filename;
    const newPath = path.join(dir, newFileName).replaceAll('%', '_');

    fs.rename(urlPath, newPath, (err) => {
      // eslint-disable-next-line no-console
      if (err) console.error(err);
    });
  });
};

// const main = async () => {
//   // changeFileNames();

//   const nativePaths = '../src/content/**/images/';
//   // const i18nPaths = '../src/i18n/content';

//   const fileNames = await getAbsolutePaths(nativePaths);
//   console.log(fileNames.length);
//   // mvFiles(i18nPaths);

//   // changeFileNames();
// };

const main = () => {
  changeFileNames();
};

main();
