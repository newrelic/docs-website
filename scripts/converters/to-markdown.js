const path = require('path');
const TurndownService = require('turndown');
const HTMLtoJSX = require('htmltojsx');

const getCategories = require('../utils/get-categories');
const getFrontmatter = require('../frontmatter/get-frontmatter');
const { TYPES, BASE_DIR } = require('../constants');

const htmlToJSXConverter = new HTMLtoJSX({ createClass: false });

const turndown = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  codeBlockStyle: 'fenced',
  fence: '```',
});

const repeat = (char, num) => Array(num + 1).join(char);

const replaceInnerContent = (node, content) => {
  const closingTag = `</${node.nodeName.toLowerCase()}>`;
  const tag = node.outerHTML.slice(0, node.outerHTML.indexOf(node.innerHTML));

  return htmlToJSXConverter
    .convert(tag)
    .replace(`\n${closingTag}`, content + closingTag);
};

const toMarkdown = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName =
    doc.type === TYPES.LANDING_PAGE ? `${dir}/index.mdx` : `${dir}/${slug}.mdx`;

  // Create frontmatter based on content type
  const frontmatter = getFrontmatter(doc.type, doc);

  turndown
    // .addRule('headingWithID', {
    //   filter: (node) => {
    //     return (
    //       ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.nodeName) &&
    //       node.getAttribute('id')
    //     );
    //   },
    //   replacement: (content, node) => {
    //     const level = Number(node.nodeName.charAt(1));
    //     const heading = [repeat('#', level), content].join(' ');

    //     return `\n\n${heading} {#${node.getAttribute('id')}}\n\n`;
    //   },
    // })
    .addRule('codeBlocks', {
      filter: 'pre',
      replacement: (_content, node, options) => {
        const className = node.getAttribute('class') || '';
        const language = (className.match(/language-(\S+)/) || [null, ''])[1];
        const code = node.textContent;

        const fenceChar = options.fence.charAt(0);
        const fenceInCodeRegex = new RegExp(`^${fenceChar}{3,}`, 'gm');

        let fenceSize = 3;
        let match;

        while ((match = fenceInCodeRegex.exec(code))) {
          if (match[0].length >= fenceSize) {
            fenceSize = match[0].length + 1;
          }
        }

        const fence = repeat(fenceChar, fenceSize);

        return `\n\n${fence}${language}\n${code.replace(
          /\n$/,
          ''
        )}\n${fence}\n\n`;
      },
    })
    .addRule('icons', {
      filter: (node) => {
        return (
          node.nodeName === 'I' && node.className.split(' ').includes('fa')
        );
      },
      replacement: (_content, node) => {
        return htmlToJSXConverter.convert(node.outerHTML).trim();
      },
    })
    .addRule('callouts', {
      filter: (node) => {
        return node.className.includes('callout-');
      },
      replacement: (content, node) => {
        return replaceInnerContent(node, content);
      },
    });

  const content = frontmatter + turndown.turndown(doc.body || '');

  return { content, fileName };
};

module.exports = toMarkdown;
