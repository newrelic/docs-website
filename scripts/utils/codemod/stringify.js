const stringify = require('remark-stringify');

stringify.Compiler.prototype.visitors.comment = (node) =>
  `<!--${node.value}-->`;

module.exports = stringify;
