const Turndown = require('turndown');
const HTMLtoJSX = require('htmltojsx');
const fauxHtmlToJSX = require('./faux-html-to-jsx');
const { extractTags } = require('../node');
const { TYPES } = require('../constants');
const slugs = require('github-slugger')();

const SPECIAL_COMPONENTS = [
  { tag: 'div', className: 'callout-tip' },
  { tag: 'div', className: 'callout-important' },
  { tag: 'div', className: 'callout-caution' },
  { tag: 'div', className: 'callout-permissions' },
  { tag: 'div', className: 'callout-note' },
  { tag: 'div', className: 'callout-pricing' },
  { tag: 'dl', className: 'clamshell-list' },
  { tag: 'dl', className: 'example-box' },
  { id: 'watermark' },
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
  [/{/g, '\\{'],
  [/~/g, "{'~'}"],
  [/\u200b/g, ''],

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

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

const cleanAttribute = (attribute) => {
  return attribute ? attribute.replace(/(\n+\s*)+/g, '\n') : '';
};

const isLandingPageTile = (node) =>
  node.classList.contains('col') &&
  node.childNodes[0].classList.contains('col-md-3') &&
  node.childNodes[1].classList.contains('col-md-9');

const repeat = (character, count) => Array(count + 1).join(character);

module.exports = (file) => {
  slugs.reset();

  const turndown = new Turndown({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
  });

  turndown
    // adapted from Turndown to add custom heading IDs
    // https://github.com/domchristie/turndown/blob/e7a9351cf2bcd724ef119b4f709755439a10e958/src/commonmark-rules.js#L21-L36
    .addRule('headings', {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      replacement: (content, node) => {
        const hLevel = Number(node.nodeName.charAt(1));
        const slug = slugs.slug(node.textContent);
        const id = node.id && node.id !== slug ? ` [#${node.id}]` : '';

        return `\n\n${repeat('#', hLevel)} ${content}${id}\n\n`;
      },
    })
    .addRule('lineBreaksInsideHeadings', {
      filter: (node) =>
        node.nodeName === 'BR' &&
        node.parentNode &&
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
          node.parentNode.nodeName.toLowerCase()
        ),
      replacement: () => '',
    })
    .addRule('links', {
      filter: (node) => node.nodeName === 'A' && node.getAttribute('href'),
      replacement: (content, node) => {
        const href = node.getAttribute('href').replace(/~/g, '%7E');
        let title = cleanAttribute(node.getAttribute('title'));

        if (title) {
          title = ` "${title}"`;
        }

        return `[${content}](${href}${title})`;
      },
    })
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
      replacement: (_content, node) => {
        const hasCodeTag = node.firstChild.nodeName === 'CODE';
        const language = hasCodeTag
          ? node.firstChild.getAttribute('type')
          : null;

        const contentNode =
          hasCodeTag && node.childNodes.length === 1 ? node.firstChild : node;

        // `innerHTML` replaces embedded '&', '<', and '>', characters. We want
        // to keep these as their raw text.
        //
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
        const text = contentNode.innerHTML
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&nbsp;/, ' ')
          .trim();

        const encoded = Buffer.from(text).toString('base64');

        return language
          ? `\n\n<pre language="${language}">{'${encoded}'}</pre>\n\n`
          : `\n\n<pre>{'${encoded}'}</pre>\n\n`;
      },
    })
    .addRule('specialComponents', {
      filter: (node) =>
        SPECIAL_COMPONENTS.some(({ tag, className, id }) => {
          return id
            ? node.id === id
            : tag === node.nodeName.toLowerCase() &&
                node.classList.contains(className);
        }),
      replacement: (content, node) => {
        const [openingTag, closingTag] = extractTags(node);

        const outerJSX = htmlToJSXConverter.convert(
          `${openingTag}|||${closingTag}\n`
        );

        const whitespace = node.isBlock ? '\n\n' : '';

        return `${whitespace}${outerJSX.replace('|||', `\n${content}\n`)}`;
      },
    })
    .addRule('customHandled', {
      filter: ['table', 'td', 'th', 'thead', 'tbody', 'tr', 'dd', 'dt'],
      replacement: (content, node) =>
        `\n\n${fauxHtmlToJSX(node, content, file)}\n`,
    })
    .addRule('videos', {
      filter: 'iframe',
      replacement: (_content, node) =>
        htmlToJSXConverter.convert(node.outerHTML),
    })
    .addRule('buttons', {
      filter: (node) => node.classList.contains('btn'),
      replacement: (_content, node) =>
        htmlToJSXConverter.convert(node.outerHTML),
    })
    .addRule('landingPageTile', {
      filter: (node) =>
        file.data.doc.type === TYPES.LANDING_PAGE && isLandingPageTile(node),
      replacement: (content) =>
        `<div className="landing-page-tile">\n\n${content}\n\n</div>\n\n`,
    })
    .addRule('moreHelp', {
      filter: (node) =>
        node.nodeName === 'H2' &&
        node.textContent === 'For more help' &&
        !node.nextElementSibling,
      replacement: () => '',
    })
    .addRule('icons', {
      filter: (node) => node.nodeName === 'I' && node.classList.contains('fa'),
      replacement: (content, node) =>
        htmlToJSXConverter.convert(node.outerHTML),
    })
    .addRule('var/mark', {
      filter: ['var', 'mark'],
      replacement: (content, node) => {
        const tag = node.nodeName.toLowerCase();

        return `<${tag}>${content}</${tag}>`;
      },
    });

  return turndown.turndown(file.contents);
};
