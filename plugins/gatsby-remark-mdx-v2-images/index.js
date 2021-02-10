const visit = require('unist-util-visit');
const { JSDOM } = require('jsdom');
const fromDom = require('hast-util-from-dom');

const parseStyleString = (string) =>
  string
    .split(/;\s*/)
    .filter(Boolean)
    .reduce((style, rule) => {
      const [property, value] = rule.split(/:\s*/);

      return { ...style, [property]: value };
    }, {});

const compileStyleObject = (styles) =>
  Object.entries(styles)
    .map((rule) => rule.join(': '))
    .join('; ');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', (node, _idx, parent) => {
    if (!matchesGatsbyImage(node.value)) {
      return;
    }

    const isBlockImage =
      parent.type === 'paragraph' && parent.children.length === 1;

    const { document } = new JSDOM(node.value).window;
    const tree = fromDom(document.body.firstChild);

    if (!isBlockImage) {
      const style = parseStyleString(tree.properties.style);

      style.display = 'inline-block';
      style.width = '100%';

      tree.properties.style = compileStyleObject(style);
    }

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
