const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const fm = require('front-matter');

const logger = require('./utils/logger');
const { BASE_DIR } = require('./constants');

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

`;

const getPageContent = (dir, files) => {
  return files
    .map((file) => {
      const path = `${dir}/${file.name}`
        .replace(BASE_DIR, '')
        .replace('.mdx', '');
      const fileContent = fsSync.readFileSync(`${dir}/${file.name}`, 'utf8');
      const label = fm(fileContent).attributes.title || getTitle(file.name);
      return `* [${label}](${path})`;
    })
    .join('\n');
};

const getSubheading = (dir, level) => {
  const title = getTitle(dir);
  const hashes = [...Array(level).keys()].reduce((acc) => '#' + acc, '');

  return `\n${hashes} ${title}\n`;
};

const createIndexPage = async (dir, level = 2) => {
  // dont run for the attribute definitions
  if (dir === path.join(BASE_DIR, 'attribute-dictionary')) return false;

  const title = getTitle(dir);

  try {
    const nodes = (await fs.readdir(dir, { withFileTypes: true })) || [];

    // get files (and links) for this directory
    const files = nodes.filter((node) => !node.isDirectory());
    const dirLinks = getPageContent(dir, files);

    // get all sub directories
    const subDirs = nodes
      .filter((node) => node.isDirectory())
      .map(({ name }) => path.join(dir, name));

    // get links for sub directories (make index pages along the way)
    const subLinks = await subDirs.reduce(async (contentPromise, subDir) => {
      // Due to this being async, the previous (accumulator) result is a promise.
      // We need to await the results of the last loop, before we can add to it.
      const content = await contentPromise;

      const subDirContent = await createIndexPage(subDir, level + 1);
      const subDirHeading = getSubheading(subDir, level);

      return [content, subDirHeading, subDirContent].join('\n');
    }, '');

    // if there is an index.mdx, don't overwrite or make a new one
    if (files.some((file) => file.name === 'index.mdx')) return;

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

const createIndexPages = async () => {
  await createIndexPage(BASE_DIR);
};

module.exports = createIndexPages;
