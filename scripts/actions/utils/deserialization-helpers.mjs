import {
  mdxJsxAttribute,
  mdxJsxAttributeValueExpression,
} from '../../../codemods/utils/mdxast-builder.js';

const PHRASING_TYPES = new Set([
  'text',
  'emphasis',
  'strong',
  'delete',
  'inlineCode',
  'link',
  'linkReference',
  'image',
  'imageReference',
  'break',
  'html',
  'mdxJsxTextElement',
  'mdxTextExpression',
  'footnoteReference',
]);

const isBlankText = (node) => node.type === 'text' && !node.value.trim();

// `mdast-util-mdx-jsx` puts a blank line between the children of a flow
// element. Phrasing children directly under e.g. a `<td>` would come out as
//   (for example,\n\n<code>x</code>\n\n). more text
// which MDX parses as three paragraphs, turning `<code>` into a block that
// crashes `CodeBlock` in the locale build. Grouping each run of phrasing
// nodes into one paragraph keeps it on a single line.
const wrapPhrasingRuns = (children) => {
  const result = [];
  let run = [];

  const flush = () => {
    if (run.some((node) => !isBlankText(node))) {
      result.push({ type: 'paragraph', children: run });
    } else {
      result.push(...run);
    }
    run = [];
  };

  children.forEach((child) => {
    if (PHRASING_TYPES.has(child.type)) {
      run.push(child);
    } else {
      flush();
      result.push(child);
    }
  });
  flush();

  return result;
};

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

  const nodeType = type || inferredType;
  const children =
    childrenNode && hasChildrenProp ? state.all(childrenNode) : [];

  const newNode = {
    type: nodeType,
    name: name === 'React.Fragment' ? null : name,
    attributes,
    children:
      nodeType === 'mdxJsxFlowElement' ? wrapPhrasingRuns(children) : children,
  };

  return newNode;
};

export { deserializeComponent, deserializeJSValue };
