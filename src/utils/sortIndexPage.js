const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const { chunk, get } = require('lodash');

const isRoot = (node) => node.type === 'root';
const isTag = (tagName) => (node) => node.tagName === tagName;

// Assumes <li><a>Text</a></li>
const getTextFromLi = (node) => get(node, 'children[0].children[0].value', '');

const getTextFromH2 = (node) => get(node, 'children[0].value', '');

const sortLisAlphabetically = () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.chilren = node.children.sort((a, b) =>
      getTextFromLi(a).localeCompare(getTextFromLi(b))
    );
  });
};

// Assumes <h2 /><ul /><h2 /><ul />
const sortSectionsAlphabetically = () => (tree) => {
  visit(tree, isRoot, (node) => {
    node.children = chunk(node.children, 2)
      .sort((a, b) => getTextFromH2(a[0]).localeCompare(getTextFromH2(b[0])))
      .reduce((acc, section) => [...acc, ...section], []);
  });
};

const processor = unified()
  .use(parse, { fragment: true })
  .use(sortSectionsAlphabetically)
  .use(sortLisAlphabetically)
  .use(stringify);

const sortIndexPage = async (html, nav) => {
  const { contents } = await processor.process(html);

  return contents;
};

module.exports = sortIndexPage;
