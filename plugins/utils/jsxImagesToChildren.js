const visit = require('unist-util-visit');
const {
  isMdxElement,
  parseImport,
  findAttribute,
  removeAttribute,
} = require('../../codemods/utils/mdxast');
const { mdxBlockElement } = require('../../codemods/utils/mdxast-builder');
const toMDAST = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkMdxjs = require('remark-mdxjs');
const unified = require('unified');
const { set } = require('lodash');

const removeParagraphs = () => (tree) => {
  visit(tree, 'paragraph', (node, idx, parent) => {
    parent.children.splice(idx, 1, ...node.children);
  });
};

const findAttributeNode = (attrName, node) => {
  if (!node.attributes) {
    return null;
  }
  const attribute = node.attributes.find((attr) => attr.name === attrName);
  return attribute;
};

const isAttributeMdxValueExpression = (attrName, node) => {
  const name = findAttributeNode(attrName, node);
  return name && name.value.type === 'mdxValueExpression';
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const jsxPropToElement = (attrName, node) => {
  const {
    value: { value: jsx },
  } = findAttributeNode(attrName, node);

  const root = attributeProcessor.parse(jsx);
  const { children } = attributeProcessor.runSync(root);
  const element = mdxBlockElement(
    `${node.name}${capitalize(attrName)}`,
    [],
    children
  );
  return element;
};

const attributeProcessor = unified()
  .use(toMDAST)
  .use(remarkMdx)
  .use(remarkMdxjs)
  .use(removeParagraphs);

const jsxImagesToChildren = () => (tree) => {
  const imageImports = {};

  visit(
    tree,
    (node) => node.type === 'import',
    (node) => {
      const { expression, path } = parseImport(node);
      imageImports[expression] = path;
    }
  );

  visit(
    tree,
    (node) => {
      if (isMdxElement('Collapser', node)) {
        return isAttributeMdxValueExpression('title', node);
      }
    },
    (node) => {
      const collapserTitle = jsxPropToElement('title', node);
      node.children.unshift(collapserTitle);
      removeAttribute('title', node);
    }
  );

  visit(
    tree,
    (node) => {
      if (isMdxElement('TechTile', node)) {
        return isAttributeMdxValueExpression('icon', node);
      }
    },
    (node) => {
      const techTileIcon = jsxPropToElement('icon', node);
      node.children.unshift(techTileIcon);
      removeAttribute('icon', node);
    }
  );

  visit(
    tree,
    (node) => isMdxElement('img', node) && findAttribute('src', node),
    (node) => {
      const src = findAttribute('src', node);
      node.type = 'image';
      node.url =
        src.type === 'mdxValueExpression' ? imageImports[src.value] : src;

      set(node, 'title', findAttribute('title', node));
      set(node, 'alt', findAttribute('alt', node));
      const style = findAttribute('style', node);

      style &&
        set(
          node,
          'data.style',
          style.value
            .replace(/[{}]/g, '')
            .replaceAll(`'`, '')
            .replaceAll(`"`, '')
            .replaceAll(',', ';')
            .trim('')
        );

      const className = findAttribute('class', node);

      className && set(node, 'data.className', className);

      delete node.name;
      delete node.attributes;
      delete node.children;
    }
  );
};

module.exports = jsxImagesToChildren;
