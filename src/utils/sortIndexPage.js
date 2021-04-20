const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const yaml = require('js-yaml');
const { chunk, get } = require('lodash');
const findDeepIndex = require('./findDeepIndex');

const isRoot = (node) => node.type === 'root';
const isTag = (tagName) => (node) => node.tagName === tagName;

const getValue = (str, fallback = '') => (node) => get(node, str, fallback);

const getTextFromLi = getValue('children[0].children[0].value');
const getLinkFromLi = getValue('children[0].properties.href');
const getTextFromH2 = getValue('children[0].value');

const findByPath = (node) => ({ path }) => getLinkFromLi(node) === path;

const sortListAlphabetically = () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.chilren = node.children.sort((a, b) =>
      getTextFromLi(a).localeCompare(getTextFromLi(b))
    );
  });
};

const sortSectionsAlphabetically = () => (tree) => {
  visit(tree, isRoot, (node) => {
    node.children = chunk(node.children, 2)
      .sort((a, b) => getTextFromH2(a[0]).localeCompare(getTextFromH2(b[0])))
      .reduce((acc, section) => [...acc, ...section], []);
  });
};

const addIndexFromNav = (nav) => (child) => {
  const index = findDeepIndex(nav, findByPath(child), 'pages');
  return { ...child, index };
};

const sortListByNav = (nav) => () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.children = node.children
      .map(addIndexFromNav(nav))
      .sort((a, b) => a.index - b.index);
  });
};

const sortIndexPage = async (html, nav = []) => {
  if (!html) throw new Error('Missing arguments');

  const navData = { pages: nav.map(yaml.safeLoad) };

  const processor = unified()
    .use(parse, { fragment: true })
    .use(sortSectionsAlphabetically)
    .use(sortListAlphabetically)
    .use(sortListByNav(navData))
    .use(stringify);

  const { contents } = await processor.process(html);

  return contents;
};

module.exports = sortIndexPage;
