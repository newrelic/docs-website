const visit = require('unist-util-visit');
const { get, set } = require('lodash');
const { isHeadingWithCustomId, getId } = require('./heading');

// a heading with a custom id has two possible cases for its children.
//
// 1) normal heading text and then the id. example:
//   ```
//   ## hi there! [#some-id]
//   ```
//
// 2) heading with another node type and then the id. example:
//   ```
//   ## `hi there!` [#some-id]
//   ```
//
//   or
//
//   ```
//   ## **hi there!** [#some-id]
//   ```
//
// in the first case, the `heading` node only has one child —
// a `text` node — that contains the text and the custom id, like so:
//
// ```
//   children [
//     {
//       type: 'text',
//       value: 'hi there! [#some-id]',
//       position: { start: [Object], end: [Object] }
//     }
//   ]
// ```
//
// in the second case, the `heading` node has two children, like so:
//
// ```
//   children [
//     {
//       type: 'inlineCode',
//       value: 'hi there!',
//       position: { start: [Object], end: [Object] }
//     },
//     {
//       type: 'text',
//       value: ' [#some-id]',
//       position: { start: [Object], end: [Object] }
//     }
//   ]
// ```
const visitor = () => (tree) => {
  visit(tree, isHeadingWithCustomId, (heading) => {
    const id = getId(heading);

    set(heading, 'data.id', id);
    set(heading, 'data.htmlAttributes.id', id);
    set(heading, 'data.hProperties.id', id);

    // first case, only has text
    if (heading.children.length === 1) {
      const child = heading.children[0];
      child.value = child.value.replace(`[#${id}]`, '').trim();
    }
    // second case, multiple nodes
    else {
      set(heading, 'children', heading.children.slice(0, -1));
    }

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
