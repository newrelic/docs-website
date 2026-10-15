import handlers from './utils/handlers.mjs';
import { serializeComponent } from './utils/serialization-helpers.mjs';
import { listSnippetComponentNames } from '../generate-snippets.js';
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

const mdxElement = (state, node) => {
  const handler = handlers[node.name];

  if (handler && handler.serialize) {
    return handler.serialize(state, node);
  }

  // Auto-generated snippet components (src/components/snippets/) don't have
  // - and can't practically get - a hand-written entry here, since their
  // names come from whatever writers name their snippet files. They need no
  // special serialization (no text attributes, no custom classes), so the
  // same generic handler most plain components already use is correct for
  // them too - only fall back to it for names that are REAL, current
  // snippets, so a genuinely unknown/mistyped component name still throws.
  if (listSnippetComponentNames().includes(node.name)) {
    return serializeComponent(state, node);
  }

  throw new Error(
    `Unable to serialize component: '${node.name}'. You need to specify a serializer in 'scripts/actions/utils/handlers.js'`
  );
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

// Handle MDX flow expressions (e.g., JSX comments like {/* ... */})
// Serialize them using the same pattern as imports/frontmatter - data attributes with base64
const mdxFlowExpression = (_h, node) => {
  // Check if this is a comment (starts with /* and ends with */)
  if (node.value && node.value.trim().match(/^\/\*[\s\S]*?\*\/$/)) {
    // Use the mdxComment handler for JSX comments
    return handlers.mdxComment.serialize(null, node);
  }

  // For non-comment expressions, convert to text (default behavior)
  return {
    type: 'text',
    value: `{${node.value}}`,
  };
};

// Handle MDX text expressions (inline expressions like {value})
const mdxTextExpression = (_h, node) => {
  // Check if this is a comment
  if (node.value && node.value.trim().match(/^\/\*[\s\S]*?\*\/$/)) {
    return handlers.mdxComment.serialize(null, node);
  }

  return {
    type: 'text',
    value: `{${node.value}}`,
  };
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
      mdxFlowExpression,
      mdxTextExpression,
      code: handlers.CodeBlock.serialize,
    },
  })
  .use(addClasses, {
    // adds notranslate class to <code> elements
    code: 'notranslate',
  })
  .use(format)
  .use(rehypeStringify);

const serializeMDX = async (mdx) => {
  const vfile = await processor.process(mdx);

  return vfile.toString().trim();
};

export default serializeMDX;
