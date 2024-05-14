const visit = require('unist-util-visit');
const { get, set } = require('lodash');
const { isHeadingWithCustomId, getIdAndText } = require('./heading');

const visitor = () => (tree) => {
  visit(tree, isHeadingWithCustomId, (heading) => {
    const { id, text } = getIdAndText(heading);

    set(heading, 'data.id', id);
    set(heading, 'data.htmlAttributes.id', id);
    set(heading, 'data.hProperties.id', id);
    set(heading, 'children[0].value', text);

    const firstChild = heading.children[0];

    // patch id on link created from gatsby-remark-autolink-headers
    if (
      firstChild.type === 'link' &&
      get(firstChild, 'data.hProperties.class', '').includes('anchor')
    ) {
      firstChild.url = `#${id}`;
    }
  });
};

module.exports = visitor;
