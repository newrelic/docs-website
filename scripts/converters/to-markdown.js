const htmlToMarkdown = require('../utils/htmlToMarkdown');
const getFrontmatter = require('../frontmatter/get-frontmatter');

const toMarkdown = (file) => {
  file.contents = getFrontmatter(file.meta.doc) + htmlToMarkdown(file.contents);
};

module.exports = toMarkdown;
