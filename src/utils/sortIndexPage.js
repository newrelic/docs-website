const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const { get } = require('lodash');

const isTag = (tagName) => (node) => node.tagName === tagName;

// Assumes <li><a>Text</a></li>
const getTextFromLi = (node) => get(node, 'children[0].children[0].value');

const sortAlphabetically = () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.chilren = node.children.sort((a, b) => {
      return getTextFromLi(a) - getTextFromLi(b);
    });
  });
};

const processor = unified().use(parse).use(sortAlphabetically).use(stringify);

const sortIndexPage = async (html, nav) => {
  const { contents } = await processor.process(html);

  return contents;
};

module.exports = sortIndexPage;
