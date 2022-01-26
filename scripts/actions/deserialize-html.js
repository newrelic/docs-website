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
const yaml = require('js-yaml');
const { configuration } = require('./configuration');

const component = (h, node) => {
  if (!node.properties || !node.properties.dataType) {
    return defaultHandlers[node.tagName](h, node);
  }

  const { dataType, dataComponent } = node.properties;

  if (dataType === 'prop') {
    return null;
  }

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

const stripTranslateFrontmatter = () => {
  const transformer = (tree) => {
    if (tree?.children[0]?.type === 'yaml') {
      const frontmatterObj = yaml.load(tree.children[0].value);
      delete frontmatterObj.translate;
      delete frontmatterObj.redirects;
      frontmatterObj.translationType = configuration.TRANSLATION.TYPE;
      const frontmatterStr = yaml
        .dump(frontmatterObj, { lineWidth: -1 })
        .trim();
      tree.children[0].value = frontmatterStr;
      return tree;
    }
  };

  return transformer;
};

const processor = unified()
  .use(parse)
  .use(rehype2remark, {
    handlers: {
      code: component,
      table: component,
      thead: component,
      tbody: component,
      tr: component,
      td: component,
      th: component,
      span: component,
      div: component,
      pre: component,
      var: component,
      mark: component,
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
  .use(frontmatter, ['yaml'])
  .use(stripTranslateFrontmatter);

const deserializeHTML = async (html) => {
  const { contents } = await processor.process(html);

  return contents.trim();
};

module.exports = deserializeHTML;
