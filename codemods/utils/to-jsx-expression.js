const {
  mdxAttribute,
  mdxSpanElement,
  mdxValueExpression,
} = require('./mdxast-builder');
const { root, text } = require('mdast-builder');
const stringify = require('./mdxast-stringify');

const toJSXExpression = (node, file) => {
  const children = transformChildren(node, file);
  const tree = root(
    children.length === 1 ? children : [mdxSpanElement(null, [], children)]
  );

  return mdxValueExpression(stringify(tree).trim());
};

const transformChildren = (node, file) => {
  return node.children
    .flatMap((child) => {
      const transformer = TRANSFORMERS[child.type];

      if (!transformer) {
        file.message(
          `Converting to JSX expression of unknown type: '${child.type}'`,
          child.position.start,
          'clamshells'
        );
        return;
      }

      return transformer(child, file);
    })
    .filter(Boolean);
};

const TRANSFORMERS = {
  paragraph: transformChildren,
  inlineCode: (node) => mdxSpanElement('code', [], [text(node.value)]),
  text: (node) => node,
  strong: (node) => mdxSpanElement('strong', [], transformChildren(node)),
  link: (node) => {
    const isExternal = node.url.startsWith('http');

    return mdxSpanElement(
      isExternal ? 'a' : 'Link',
      [mdxAttribute(isExternal ? 'href' : 'to', node.url)],
      transformChildren(node)
    );
  },
};

module.exports = toJSXExpression;
