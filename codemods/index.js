const collapseParagraphs = require('./collapseParagraphs');
const paragraphsInsideTableCells = require('./paragraphsInsideTableCells');
const { isMdxBlockElement } = require('./utils/mdxast');

module.exports = [
  [collapseParagraphs, [isMdxBlockElement('td')]],
  paragraphsInsideTableCells,
];
