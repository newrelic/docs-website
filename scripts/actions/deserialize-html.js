const unified = require('unified');
const parse = require('rehype-parse');
const rehype2remark = require('rehype-remark');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const dataToComponents = require('../../codemods/deserialize/dataToComponents');
const testComponent = require('../../codemods/deserialize/testComponent');
const fs = require('fs');
const { get, has } = require('lodash');
const all = require('hast-util-to-mdast/lib/all');
const handlers = require('./utils/handlers');
const defaultHandlers = require('hast-util-to-mdast/lib/handlers');

const genericHandler = (h, node) => {
  if (!node.properties || node.properties.dataType !== 'component') {
    return defaultHandlers[node.tagName](h, node);
  }

  const key = node.properties.dataComponent || node.tagName;
  const handler = handlers[key];

  if (!handler || !handler.deserialize) {
    throw new Error(
      `Unable to deserialize node: '${key}'. You need to specify a deserializer in 'scripts/actions/utils/handlers.js'`
    );
  }

  return handler.deserialize(h, node);
};

const processor = unified()
  .use(parse)
  .use(rehype2remark, {
    handlers: {
      code: genericHandler,
      table: genericHandler,
      thead: genericHandler,
      tbody: genericHandler,
      tr: genericHandler,
      td: genericHandler,
      th: genericHandler,
      div: (h, node) => {
        const type = get(node, 'properties.dataType');
        const key =
          type === 'component'
            ? node.properties.dataComponent || node.tagName
            : type;

        const handler = handlers[key];

        if (!handler || !handler.deserialize) {
          throw new Error(
            `Unable to deserialize node: '${key}'. You need to specify a deserializer in 'scripts/actions/utils/handlers.js'`
          );
        }

        return handler.deserialize(h, node);
      },
    },
  })
  .use(stringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(frontmatter, ['yaml']);

const deserializeHTML = async (html) => {
  const { contents } = await processor.process(html);

  return contents.trim();
};

module.exports = deserializeHTML;
