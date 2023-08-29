#!/usr/bin/env node

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import rehypeRemark from 'rehype-remark';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import remarkMdxjs from 'remark-mdxjs';
import rehypeStringify from 'rehype-stringify';
import addClasses from 'rehype-add-classes';
import rehypeFormat from 'rehype-format';

import handlers from './utils/handlers.mjs';
import fencedCodeBlock from '../../codemods/fencedCodeBlock.mjs';
import customHeadingIds from '../../plugins/gatsby-remark-custom-heading-ids/utils/visitor.mjs';

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
  .use(remarkMdxjs)
  .use(remarkFrontmatter, ['yaml'])
  .use(fencedCodeBlock)
  .use(customHeadingIds)
  .use(rehypeRemark, {
    handlers: {
      import: handlers.import.serialize,
      yaml: handlers.frontmatter.serialize,
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
  const { contents } = await processor.process(mdx);

  return contents;
};

export default serializeMDX;
