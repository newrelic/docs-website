const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const yaml = require('js-yaml');
const { chunk, get } = require('lodash');

const isRoot = (node) => node.type === 'root';
const isTag = (tagName) => (node) => node.tagName === tagName;

const getValue = (str, fallback = '') => (node) => get(node, str, fallback);

const getTextFromLi = getValue('children[0].children[0].value');
const getLinkFromLi = getValue('children[0].properties.href');
const getTextFromH2 = getValue('children[0].value');

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

// TODO: make this work recursively (find the relative index wherever it is)
const getIndexByPath = (pages, path) => {
  pages.findIndex((page) => page.path === path);
};

const sortListByNav = (nav) => () => (tree) => {
  if (!nav.length) return;

  const navData = nav.map(yaml.safeLoad);

  visit(tree, isTag('ul'), (node) => {
    // TODO: sort by index, if present (or leave where it is)
  });
};

const sortIndexPage = async (html, nav = []) => {
  if (!html) throw new Error('Missing arguments');

  const processor = unified()
    .use(parse, { fragment: true })
    .use(sortSectionsAlphabetically)
    .use(sortListAlphabetically)
    .use(sortListByNav(nav))
    .use(stringify);

  const { contents } = await processor.process(html);

  return contents;
};

module.exports = sortIndexPage;
