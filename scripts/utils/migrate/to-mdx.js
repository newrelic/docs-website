const remarkFrontmatter = require('remark-frontmatter');
const stringify = require('remark-stringify');
const unified = require('unified');

const toMDX = (tree) =>
  unified()
    .use(stringify, { bullet: '*', listItemIndent: '1', fence: '`' })
    .use(remarkFrontmatter, ['yaml'])
    .stringify(tree);

module.exports = toMDX;
