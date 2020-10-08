const Turndown = require('turndown');
const HTMLtoJSX = require('htmltojsx');
const { extractTags } = require('../node');
const repeat = require('../repeat');

const SPECIAL_COMPONENTS = [
  { tag: 'div', className: 'callout-tip' },
  { tag: 'div', className: 'callout-important' },
  { tag: 'div', className: 'callout-caution' },
  { tag: 'div', className: 'callout-permissions' },
  { tag: 'div', className: 'callout-note' },
  { tag: 'div', className: 'callout-pricing' },
  { tag: 'i', className: 'fa' },
  { tag: 'dl', className: 'clamshell-list' },
];

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
  [/~/g, "{'~'}"],

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
  codeBlockStyle: 'fenced',
  fence: '```',
});

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

turndown
  .addRule('inlineCodeBlocks', {
    filter: (node) =>
      node.nodeName === 'CODE' && node.parentNode.nodeName !== 'PRE',
    replacement: (_content, node) => {
      const buffer = Buffer.from(node.textContent.trim());

      return `<code>${buffer.toString('base64')}</code>`;
    },
  })
  .addRule('codeBlocks', {
    filter: ['pre'],

    // The implementation for this code block rule is mostly a copy of the
    // original code block implementation:
    // https://github.com/domchristie/turndown/blob/5c4d19b98b8c36e612e2fe045c390d20625b39ef/src/commonmark-rules.js#L111-L134
    //
    // The difference with this implementation compared to the original is
    // that this strips out parsing the language. None of the <pre> tags in
    // the docs site include language information, so we don't need to try and
    // detect it.
    replacement: (_content, node, options) => {
      const buffer = Buffer.from(node.textContent.trim());
      const language =
        node.firstChild.nodeName === 'CODE'
          ? node.firstChild.getAttribute('type')
          : null;

      return language
        ? `\n\n<pre language="${language}">${buffer.toString(
            'base64'
          )}</pre>\n\n`
        : `\n\n<pre>${buffer.toString('base64')}</pre>\n\n`;
    },
  })
  .addRule('specialComponents', {
    filter: (node) =>
      SPECIAL_COMPONENTS.some(
        ({ tag, className }) =>
          tag === node.nodeName.toLowerCase() &&
          node.classList.contains(className)
      ),
    replacement: (content, node) => {
      const [openingTag, closingTag] = extractTags(node);

      const outerJSX = htmlToJSXConverter.convert(
        `${openingTag}|||${closingTag}\n`
      );

      const whitespace = node.isBlock ? '\n\n' : '';

      return `${whitespace}${outerJSX.replace('|||', `\n${content}\n`)}`;
    },
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
  .addRule('innerElements', {
    filter: ['td', 'th', 'thead', 'tbody', 'tr', 'dd', 'dt'],
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
    replacement: (content, node) => {
      const needsNewlineFix = ['OL', 'UL'].includes(
        node.previousSibling && node.previousSibling.nodeName
      );

      // Unfortunately the `htmlToJSXConverter` squashes newlines when we run
      // it on the entire table. Because of this, some paragraphs that proceed
      // lists end up as a child of the list instead of a sibling. We will use
      // a codemod to fix this in post processing.
      const openingTag = needsNewlineFix ? '<p data-fixnewline>' : '<p>';

      return `${openingTag}${content}</p>\n`;
    },
  })
  .addRule('videos', {
    filter: 'iframe',
    replacement: (_content, node) => htmlToJSXConverter.convert(node.outerHTML),
  })
  .addRule('buttons', {
    filter: (node) => node.classList.contains('btn'),
    replacement: (_content, node) => htmlToJSXConverter.convert(node.outerHTML),
  });

module.exports = (html) => turndown.turndown(html);
