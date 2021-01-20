const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const { get, set } = require('lodash');
const { isHeadingWithCustomId, getId } = require('./heading');

const visitor = () => (tree) => {
  visit(tree, isHeadingWithCustomId, (heading) => {
    const id = getId(heading);

    set(heading, 'data.id', id);
    set(heading, 'data.htmlAttributes.id', id);
    set(heading, 'data.hProperties.id', id);

    remove(heading, 'linkReference');

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
