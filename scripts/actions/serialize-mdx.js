const handlers = require('./utils/handlers');
const indentedCodeBlock = require('../../codemods/indentedCodeBlock');
const unified = require('unified');
const toMDAST = require('remark-parse');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');
const format = require('rehype-format');
const customHeadingIds = require('../../plugins/gatsby-remark-custom-heading-ids/utils/visitor');

const mdxToHTML = (h, node) => {
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
  .use(indentedCodeBlock)
  .use(customHeadingIds)
  .use(remark2rehype, {
    handlers: {
      import: handlers.import.serialize,
      yaml: handlers.frontmatter.serialize,
      mdxSpanElement: mdxToHTML,
      mdxBlockElement: mdxToHTML,
    },
  })
  .use(format)
  .use(html);

const serializeMDX = async (mdx) => {
  const { contents } = await processor.process(mdx);

  return contents;
};

module.exports = serializeMDX;
