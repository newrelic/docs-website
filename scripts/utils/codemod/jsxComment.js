// Since we are not transforming the MDXAST into an MDXHAST, the comment visitor
// type is not defined. This plugin ensures we can compile comment types from
// the MDXAST.
const jsxComment = function () {
  const compiler = this.Compiler;

  compiler.prototype.visitors = {
    ...compiler.prototype.visitors,
    comment: (node) => `<!-- ${node.value.trim()} -->`,
  };
};

module.exports = jsxComment;
