const indentedCodeBlock = require('./indentedCodeBlock');
const paragraphsInsideTableCells = require('./paragraphsInsideTableCells');
const callouts = require('./callouts');
const clamshells = require('./clamshells');
const videos = require('./videos');
const images = require('./images');
const tables = require('./tables');
const buttons = require('./buttons');
const icons = require('./icons');
const codeBlocks = require('./codeblocks');

module.exports = [
  paragraphsInsideTableCells,
  codeBlocks,
  indentedCodeBlock,
  callouts,
  clamshells,
  videos,
  images,
  tables,
  buttons,
  icons,
];
