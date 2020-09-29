const collapseParagraphs = require('./collapseParagraphs');
const paragraphsInsideTableCells = require('./paragraphsInsideTableCells');

module.exports = [
  [
    collapseParagraphs,
    [(node) => node.type === 'mdxBlockElement' && node.name === 'td'],
  ],
  paragraphsInsideTableCells,
];
