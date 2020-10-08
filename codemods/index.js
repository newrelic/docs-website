const indentedCodeBlock = require('./indentedCodeBlock');
const callouts = require('./callouts');
const clamshells = require('./clamshells');
const videos = require('./videos');
const images = require('./images');
const tables = require('./tables');
const buttons = require('./buttons');
const icons = require('./icons');
const codeBlocks = require('./codeBlocks');
const inlineCodeBlocks = require('./inlineCodeBlocks');

module.exports = [
  codeBlocks,
  inlineCodeBlocks,
  indentedCodeBlock,
  callouts,
  clamshells,
  videos,
  images,
  tables,
  buttons,
  icons,
];
