const fs = require('fs').promises;
const path = require('path');

const logger = require('./utils/logger');
const { BASE_DIR } = require('./constants');
const { resolve } = require('path');

const getTitle = (file) =>
  file
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

const getPageContent = (dir, files) => {
  return files
    .map((file) => {
      const path = `${dir}/${file.name}`;
      // TODO: get the label from frontmatter
      const label = getTitle(file.name);
      return `* [${path}](${label})`;
    })
    .join('\n');
};

const createIndexPage = async (dir) => {
  const title = getTitle(dir);

  try {
    // get all sub directories
    const nodes = (await fs.readdir(dir, { withFileTypes: true })) || [];
    const subDirs = nodes
      .filter((node) => node.isDirectory())
      .map(({ name }) => path.join(dir, name));

    // get links for this directory
    const files = nodes.filter((node) => !node.isDirectory());
    const dirLinks = getPageContent(dir, files);

    // get links for sub directories (make index pages along the way)
    const subLinks = await subDirs.reduce(async (content, subDir) => {
      const subDirContent = await createIndexPage(subDir);
      const subDirHeading = '\n## ' + getTitle(subDir) + '\n';
      return [content, subDirHeading, subDirContent].join('\n');
    }, '');

    // combine links and add them to a new index.mdx file
    const fileName = `${dir}/index.mdx`;
    const content = getFrontmatter(title) + dirLinks + subLinks;
    await fs.writeFile(fileName, content);

    // return the links for this page (to be used by a parent, if applicable)
    return dirLinks + subLinks;
  } catch (err) {
    logger.error(`Unabled to create index for ${dir}: ${err}`);
  }
};

const createIndexPages = () => {
  // TODO: recursively loop over folders
  // TODO: if a folder does not have an index page, create one
  const dir = path.join(BASE_DIR, 'foo-stuff');
  createIndexPage(dir);
};

module.exports = createIndexPages;

// TODO: remove this (just used for easier testing)
createIndexPages();
