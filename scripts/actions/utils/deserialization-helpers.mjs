import { toMdast } from 'hast-util-to-mdast';
import remarkMdx from 'remark-mdx';
import remarkMdxjs from 'remark-mdxjs';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import {
  mdxAttribute,
  mdxValueExpression,
} from '../../../codemods/utils/mdxast-builder.mjs';
import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';

export const deserializeJSValue = (value) =>
  JSON.parse(Buffer.from(value, 'base64'));

const hasChildren = (node) => node.children && node.children.length;

const inlineCodeAttribute = () => (tree) => {
  visit(tree, 'inlineCode', (node) => {
    node.type = 'mdxSpanElement';
    node.name = 'InlineCode';
    node.children = [u('text', node.value)];
  });
};

const attributeProcessor = unified()
  .use(remarkStringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(inlineCodeAttribute);

export const deserializeAttributeValue = (h, node) => {
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

export const deserializeComponent = (
  h,
  node,
  { type, hasChildrenProp = true } = {}
) => {
  const { dataComponent, dataProps } = node.properties;
  const name = dataComponent || node.tagName;
  const props = dataProps ? deserializeJSValue(dataProps) : [];
  const inferredType =
    node.tagName === 'span' ? 'mdxJsxTextElement' : 'mdxJsxFlowElement';
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
    childrenNode && hasChildrenProp ? toMdast(childrenNode).children : []
  );
  return newNode;
};
