const toMDX = require('./converters/to-mdx');
const toJSON = require('./converters/to-json');

const converters = {
  '.mdx': toMDX,
  '.json': toJSON,
};

const convertFile = (file) => converters[file.extname](file);

module.exports = convertFile;
