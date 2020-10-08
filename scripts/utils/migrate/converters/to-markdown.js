const htmlToMarkdown = require('../html-to-markdown');
const getFrontmatter = require('../get-frontmatter');

const toMarkdown = (file) => {
  file.contents = getFrontmatter(file.data.doc) + htmlToMarkdown(file);
};

module.exports = toMarkdown;
