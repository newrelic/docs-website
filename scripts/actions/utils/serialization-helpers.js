const { findAttribute } = require('../../../codemods/utils/mdxast');
const { omit } = require('lodash');
const all = require('mdast-util-to-hast/lib/all');
const u = require('unist-builder');
const toMDAST = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const unified = require('unified');
const visit = require('unist-util-visit');

const removeParagraphs = () => (tree) => {
  visit(tree, 'paragraph', (node, idx, parent) => {
    parent.children.splice(idx, 1, ...node.children);
  });
};

const attributeProcessor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(removeParagraphs);

const serializeAttributeValue = (h, attribute) => {
  if (typeof attribute === 'string') {
    return u('text', attribute);
  }

  if (attribute.type === 'mdxValueExpression') {
    const root = attributeProcessor.parse(attribute.value);
    const { children } = attributeProcessor.runSync(root);

    return serializeComponent(h, children[0]);
  }

  throw new Error('Unable to handle attribute');
};

const serializeTextProp = (h, node, propName) => {
  const attribute = findAttribute(propName, node);

  console.log('serailizeTextProp: ', attribute);

  if (!attribute) {
    return;
  }

  const result = h(
    node,
    'div',
    { 'data-type': 'prop', 'data-prop': propName },
    [serializeAttributeValue(h, attribute)]
  );

  console.log('serailizeTextProp Result:', result);

  return result;
};

const serializeJSValue = (value) => {
  console.log('seralizeJSValue', value);
  return Buffer.from(JSON.stringify(value)).toString('base64');
};

const serializeProps = (node) => {
  console.log('serializeProps');
  if (node.attributes.length === 0) {
    console.log('serializeProps - no attributes');
    return null;
  }

  return serializeJSValue(
    node.attributes.map((attribute) => {
      return omit(attribute, ['position']);
    })
  );
};

const serializeComponent = (
  h,
  node,
  {
    tagName,
    textAttributes = [],
    wrapChildren = true,
    identifyComponent = true,
    children = node.children || [],
  } = {}
) => {
  node.children = children;
  const inferredTagName = node.type === 'mdxSpanElement' ? 'span' : 'div';

  const result = h(
    node,
    tagName || inferredTagName,
    stripNulls({
      'data-type': 'component',
      'data-component': identifyComponent ? getComponentName(node) : null,
      'data-props': serializeProps(node),
    }),
    textAttributes
      .map((name) => serializeTextProp(h, node, name))
      .concat(
        wrapChildren && node.children.length
          ? h(
              node.position,
              inferredTagName,
              { 'data-type': 'prop', 'data-prop': 'children' },
              all(h, node)
            )
          : all(h, node)
      )
      .filter(Boolean)
  );

  console.log('serializeComponent result:', result);
  return result;
};

const getComponentName = (node) => {
  console.log('getComponent:', node);
  return node.name === null ? 'React.Fragment' : node.name;
};

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

module.exports = {
  serializeComponent,
  serializeProps,
  serializeTextProp,
  serializeJSValue,
};
