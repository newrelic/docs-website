const handlers = require('./utils/handlers');
const fencedCodeBlock = require('./utils/fencedCodeBlock');
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

// this ensures we keep brackets around MDX expressions inside attributes
// for instance, this example:
//
// ```mdx
//   <Collapser title={<InlineCode>hey! {'hi' + 'there'}</InlineCode>}>
//     hi!
//   </Collapser>
// ```
//
// would lose the brackets around `'hi' + 'there'` and this would deserialize incorrectly.
const mdxSpanExpression = (h, node) => {
  node.value = `{${node.value}}`;
  return h.handlers.text(h, node);
};

const processor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  // `remark-mdxjs` is v old and is _supposed_ to do the same things as `remarkMdx`, but without this, import statements aren't parsed correctly and generally things are kinda fucky.
  // when we upgrade the rest of our packages here, we can probably remove it.
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(customHeadingIds)
  .use(remark2rehype, {
    handlers: {
      import: handlers.import.serialize,
      yaml: handlers.frontmatter.serialize,
      mdxSpanElement: mdxElement,
      mdxSpanExpression,
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
