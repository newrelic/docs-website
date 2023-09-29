module.exports = async ({ markdownAST }) => {
  const { visit } = await import('unist-util-visit');
  const { JSDOM } = await import('jsdom');
  const { fromDom } = await import('hast-util-from-dom');

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
