const Turndown = require('turndown');
const HTMLtoJSX = require('htmltojsx');
const { extractTags } = require('./node');

const escapes = [
  [/\\/g, '\\\\'],
  [/\*/g, '\\*'],
  [/^-/g, '\\-'],
  [/^\+ /g, '\\+ '],
  [/^(=+)/g, '\\$1'],
  [/^(#{1,6}) /g, '\\$1 '],
  [/`/g, '\\`'],
  [/^~~~/g, '\\~~~'],
  [/\[/g, '\\['],
  [/\]/g, '\\]'],
  [/_/g, '\\_'],
  [/^(\d+)\. /g, '$1\\. '],

  // Because we are converting to JSX, we need to ensure opening and closing < >
  // are properly escaped to their HTML entities, otherwise it is parsed as the
  // start of a component.
  [/</g, '&lt;'],
  [/>/g, '&gt;'],
];

// We need to override the built-in `escape` function so that we can use our
// updated `escapes` variable from above, which differs slightly than the
// default `escapes` that ships with turndown.
Turndown.prototype.escape = (string) => {
  return escapes.reduce((accumulator, escape) => {
    return accumulator.replace(escape[0], escape[1]);
  }, string);
};

const turndown = new Turndown({
  headingStyle: 'atx',
});

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

// TODO: Use with components we want to keep
// const replaceWithContent = (node, content) => {
//   const openingTag = node.outerHTML.slice(
//     0,
//     node.outerHTML.indexOf(node.innerHTML)
//   );
//   const closingTag = `</${node.tagName.toLowerCase()}>\n`;

//   const outerJSX = htmlToJSXConverter.convert(`${openingTag}|||${closingTag}`);

//   return outerJSX.replace('|||', `\n${content}\n`).trim();
// };

turndown
  .addRule('codeBlocks', {
    filter: ['pre'],
    replacement: (content) => `~~~\n${content}\n~~~\n`,
  })
  .addRule('htmlToJSX', {
    filter: ['div', 'dl'],
    replacement: (_content, node) => htmlToJSXConverter.convert(node.outerHTML),
  })
  .addRule('table', {
    filter: 'table',
    replacement: (content, node) => {
      const [openingTag, closingTag] = extractTags(node);

      return htmlToJSXConverter.convert(
        [openingTag, content, closingTag].join('\n')
      );
    },
  })
  .addRule('tableContents', {
    filter: ['td', 'th', 'thead', 'tbody', 'tr'],
    replacement: (content, node) => {
      const [openingTag, closingTag] = extractTags(node);

      return [openingTag, content, closingTag].join('\n');
    },
  })
  // We need to keep paragraphs inside of table cells to ensure the
  // `htmlToJSXConverter` running on the entirety of the table does not collapse
  // the paragraphs inside of the table cells. We clean this up in a codemod
  // later
  .addRule('paragraphsInsideTableCells', {
    filter: (node) =>
      node.nodeName === 'P' && node.parentNode.nodeName === 'TD',
    replacement: (content) => `<p>${content}</p>`,
  });

module.exports = (html) => turndown.turndown(html);
