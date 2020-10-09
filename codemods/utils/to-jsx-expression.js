const { mdxAttribute, mdxSpanElement } = require('./mdxast-builder');
const { root, text } = require('mdast-builder');

const toJSXExpression = (node, file) => {
  const children = transformChildren(node, file);

  return root(
    children.length === 1 ? children : [mdxSpanElement(null, [], children)]
  );
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
  link: (node) => {
    const isRelative = node.url.startsWith('http');

    return mdxSpanElement(
      isRelative ? 'Link' : 'a',
      [mdxAttribute(isRelative ? 'to' : 'href', node.url)],
      node.children
    );
  },
};

module.exports = toJSXExpression;
