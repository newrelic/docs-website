const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const yaml = require('js-yaml');
const { chunk, get } = require('lodash');
const findDeepIndex = require('./findDeepIndex');

const isRoot = (node) => get(node, 'type', '') === 'root';
const isTag = (tagName) => (node) => get(node, 'tagName', '') === tagName;

const getValue = (str, fallback = '') => (node) => get(node, str, fallback);

const getTextFromLi = getValue('children[0].children[0].value');
const getLinkFromLi = getValue('children[0].properties.href');
const getTextFromH2 = getValue('children[0].value');

const findByPath = (node) => ({ path }) => getLinkFromLi(node) === path;
const findByTitle = (node) => ({ title }) => getTextFromH2(node) === title;

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

const sortListByNav = (nav) => () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.children = node.children
      .map((child) => {
        const index = findDeepIndex(nav, findByPath(child), 'pages');
        return { ...child, index };
      })
      .sort((a, b) => a.index - b.index);
  });
};

const sortSectionsByNav = (nav) => () => (tree) => {
  visit(tree, isRoot, (node) => {
    node.children = chunk(node.children, 2)
      .map(([h2, ul]) => {
        const index = findDeepIndex(nav, findByTitle(h2), 'pages');
        return [h2, ul, index];
      })
      .sort((a, b) => a[2] - b[2])
      .reduce((acc, [h2, ul]) => [...acc, h2, ul], []);
  });
};

const sortIndexPage = (html, navYaml = []) => {
  if (!html) throw new Error('Missing arguments');

  const nav = { pages: navYaml.map(yaml.safeLoad) };

  return unified()
    .use(parse, { fragment: true })
    .use(sortSectionsAlphabetically)
    .use(sortListAlphabetically)
    .use(sortListByNav(nav))
    .use(sortSectionsByNav(nav))
    .use(stringify);
};

module.exports = sortIndexPage;
