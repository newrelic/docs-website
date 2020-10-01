const toMarkdown = require('./converters/to-markdown');
const toJSON = require('./converters/to-json');

const converters = {
  '.mdx': toMarkdown,
  '.json': toJSON,
};

const convertDocs = (file) => converters[file.extname](file);

module.exports = convertDocs;
