const fs = require('fs');
const path = require('path');

const logger = require('./utils/logger');
const { BASE_DIR } = require('./constants');
const { resolve } = require('path');

const getTitle = (item) =>
  item
    .split('/')
    .slice(-1)[0]
    .replace('.mdx', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const getFrontmatter = (title) => `---
title: ${title}
template: basicDoc
---

# ${title}

`;

const getPageContent = (dir, files) =>
  files &&
  files
    .map((file) => {
      const path = `${dir}/${file.name}`;
      // TODO: get the label from frontmatter
      const label = getTitle(file.name);
      return `* [${path}](${label})`;
    })
    .join('\n');

// TODO: create all links in and nested under this directory
const createIndexPage = (dir) => {
  const title = getTitle(dir);
  const fullDir = path.join(BASE_DIR, dir);

  /* 
  Desired output: list of links, nested structure 
  1. Check if there are any directories in this directory
  2. If there are no directories, create and return a list of links
  3. If there are directories, create all the links for this folder and then call the function again for the subdirectories
  */

  const linkContent = new Promise((resolve, reject) => {
    fs.readdir(fullDir, { withFileTypes: true }, (err, files) => {
      if (err) logger.error(`Unabled to read files for ${dir}.`);

      const subDirs = files && files.filter((file) => file.isDirectory());
      const subLinkContent =
        subDirs &&
        subDirs.reduce((content, subDir) => {
          return content + createIndexPage(subDir.name);
        }, '');
      const currentLinkContent = getPageContent(dir, files);

      return resolve(currentLinkContent + subLinkContent);
    });
  });
  const fileName = `${fullDir}/index.mdx`;
  const content = getFrontmatter(title) + linkContent;
  fs.writeFile(fileName, content, (err) => {
    if (err) logger.error(`Could not create ${fileName}.`);
  });
};

const createIndexPages = () => {
  // TODO: recursively loop over folders
  // TODO: if a folder does not have an index page, create one
  createIndexPage('foo-stuff');
};

module.exports = createIndexPages;

// TODO: remove this (just used for easier testing)
createIndexPages();
