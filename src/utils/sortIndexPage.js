const unified = require('unified');
const visit = require('unist-util-visit');
const parse = require('rehype-parse');
const stringify = require('rehype-stringify');
const yaml = require('js-yaml');
// const { chunk, curry, get, takeWhile } = require('lodash');
const { curry, get } = require('lodash');
const findDeepIndex = require('./findDeepIndex');

// const isRoot = (node) => get(node, 'type', '') === 'root';
const isTag = curry((tagName, node) => get(node, 'tagName', '') === tagName);

// const isRootOrSection = (node) => isRoot(node) || isTag('section', node);

const getValue = (str, fallback = '') => (node) => get(node, str, fallback);

const getTextFromLi = getValue('children[0].children[0].value');
const getLinkFromLi = getValue('children[0].properties.href');
// const getTextFromH = getValue('children[0].value');

// const isHeading = (node) => /h[1-9]/.test(get(node, 'tagName', ''));

const findByPath = (node) => ({ path }) => getLinkFromLi(node) === path;
// const findByTitle = (node) => ({ title }) => getTextFromH(node) === title;

/**
 * Groups sections together. A section is a heading tag (e.g. <h3>) followed
 * by an unordered list (<ul>). If the input tree is a flat list of nodes (in
 * the "children" array), this will pair up each list with it's heading.
 *
 * @example
 * input tree (simplified): <h2> <h3> <ul> <h3> <ul>
 * output tree (simplified): <h2> <section><h3><ul><h3><ul></section>
 *
 * @note this might not work with deeply nested sections.
 */
/*
const groupBySection = () => (tree) => {
  const section = { type: 'element', tagName: 'section', properties: {} };

  visit(tree, isRoot, (node) => {
    const newChildren = node.children.reduce((acc, child, index) => {
      const nextChild = node.children[index + 1];

      // if the child is a heading, and the next is a heading, build up a section and add it
      if (isHeading(child) && isHeading(nextChild)) {
        // get all the elements until the next instance of this heading
        const fromSectionStart = node.children.slice(index + 1);
        const children = takeWhile(fromSectionStart, (el) => {
          return get(el, 'tagName', '') !== child.tagName;
        });
        // return the current acc, the current child (section heading), and the section
        return [...acc, child, { ...section, children }];
      }

      // otherwise, just return acc
      return acc;
    }, []);

    // if we have sections, set add them - otherwise just return everything
    if (newChildren.length > 0) {
      node.children = newChildren;
    }
  });
};
*/

const sortListAlphabetically = () => (tree) => {
  visit(tree, isTag('ul'), (node) => {
    node.chilren = node.children.sort((a, b) =>
      getTextFromLi(a).localeCompare(getTextFromLi(b))
    );
  });
};

/*
const sortSectionsAlphabetically = () => (tree) => {
  visit(tree, isRootOrSection, (node) => {
    node.children = chunk(node.children, 2)
      .sort(([a], [b]) => getTextFromH(a).localeCompare(getTextFromH(b)))
      .reduce((acc, subsection) => [...acc, ...subsection], []);
  });
};
*/

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

/*
const sortSectionsByNav = (nav) => () => (tree) => {
  visit(tree, isRootOrSection, (node) => {
    node.children = chunk(node.children, 2)
      .map(([h2, ul]) => {
        const index = findDeepIndex(nav, findByTitle(h2), 'pages');
        return [h2, ul, index];
      })
      .sort((a, b) => a[2] - b[2])
      .reduce((acc, [h2, ul]) => [...acc, h2, ul], []);
  });
};

const removeSections = () => (tree) => {
  visit(tree, isRoot, (node) => {
    node.children = node.children.reduce((acc, child) => {
      return isTag('section', child)
        ? [...acc, ...child.children]
        : [...acc, child];
    }, []);
  });
};
*/

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
    // .use(groupBySection)
    // .use(sortSectionsAlphabetically)
    .use(sortListAlphabetically)
    .use(sortListByNav(nav))
    // .use(sortSectionsByNav(nav))
    // .use(removeSections)
    .use(stringify)
    .processSync(html);

  return contents;
};

module.exports = sortIndexPage;
