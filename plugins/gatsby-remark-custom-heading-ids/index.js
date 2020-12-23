const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const { last } = require('lodash');

const patch = (obj, key, value) => {
  if (!obj[key]) {
    obj[key] = value;
  }

  return obj[key];
};

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'heading', (heading) => {
    if (heading.children.length === 0) {
      return;
    }

    const lastChild = last(heading.children);
    const match = /^(.*?)\s*\[\[#([\w-]+)\]\]$/.exec(toString(lastChild));

    if (!match) {
      return;
    }

    const [, text, id] = match;

    // remove the custom ID from the original text
    if (text) {
      lastChild.value = text;
    } else if (heading.children.length > 1) {
      heading.children.pop();
    }

    const data = patch(heading, 'data', {});

    patch(data, 'hProperties', {});
    patch(data.hProperties, 'id', id);
  });

  return markdownAST;
};
