import {
  mdxJsxAttribute,
  mdxJsxAttributeValueExpression,
} from '../../../codemods/utils/mdxast-builder.js';

const hasChildren = (node) => node.children && node.children.length;

const deserializeJSValue = (value) => JSON.parse(Buffer.from(value, 'base64'));

const deserializeAttributeValue = (state, node, processor) => {
  if (node.type === 'text') {
    return node.value;
  }

  if (node.type === 'element') {
    const tree = deserializeComponent(state, node);
    const transformedTree = processor.runSync(tree);

    return mdxJsxAttributeValueExpression(processor.stringify(transformedTree));
  }

  throw new Error('Unable to deserialize attribute');
};

const deserializeComponent = (
  state,
  node,
  { type, hasChildrenProp = true } = {},
  attributeProcessor
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
    const value = deserializeAttributeValue(
      state,
      node.children[0],
      attributeProcessor
    );
    const idx = attributes.findIndex((attr) => attr.name === name);

    return idx === -1
      ? [...attributes, mdxJsxAttribute(name, value)]
      : [
          ...attributes.slice(0, idx),
          mdxJsxAttribute(name, value),
          ...attributes.slice(idx + 1),
        ];
  }, props);

  const newNode = {
    type: type || inferredType,
    name: name === 'React.Fragment' ? null : name,
    attributes,
    children: childrenNode && hasChildrenProp ? state.all(childrenNode) : [],
  };

  return newNode;
};

export { deserializeComponent, deserializeJSValue };
