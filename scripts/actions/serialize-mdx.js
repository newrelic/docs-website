const handlers = require('./utils/handlers');
const fencedCodeBlock = require('../../codemods/fencedCodeBlock');
const unified = require('unified');
const toMDAST = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remark2rehype = require('remark-rehype');
const addClasses = require('rehype-add-classes');
const html = require('rehype-stringify');
const format = require('rehype-format');
const customHeadingIds = require('../../plugins/gatsby-remark-custom-heading-ids/utils/visitor');

const mdxElement = (h, node) => {
  const handler = handlers[node.name];

  if (!handler || !handler.serialize) {
    throw new Error(
      `Unable to serialize component: '${node.name}'. You need to specify a serializer in 'scripts/actions/utils/handlers.js'`
    );
  }

  return handler.serialize(h, node);
};

const processor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(customHeadingIds)
  .use(remark2rehype, {
    handlers: {
      import: handlers.import.serialize,
      yaml: handlers.frontmatter.serialize,
      mdxSpanElement: mdxElement,
      mdxBlockElement: mdxElement,
      code: handlers.CodeBlock.serialize,
    },
  })
  .use(format)
  .use(html)
  .use(addClasses, {
    // adds notranslate class to <code> elements
    code: 'notranslate',
  });

const serializeMDX = async (mdx) => {
  const { contents } = await processor.process(mdx);

  return contents;
};

module.exports = serializeMDX;
