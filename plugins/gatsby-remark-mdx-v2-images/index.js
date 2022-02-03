/*
  `hast-util-from-dom` have different export depending on CJS or ESM
  context - requiring CJS (regular build) will return a function directly,
  requiring ESM (what is currently being bundled for rendering engines
  which are used by DSG) will return object with `default` field which is
  a function. `preferDefault` helper will just use `.default` if available,
  but will fallback to entire export if not available
*/
const preferDefault = (m) => (m && m.default) || m;
const visit = require('unist-util-visit');
const { JSDOM } = require('jsdom');
const fromDom = preferDefault(require('hast-util-from-dom'));

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node) => {
    if (!matchesGatsbyImage(node.value)) {
      return;
    }

    const { document } = new JSDOM(node.value).window;
    const tree = fromDom(document.body.firstChild);

    node.type = 'jsx';
    node.data = {
      hName: tree.tagName,
      hProperties: tree.properties,
      hChildren: tree.children,
    };
  });

  return markdownAST;
};

const matchesGatsbyImage = (rawHTML) =>
  rawHTML.match(/class=['"]gatsby-resp-image/);
