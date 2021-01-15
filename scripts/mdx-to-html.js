const componentsToData = require('../codemods/serialize/componentsToData');
const titleComponentsToData = require('../codemods/serialize/titleComponentsToData');
const codeBlocksToData = require('../codemods/serialize/codeBlocksToData');
const indentedCodeBlock = require('../codemods/indentedCodeBlock');
const unified = require('unified');
const toMDAST = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const format = require('rehype-format');
const fs = require('fs');
const codeblocks = require('remark-code-blocks');

const createProcessor = ({ codemods = [] } = {}) => {
  const processor = unified()
    .use(toMDAST)
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(frontmatter, ['yaml'])
    .use(indentedCodeBlock);

  codemods.forEach((plugin) => {
    Array.isArray(plugin)
      ? processor.use(plugin[0], plugin[1])
      : processor.use(plugin);
  });

  processor.use(remark2rehype).use(format).use(html);

  return processor;
};

const processor = createProcessor({
  codemods: [componentsToData, titleComponentsToData, codeBlocksToData],
});

processor
  .process(
    fs.readFileSync(
      'src/content/docs/agents/php-agent/installation/php-agent-installation-aws-linux-redhat-centos.mdx'
    )
  )
  .then(
    function (file) {
      console.log(String(file));
    },
    function (err) {
      console.error(String(err));
    }
  );

module.exports = createProcessor;
