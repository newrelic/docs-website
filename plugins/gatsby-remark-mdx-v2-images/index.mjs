import { visit } from 'unist-util-visit';
import { JSDOM } from 'jsdom';
import { fromDom } from 'hast-util-from-dom';

export default ({ markdownAST }) => {
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
