const convert = require('unist-util-is/convert');
const h = require('hastscript');
const u = require('unist-builder');
const html = require('rehype-stringify');
const unified = require('unified');
const visit = require('unist-util-visit');
const { sentenceCase } = require('./string');
const { last } = require('lodash');

const isDirectory = convert('directory');
const isList = convert({ type: 'element', tagName: 'ul' });

const depthOf = (node, dir) =>
  node.path.replace(new RegExp(`${dir.path}\\/`, '')).split('/').length;

const generateHTML = (dir) => {
  const tree = u('root', []);

  visit(
    dir,
    (node) => node !== dir,
    (node) => {
      if (isDirectory(node)) {
        // Start headings at level 2
        const depth = depthOf(node, dir) + 1;

        tree.children.push(h(`h${depth}`, sentenceCase(node.basename)));

        return;
      }

      if (!node.data.fields) {
        // eslint-disable-next-line no-console
        console.log('Found node with missing fields', JSON.stringify(node));
      }

      const lastChild = last(tree.children);
      const linkListItem = h('li', [
        h('a', { href: node.data.fields.slug }, [
          node.data.frontmatter.title.trim(),
        ]),
      ]);

      if (lastChild && isList(lastChild)) {
        lastChild.children.push(linkListItem);
      } else {
        tree.children.push(h('ul', [linkListItem]));
      }
    }
  );

  return unified().use(html).stringify(tree);
};

module.exports = generateHTML;
