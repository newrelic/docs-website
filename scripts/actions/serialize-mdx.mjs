import handlers from './utils/handlers.mjs';
import fencedCodeBlock from './utils/fencedCodeBlock.js';
import { unified } from 'unified11';
import toMDAST from 'remark-parse10';
import frontmatter from 'remark-frontmatter5';
import remarkMdx from 'remark-mdx2.3';
import remark2rehype from 'remark-rehype10';
import remarkGfm from 'remark-gfm';
import addClasses from 'rehype-add-classes';
import rehypeStringify from 'rehype-stringify10';
import format from 'rehype-format';
import customHeadingIds from '../../plugins/gatsby-remark-custom-heading-ids/utils/visitor.js';

import { inspect } from 'util';

const mdxElement = (state, node) => {
  const handler = handlers[node.name];

  if (!handler || !handler.serialize) {
    throw new Error(
      `Unable to serialize component: '${node.name}'. You need to specify a serializer in 'scripts/actions/utils/handlers.js'`
    );
  }

  return handler.serialize(state, node);
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
  .use(remarkGfm)
  .use(frontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(customHeadingIds)
  .use(remark2rehype, {
    handlers: {
      yaml: handlers.frontmatter.serialize,
      mdxjsEsm: handlers.import.serialize,
      mdxJsxTextElement: mdxElement,
      mdxJsxFlowElement: mdxElement,
      mdxSpanExpression,
      code: handlers.CodeBlock.serialize,
    },
  })
  .use(format)
  .use(rehypeStringify)
  .use(addClasses, {
    // adds notranslate class to <code> elements
    code: 'notranslate',
  });

const serializeMDX = async (mdx) => {
  const vfile = await processor.process(mdx);

  return vfile.toString().trim();
};

export default serializeMDX;
