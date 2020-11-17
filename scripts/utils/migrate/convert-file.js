const toMDX = require('./converters/to-mdx');
const toMarkdown = require('./converters/to-markdown');

const converters = {
  '.mdx': toMDX,
  '.md': toMarkdown,
};

const convertFile = (file) => converters[file.extname](file);

module.exports = convertFile;
