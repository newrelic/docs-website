const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const {
  removeAttribute,
  isMdxBlockElement,
  hasClassName,
  removeChild,
  setAttribute,
} = require('./utils/mdxast');
const {
  stringify,
  mdxAttribute,
  mdxValueExpression,
  mdxSpanElement,
  mdxBlockElement,
} = require('./utils/mdxast-builder');
const { root, text } = require('mdast-builder');

const clamshells = () => (tree, file) => {
  visit(
    tree,
    (node) =>
      isMdxBlockElement('dl', node) && hasClassName('clamshell-list', node),
    (dl) => {
      dl.name = 'CollapserGroup';
      removeAttribute('className', dl);

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dt', node) && parent === dl,
        (dt, idx) => {
          const dd = dl.children[idx + 1];
          const isPlainTextTitle =
            dt.children.length === 1 &&
            dt.children[0].type === 'paragraph' &&
            dt.children[0].children.every((node) => node.type === 'text');

          dt.name = 'Collapser';

          if (isPlainTextTitle) {
            setAttribute('title', toString(dt), dt);
          } else {
            setAttribute(
              'title',
              mdxValueExpression(stringify(toJSXExpression(dt, file)).trim()),
              dt
            );
          }

          dt.children = dd.children;
        }
      );

      visit(
        dl,
        (node, _idx, parent) => isMdxBlockElement('dd', node) && parent === dl,
        (dd) => {
          removeChild(dd, dl);
        }
      );
    }
  );
};

const toJSXExpression = (node, file) => {
  const children = transformChildren(node, file);
  const tree = root(
    children.length === 1 ? children : [mdxSpanElement(null, [], children)]
  );

  console.dir(tree, { depth: null });

  return tree;
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

module.exports = clamshells;
