const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const yaml = require('js-yaml');
const { chunk, curry, get } = require('lodash');
const findDeepIndex = require('./findDeepIndex');

const isRoot = (node) => get(node, 'type', '') === 'root';
const isTag = curry((tagName, node) => get(node, 'tagName', '') === tagName);

const getValue = (str, fallback = '') => (node) => get(node, str, fallback);

const getTextFromLi = getValue('children[0].children[0].value');
const getLinkFromLi = getValue('children[0].properties.href');
const getTextFromH2 = getValue('children[0].value');

const findByPath = (node) => ({ path }) => getLinkFromLi(node) === path;
const findByTitle = (node) => ({ title }) => getTextFromH2(node) === title;

/**
 * Groups sections together. A section is a heading tag (e.g. <h3>) followed
 * by an unordered list (<ul>). If the input tree is a flat list of nodes (in
 * the "children" array), this will pair up each list with it's heading in a div.
 *
 * @example
 * input tree (simplified): <h2> <h3> <ul> <h3> <ul>
 * output tree (simplified): <h2> <div><h3><ul></div> <div><h3><ul></div>
 */
const groupBySection = () => (tree) => {
  visit(tree, isRoot, (node) => {
    node.children = node.children.reduce((acc, child, index) => {
      const nextChild = node.children[index + 1];

      // if the next node is a <ul>, let's add the current node the next to a div "container"
      if (nextChild && isTag('ul', nextChild)) {
        return [
          ...acc,
          { type: 'element', tagName: 'div', children: [child, nextChild] },
        ];
      }

      // if this node is a ul, skip it...otherwise this is an orphan heading, add it
      return isTag('ul', child) ? acc : [...acc, child];
    }, []);
    console.dir(node.children);
  });
};

const sortListAlphabetically = () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.chilren = node.children.sort((a, b) =>
      getTextFromLi(a).localeCompare(getTextFromLi(b))
    );
  });
};

// NOTE: this assumes <h2><ul>...
// This would fail with <h2><h3><ul>...
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

/**
 * Returns a processor that can be used to update the sort order of an
 * auto-generated index page.
 *
 * @example
 * const { contents } = await sortIndexPage(nav).process(html);
 *
 * @param {string} html The input HTML.
 * @param {string[]} [navYaml] An array of YAML file contents.
 * @returns {string} The updated HTML.
 */
const sortIndexPage = (html, navYaml = []) => {
  if (!html) throw new Error('Missing arguments');

  const nav = { pages: navYaml.map(yaml.safeLoad) };

  const { contents } = unified()
    .use(parse, { fragment: true })
    .use(groupBySection)
    /*
    // TODO: break into a hierarchy that reflects heading level
    .use(sortSectionsAlphabetically) // TODO: update this
    .use(sortListAlphabetically)
    .use(sortListByNav(nav))
    .use(sortSectionsByNav(nav)) // TODO: update this
    // TODO: flaten the tree into the format it was at the start
    */
    .use(stringify)
    .processSync(html);

  return contents;
};

module.exports = sortIndexPage;
