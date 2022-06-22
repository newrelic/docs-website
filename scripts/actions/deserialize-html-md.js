const unified = require('unified');
const parse = require('rehype-parse');
const rehype2remark = require('rehype-remark');
const handlers = require('./utils/handlers');
const defaultHandlers = require('hast-util-to-mdast/lib/handlers');
const stringify = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
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
      div: component,
    },
  })
  .use(stringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(frontmatter, ['yaml'])
  .use(stripTranslateFrontmatter);

const deserializeHTMLMd = async (html) => {
  const { contents } = await processor.process(html);
  return contents.trim();
};

module.exports = deserializeHTMLMd;
