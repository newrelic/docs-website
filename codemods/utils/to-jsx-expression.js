const {
  mdxAttribute,
  mdxSpanElement,
  mdxSpanExpression,
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

const escape = (str) => {
  return str.indexOf('{') === -1
    ? text(str)
    : // this implementation assumes that text with an opening '{' have a
      // matching closing '}'. MDX v2 currently fails to parse '{' in a string
      // without a closing '}', so we'll need to handle this differently if we
      // end up having cases where the text contents only include an opening '{'
      // https://github.com/mdx-js/mdx/issues/1081
      mdxSpanExpression(`'${str.replace("'", "\\'")}'`);
};

const TRANSFORMERS = {
  paragraph: transformChildren,
  inlineCode: (node) => mdxSpanElement('InlineCode', [], [escape(node.value)]),
  text: (node) => node,
  strong: (node) => mdxSpanElement('strong', [], transformChildren(node)),
  link: (node) => {
    const isExternal = node.url.startsWith('http');

    return mdxSpanElement(
      isExternal ? 'ExternalLink' : 'Link',
      [mdxAttribute(isExternal ? 'href' : 'to', node.url)],
      transformChildren(node)
    );
  },
};

module.exports = toJSXExpression;
