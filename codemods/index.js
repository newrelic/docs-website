const indentedCodeBlock = require('./indentedCodeBlock');
const callouts = require('./callouts');
const clamshells = require('./clamshells');
const exampleBoxes = require('./exampleBoxes');
const videos = require('./videos');
const images = require('./images');
const tables = require('./tables');
const buttons = require('./buttons');
const icons = require('./icons');
const codeBlocks = require('./codeBlocks');
const inlineCodeBlocks = require('./inlineCodeBlocks');
const landingPageTileGrid = require('./landingPageTileGrid');
const landingPageImagePlacement = require('./landingPageImagePlacement');
const landingPageHero = require('./landingPageHero');
const collapseLandingPageTileGrids = require('./collapseLandingPageTileGrids');
const landingPageButtonType = require('./landingPageButtonType');
const tocLinks = require('./tocLinks');
const browserLandingPageBlockquote = require('./browserLandingPageBlockquote');
const techTiles = require('./techTile');

module.exports = [
  codeBlocks,
  inlineCodeBlocks,
  indentedCodeBlock,
  callouts,
  exampleBoxes,
  videos,
  images,
  clamshells,
  tables,
  buttons,
  browserLandingPageBlockquote,
  icons,
  landingPageTileGrid,
  landingPageImagePlacement,
  collapseLandingPageTileGrids,
  landingPageButtonType,
  tocLinks,
  landingPageHero,
  techTiles,
  require('./imageSizing'),
];
