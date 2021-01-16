const unified = require('unified');
const toHAST = require('rehype-parse');
const rehype2remark = require('rehype-remark');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const dataToComponents = require('../../codemods/deserialize/dataToComponents');
const testComponent = require('../../codemods/deserialize/testComponent');
const fs = require('fs');

const createProcessor = ({ codemods = [] } = {}) => {
  const processor = unified().use(toHAST);

  codemods.forEach((plugin) => {
    Array.isArray(plugin)
      ? processor.use(plugin[0], plugin[1])
      : processor.use(plugin);
  });

  processor
    .use(testComponent)
    .use(rehype2remark)
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(frontmatter, ['yaml'])
    .use(stringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    });

  return processor;
};

const processor = createProcessor({ codemods: [dataToComponents] });

processor
  .process(
    fs.readFileSync(
      'scripts/actions/src/html-test/src/content/docs/adduserattribute-python-agent-api.html'
    )
  )
  .then(
    function (file) {
      //console.log(String(file));
    },
    function (err) {
      console.error(String(err));
    }
  );
