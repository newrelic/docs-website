const { findAttribute } = require('../utils/mdxast');
const { omit } = require('lodash');
const all = require('mdast-util-to-hast/lib/all');
const u = require('unist-builder');
const toMDAST = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const unified = require('unified');

const attributeProcessor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs);

const serializeAttributeValue = (h, attribute) => {
  if (typeof attribute === 'string') {
    return u('text', attribute);
  }

  if (attribute.type === 'mdxValueExpression') {
    const { children } = attributeProcessor.parse(attribute.value);

    return serializeComponent(h, children[0]);
  }

  throw new Error('Unable to handle attribute');
};

const serializeTextProp = (h, node, propName) => {
  const attribute = findAttribute(propName, node);

  if (!attribute) {
    return;
  }

  return h(node, 'div', { 'data-prop': propName }, [
    serializeAttributeValue(h, attribute),
  ]);
};

const serializeProps = (node) => {
  return Buffer.from(
    JSON.stringify(
      node.attributes.map((attribute) => {
        return omit(attribute, ['position']);
      })
    )
  ).toString('base64');
};

const serializeComponent = (
  h,
  node,
  { tagName = 'div', textAttributes = [] } = {}
) => {
  return h(
    node,
    tagName,
    {
      'data-component': node.name === null ? 'React.Fragment' : node.name,
      'data-props': serializeProps(node),
    },
    [
      ...textAttributes.map((name) => serializeTextProp(h, node, name)),
      node.children &&
        node.children.length &&
        h(node.position, 'div', { 'data-prop': 'children' }, all(h, node)),
    ].filter(Boolean)
  );
};

module.exports = { serializeComponent, serializeProps, serializeTextProp };
