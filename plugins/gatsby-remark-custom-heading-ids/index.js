const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const { last, get, set } = require('lodash');

const CUSTOM_ID = /^#[\w-]+$/;

const isHeadingWithCustomId = (node) => {
  const lastChild = last(node.children);

  return (
    node.type === 'heading' &&
    lastChild.type === 'linkReference' &&
    CUSTOM_ID.test(lastChild.label)
  );
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, isHeadingWithCustomId, (heading) => {
    const { label: id } = last(heading.children);

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
      firstChild.url = id;
    }
  });

  return markdownAST;
};
