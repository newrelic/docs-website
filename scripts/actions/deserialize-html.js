const unified = require('unified');
const parse = require('rehype-parse');
const rehype2remark = require('rehype-remark');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const handlers = require('./utils/handlers');
const defaultHandlers = require('hast-util-to-mdast/lib/handlers');
const heading = require('hast-util-to-mdast/lib/handlers/heading');
const u = require('unist-builder');
const { last } = require('lodash');

const handleNode = (h, node) => {
  if (!node.properties || !node.properties.dataType) {
    return defaultHandlers[node.tagName](h, node);
  }

  const { dataType, dataComponent } = node.properties;

  const key =
    dataType === 'component' ? dataComponent || node.tagName : dataType;

  const handler = handlers[key];

  if (!handler || !handler.deserialize) {
    throw new Error(
      `Unable to deserialize node: '${key}'. Please specify a deserializer in 'scripts/actions/utils/handlers.js'`
    );
  }

  return handler.deserialize(h, node);
};

const headingWithCustomId = (h, node) => {
  const result = heading(h, node);
  const { id } = node.properties || {};

  if (!id) {
    return result;
  }

  const value = `#${id}`;
  const lastChild = last(result.children);
  const linkReference = u(
    'linkReference',
    {
      identifier: value,
      label: value,
      referenceType: 'shortcut',
    },
    [u('text', value)]
  );

  if (lastChild.type === 'text' && !lastChild.value.match(/\s$/)) {
    lastChild.value = `${lastChild.value} `;
  } else {
    result.children.push(u('text', ' '));
  }

  result.children.push(linkReference);

  return result;
};

const processor = unified()
  .use(parse)
  .use(rehype2remark, {
    handlers: {
      code: handleNode,
      table: handleNode,
      thead: handleNode,
      tbody: handleNode,
      tr: handleNode,
      td: handleNode,
      th: handleNode,
      span: handleNode,
      div: handleNode,
      h1: headingWithCustomId,
      h2: headingWithCustomId,
      h3: headingWithCustomId,
      h4: headingWithCustomId,
      h5: headingWithCustomId,
      h6: headingWithCustomId,
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
