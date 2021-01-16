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
const { has } = require('lodash');
const all = require('hast-util-to-mdast/lib/all');

const createProcessor = ({ codemods = [] } = {}) => {
  const processor = unified().use(toHAST);

  codemods.forEach((plugin) => {
    Array.isArray(plugin)
      ? processor.use(plugin[0], plugin[1])
      : processor.use(plugin);
  });

  processor
    .use(rehype2remark, {
      handlers: {
        div: (h, node) => {
          if (!has(node, 'properties.dataComponent')) {
            return all(h, node);
          }

          const name = node.properties.dataComponent;
          const attributes = JSON.parse(
            Buffer.from(node.properties.dataProp, 'base64')
          );

          return h(node, 'mdxBlockElement', { name, attributes }, all(h, node));
        },
      },
    })
    .use(stringify, {
      bullet: '*',
      fences: true,
      listItemIndent: '1',
    })
    .use(testComponent)
    .use(remarkMdx)
    .use(remarkMdxjs)
    .use(frontmatter, ['yaml']);

  return processor;
};

const processor = createProcessor({
  codemods: [
    /* dataToComponents */
  ],
});

processor
  .process(
    fs.readFileSync(
      'scripts/actions/src/html-test/src/content/docs/adduserattribute-python-agent-api.html'
    )
  )
  .then(
    function (file) {
      console.log(file.contents);
    },
    function (err) {
      console.error(String(err));
    }
  );
