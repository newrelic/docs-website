const formatWhitespace = (inputString) => {
  return inputString
    .replace(/\r\n?/g, '\n')
    .replace(/\t/g, '')
    .replace(/\n+/g, '\n');
};

const escapeBraces = (inputString) => {
  return inputString.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
};

module.exports = { formatWhitespace, escapeBraces };
