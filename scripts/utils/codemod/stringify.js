const stringify = require('remark-stringify');

const raw = (node) => node.value;

// Tell the remark stringify plugin how to compile MDXAST nodes
stringify.Compiler.prototype.visitors.jsx = raw;
stringify.Compiler.prototype.visitors.import = raw;
stringify.Compiler.prototype.visitors.export = raw;

stringify.Compiler.prototype.visitors.comment = (node) =>
  `<!--${node.value}-->`;

module.exports = stringify;
