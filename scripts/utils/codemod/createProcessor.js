const unified = require('unified');
const toMDAST = require('remark-parse');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const jsx = require('./jsx');

const util = require('util');

const createProcessor = ({ codemods }) => {
  const processor = unified()
    .use(stringify, { bullet: '*' })
    .use(toMDAST)
    .use(remarkMdx)
    // .use(() => (tree) => {
    //   console.log(util.inspect(tree, { depth: null, colors: true }));
    // })
    .use(jsx, { plugins: codemods.jsx })
    .use(frontmatter, ['yaml']);

  codemods.mdx.forEach((plugin) => {
    Array.isArray(plugin)
      ? processor.use(plugin[0], plugin[1])
      : processor.use(plugin);
  });

  return processor;
};

module.exports = createProcessor;
