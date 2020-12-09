const Turndown = require('turndown');
const getFrontmatter = require('../get-frontmatter');

const toMarkdown = (file) => {
  const turndown = new Turndown({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
  }).keep('iframe');

  file.contents = getFrontmatter(file) + turndown.turndown(file.contents);
};

module.exports = toMarkdown;
