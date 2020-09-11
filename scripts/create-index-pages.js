const fs = require('fs');
const path = require('path');

const logger = require('./utils/logger');
const { BASE_DIR } = require('./constants');

const getTitle = (dir) =>
  dir
    .split('/')
    .slice(-1)[0]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const getFrontmatter = (title) => `---
title: ${title}
template: basicDoc
---

`;

const getPageContent = (dir, files) =>
  files
    .map((file) => {
      const path = `${dir}/${file}`;
      const label = `title: ${file}`;
      return `* [${path}](${label})`;
    })
    .join('\n');

const createIndexPage = (dir) => {
  const title = getTitle(dir);
  const fullDir = path.join(BASE_DIR, dir);

  fs.readdir(fullDir, (err, files) => {
    if (err) logger.error(`Unabled to read files for ${dir}.`);

    const fileName = `${fullDir}/index.mdx`;
    const content = getFrontmatter(title) + getPageContent(dir, files);
    fs.writeFile(fileName, content, (err) => {
      if (err) logger.error(`Could not create ${fileName}.`);
    });
  });
};

const createIndexPages = () => {
  createIndexPage('/foo-stuff');
};

// module.exports = createIndexPages;
createIndexPages();
