const fs = require('fs');
const path = require('path');
const glob = require('glob');

const main = () => {
  const pathNames = glob.sync(path.join(__dirname, '../src/images/*'));

  pathNames.forEach((urlPath) => {
    const filename = path.basename(urlPath);
    const dir = path.dirname(urlPath);
    const newFileName = filename;
    const newPath = path.join(dir, newFileName).replace('%', '_');

    fs.rename(urlPath, newPath, (err) => console.log(err));
  });
};

main();
