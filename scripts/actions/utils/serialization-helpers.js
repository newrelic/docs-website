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

// `UserJourneyControls` has the `nextStep` and `prevStep` props,
// which take objects. when we try to serialize MDX, those props
// are just strings that look like JS objects.
// this uses `eval` to "parse" them into actual JS objects,
// so we can `JSON.stringify them`.
const createJsonStr = (str) => JSON.stringify(eval(`const obj = ${str}; obj`));

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

  if (!attribute) {
    return;
  }

  return h(node, 'div', { 'data-type': 'prop', 'data-prop': propName }, [
    serializeAttributeValue(h, attribute),
  ]);
};

const serializeJSValue = (value) =>
  Buffer.from(JSON.stringify(value)).toString('base64');

const serializeProps = (node) => {
  if (node.attributes.length === 0) {
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
    classNames = null,
    textAttributes = [],
    wrapChildren = true,
    identifyComponent = true,
    children = node.children || [],
  } = {}
) => {
  node.children = children;
  const inferredTagName = node.type === 'mdxSpanElement' ? 'span' : 'div';

  return h(
    node,
    tagName || inferredTagName,
    stripNulls({
      'data-type': 'component',
      'data-component': identifyComponent ? getComponentName(node) : null,
      'data-props': serializeProps(node),
      class: classNames,
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
};

const getComponentName = (node) =>
  node.name === null ? 'React.Fragment' : node.name;

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

module.exports = {
  createJsonStr,
  serializeComponent,
  serializeProps,
  serializeTextProp,
  serializeJSValue,
  serializeAttributeValue,
};
