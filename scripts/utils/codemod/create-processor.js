const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');

const createProcessor = ({ codemods = [] } = {}) => {
  const processor = unified()
    .use(stringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    })
    .use(toMDAST)
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(frontmatter, ['yaml']);

  codemods.forEach((plugin) => {
    Array.isArray(plugin)
      ? processor.use(plugin[0], plugin[1])
      : processor.use(plugin);
  });

  return processor;
};

module.exports = createProcessor;
