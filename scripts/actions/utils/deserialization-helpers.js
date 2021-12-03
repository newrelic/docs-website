const deserializeJSValue = (value) => JSON.parse(Buffer.from(value, 'base64'));
const all = require('hast-util-to-mdast/lib/all');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const stringify = require('remark-stringify');
const unified = require('unified');
const {
  mdxAttribute,
  mdxValueExpression,
} = require('../../../codemods/utils/mdxast-builder');
const visit = require('unist-util-visit');
const u = require('unist-builder');

const hasChildren = (node) => node.children && node.children.length;

const inlineCodeAttribute = () => (tree) => {
  visit(tree, 'inlineCode', (node) => {
    node.type = 'mdxSpanElement';
    node.name = 'InlineCode';
    node.children = [u('text', node.value)];
  });
};

const attributeProcessor = unified()
  .use(stringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(inlineCodeAttribute);

const deserializeAttributeValue = (h, node) => {
  if (node.type === 'text') {
    return node.value;
  }

  if (node.type === 'element') {
    const tree = deserializeComponent(h, node, { type: 'mdxSpanElement' });
    const transformedTree = attributeProcessor.runSync(tree);

    return mdxValueExpression(attributeProcessor.stringify(transformedTree));
  }

  throw new Error('Unable to deserialize attribute');
};

const deserializeComponent = (
  h,
  node,
  { type, hasChildrenProp = true } = {}
) => {
  console.log('top');
  const { dataComponent, dataProps } = node.properties;
  const name = dataComponent || node.tagName;
  const props = dataProps ? deserializeJSValue(dataProps) : [];
  const inferredType =
    node.tagName === 'span' ? 'mdxSpanElement' : 'mdxBlockElement';

  const hasWrappedChildren = hasChildren(node)
    ? node.children.some(
        (node) => node.properties && node.properties.dataProp === 'children'
      )
    : false;

  const textProps = hasWrappedChildren
    ? node.children.filter(
        (child) => child.properties && child.properties.dataProp !== 'children'
      )
    : [];

  const childrenNode = hasWrappedChildren
    ? node.children.find((child) => child.properties.dataProp === 'children')
    : node;

  const attributes = textProps.reduce((attributes, node) => {
    const { dataProp: name } = node.properties;
    const value = deserializeAttributeValue(h, node.children[0]);
    const idx = attributes.findIndex((attr) => attr.name === name);

    return idx === -1
      ? [...attributes, mdxAttribute(name, value)]
      : [
          ...attributes.slice(0, idx),
          mdxAttribute(name, value),
          ...attributes.slice(idx + 1),
        ];
  }, props);

  const newNode = h(
    node,
    type || inferredType,
    {
      name: name === 'React.Fragment' ? null : name,
      attributes,
    },
    childrenNode && hasChildrenProp ? all(h, childrenNode) : []
  );

  console.log('deserialized node', newNode);
  return newNode;
};

module.exports = { deserializeComponent, deserializeJSValue };
