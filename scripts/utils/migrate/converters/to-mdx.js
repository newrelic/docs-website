const htmlToMarkdown = require('../html-to-markdown');
const getFrontmatter = require('../get-frontmatter');

const toMDX = (file) => {
  file.contents = getFrontmatter(file) + htmlToMarkdown(file);
};

module.exports = toMDX;
