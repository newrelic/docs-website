#!/usr/bin/env node

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import rehypeStringify from 'rehype-stringify';
import addClasses from 'rehype-add-classes';
import rehypeFormat from 'rehype-format';

import handlers from './utils/handlers.mjs';
import fencedCodeBlock from '../../codemods/fencedCodeBlock.mjs';

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
  .use(remarkParse)
  .use(remarkMdx)
  .use(remarkFrontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(remarkRehype, {
    handlers: {
      yaml: handlers.frontmatter.serialize,
      mdxjsEsm: handlers.mdxjsEsm.serialize,
      mdxJsxTextElement: mdxElement,
      mdxJsxFlowElement: mdxElement,
      code: handlers.CodeBlock.serialize,
    },
  })
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(addClasses, {
    // adds notranslate class to <code> elements
    code: 'notranslate',
  });

const serializeMDX = async (mdx) => {
  const { value } = await processor.process(mdx);

  return value;
};

export default serializeMDX;
