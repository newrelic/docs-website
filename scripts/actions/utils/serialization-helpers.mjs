import { findAttribute } from '../../../codemods/utils/mdxast.js';
import omit from 'lodash';
import toMDAST from 'remark-parse10';
import remarkMdx from 'remark-mdx2.3';
import { unified } from 'unified11';
import visit from 'unist-util-visit';

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
  .use(removeParagraphs);

const serializeAttributeValue = (state, attribute) => {
  if (typeof attribute === 'string') {
    return { type: 'text', value: attribute };
  }

  if (attribute.type === 'mdxJsxAttributeValueExpression') {
    const root = attributeProcessor.parse(attribute.value);
    const { children } = attributeProcessor.runSync(root);
    const childrenWithRefactoredMdxTextExpression = children[0].children.map(
      (child) => {
        if (child.type === 'mdxTextExpression') {
          return { ...child, value: `{${child.value}}` };
        }
        return child;
      }
    );
    return serializeComponent(state, {
      ...children[0],
      children: childrenWithRefactoredMdxTextExpression,
    });
  }

  throw new Error('Unable to handle attribute');
};

const serializeTextProp = (state, node, propName) => {
  const attribute = findAttribute(propName, node);

  if (!attribute) {
    return;
  }
  return {
    type: 'element',
    tagName: 'div',
    properties: { 'data-type': 'prop', 'data-prop': propName },
    children: [serializeAttributeValue(state, attribute)],
  };
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
  state,
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
  const inferredTagName = node.type === 'mdxJsxTextElement' ? 'span' : 'div';
  return {
    type: 'element',
    tagName: tagName || inferredTagName,
    properties: stripNulls({
      'data-type': 'component',
      'data-component': identifyComponent ? getComponentName(node) : null,
      'data-props': serializeProps(node),
      class: classNames,
    }),
    children: textAttributes
      .map((name) => serializeTextProp(state, node, name))
      .concat(
        wrapChildren
          ? node.children.length && {
              type: 'element',
              position: node.position,
              tagName: inferredTagName,
              properties: { 'data-type': 'prop', 'data-prop': 'children' },
              children: state.all(node),
            }
          : state.all(node)
      )
      .filter(Boolean),
  };
};

const getComponentName = (node) =>
  node.name === null ? 'React.Fragment' : node.name;

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

export {
  createJsonStr,
  serializeComponent,
  serializeProps,
  serializeTextProp,
  serializeJSValue,
  serializeAttributeValue,
};
