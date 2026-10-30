import { unified } from 'unified11';
import parse from 'rehype-parse9';
import rehype2remark from 'rehype-remark10';
import stringify from 'remark-stringify10';
import frontmatter from 'remark-frontmatter5';
import remarkMdx from 'remark-mdx2.3';
import { defaultHandlers } from 'hast-util-to-mdast9';
import { defaultHandlers as defaultStringifyHandlers } from 'mdast-util-to-markdown';
import { mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import u from 'unist-builder';
import last from 'lodash/last.js';
import yaml from 'js-yaml';
import { visit } from 'unist-util-visit4';
import { encode as htmlEncode } from 'html-entities';
import { decode as htmlDecode } from 'html-entities';
import handlers from './utils/handlers.mjs';
import { configuration } from './configuration.js';
import remarkGfm from 'remark-gfm';

/**
 * Deserialize a node from the HTML AST into a node for the MDX AST.
 */
const component = (state, node) => {
  if (!node.properties || !node.properties.dataType) {
    return defaultHandlers[node.tagName](state, node);
  }

  const { dataType, dataComponent } = node.properties;

  if (dataType === 'prop') {
    return null;
  }

  const key =
    dataType === 'component' ? dataComponent || node.tagName : dataType;

  const handler = handlers[key];

  if (!handler || !handler.deserialize) {
    throw new Error(
      `Unable to deserialize node: '${key}'. Please specify a deserializer in 'scripts/actions/utils/handlers.js'`
    );
  }

  return handler.deserialize(state, node, undefined, attributeProcessor);
};

const headingWithCustomId = (state, node) => {
  const result = defaultHandlers.h1(state, node);
  const { id } = node.properties || {};

  if (!id) {
    return result;
  }

  // raw `html` so it is written as-is: a `linkReference` gets its label
  // escaped, turning `[#a_b]` into `[#a\_b][#a_b]`.
  const customId = u('html', `[#${id}]`);
  const lastChild = last(result.children);

  if (lastChild.type === 'text' && !lastChild.value.match(/\s$/)) {
    lastChild.value = `${lastChild.value} `;
  } else {
    result.children.push(u('text', ' '));
  }

  result.children.push(customId);

  return result;
};

const stripTranslateFrontmatter = () => {
  const transformer = (tree) => {
    if (tree?.children[0]?.type === 'yaml') {
      const frontmatterObj = yaml.load(tree.children[0].value);
      delete frontmatterObj.translate;
      delete frontmatterObj.redirects;
      frontmatterObj.translationType = configuration.TRANSLATION.TYPE;
      const frontmatterStr = yaml
        .dump(frontmatterObj, { lineWidth: -1 })
        .trim();
      tree.children[0].value = frontmatterStr;
      return tree;
    }
  };

  return transformer;
};

/**
 * Replace tildes with hyphens in text nodes to prevent MDX parsing issues.
 *
 * Tildes (~) are used as code fence delimiters in Markdown/MDX (like ``` or ~~~)
 * and cause parsing errors when used in regular text. Korean translations naturally
 * use ~ for ranges (e.g., "7.9~10" meaning "7.9 to 10"), which breaks MDX validation.
 *
 * This transformer replaces all tildes with hyphens in text nodes to ensure
 * MDX compatibility across all languages.
 */
const replaceTildesWithHyphens = () => {
  const transformer = (tree) => {
    visit(tree, 'text', (node) => {
      if (node.value && typeof node.value === 'string') {
        // Replace tildes with hyphens to prevent MDX parsing errors
        node.value = node.value.replace(/~/g, '-');
      }
    });
    return tree;
  };

  return transformer;
};

const inlineCodeAttribute = () => (tree) => {
  visit(tree, 'inlineCode', (node) => {
    node.type = 'mdxJsxSpanElement';
    node.name = 'InlineCode';
    node.children = [u('text', node.value)];
  });
};

// remark-mdx indents the children of block-level JSX by two spaces per level.
// The MDX parser the site builds with misreads some of that output: an ordered
// list nested in a component, followed by a component holding a bullet list,
// leaves the second component unclosed (the db360 pages in #26334).
// The English docs write children flat, so we do the same.
const {
  mdxJsxFlowElement: indentedJsxFlowElement,
} = mdxJsxToMarkdown().handlers;
const CHILDREN = '\uE000';

const jsxFlowElement = (node, parent, state, info) => {
  if (!node.children || !node.children.length) {
    return indentedJsxFlowElement(node, parent, state, info);
  }

  // the stock handler writes the tag and attributes around a placeholder,
  // which we swap for the children serialized without indentation
  const shell = indentedJsxFlowElement(
    { ...node, children: [u('paragraph', [u('text', CHILDREN)])] },
    parent,
    state,
    info
  );
  const exit = state.enter(node.type);
  const children = state.containerFlow(node, info);
  exit();

  return shell.replace(`  ${CHILDREN}`, () => children);
};

// previously, this processor was defined in `deserialization-helpers`.
// upgrading unified there would have involved changing a lot of CJS modules to ESM.
// this is a sort of workaround to avoid doing all that,
// but still allow attribute deserialization to work with the new node types
// introduced in newer versions of remarkMDX. (`mdxJsx*` nodes vs `mdx*` nodes.)
const attributeProcessor = unified()
  .use(stringify, {
    bullet: '*',
    fences: true,
    listItemIndent: '1',
  })
  .use(remarkMdx)
  .use(inlineCodeAttribute);

const processor = unified()
  .use(parse)
  .use(rehype2remark, {
    handlers: {
      code: component,
      table: component,
      thead: component,
      tbody: component,
      tr: component,
      td: component,
      th: component,
      span: component,
      div: component,
      pre: component,
      var: component,
      mark: component,
      h1: headingWithCustomId,
      h2: headingWithCustomId,
      h3: headingWithCustomId,
      h4: headingWithCustomId,
      h5: headingWithCustomId,
      h6: headingWithCustomId,
    },
  })
  // order matters here.
  // remark-mdx must come before remark-stringify, because it adds handlers
  // for MDX nodes like `mdxJsxTextElement` and otherwise, remark-stringfy
  // won't know how to stringify those nodes.
  .use(remarkGfm)
  .use(remarkMdx)
  // Note: htmlCommentsToJsxComments removed - let HTML comments stay as HTML
  // This prevents issues with HTML comments from translators/Smartling
  .use(stringify, {
    bullet: '*',
    // without it, adjacent lists are kept apart with `<!---->`, which MDX
    // can't parse
    bulletOther: '-',
    fences: true,
    listItemIndent: '1',
    handlers: {
      mdxJsxFlowElement: jsxFlowElement,
      // by the time this processor gets to the stringify step,
      // we've already turned the HTML into a MDX AST.
      // by default, remark-stringify (which uses `mdast-util-to-markdown` internally)
      // will backslash escape unsafe characters, like `<`.
      // however, this is incompatible with `gatsby-plugin-mdx` which will error
      // upon encountering `\<` because it doesn't process the escape and thinks
      // we're trying to open a tag.
      // this handler replaces `<` and other HTML-unsafe characters
      // with their ampersand encoded equivalent before passing the text
      // to `mdast-util-to-markdown`.
      text(node, _, state, info) {
        // this is a bit of a hack, meaning:
        // `mdast-util-to-markdown` supports adding new rules in the config
        // via the `unsafe` option, but not replacing the existing rules.
        // so we have to hack it out with a saw.


        
        // as we have encoded the text nodes in the stringify as the workaround to handle unsafe characters.
        // in this processor, we are using `htmlEncode` to encode the text nodes.
        // however, we have found some nodes which are already encoded int rehype2remark
        // (like `&gt`), and they are getting double encoded
        // so decoding here undos the double encoding.
        node.value = htmlDecode(node.value);
        const index = state.unsafe.findIndex((rule) => rule.character === '&');
        if (index !== -1) {
          state.unsafe.splice(index, 1);
        }

        node.value = htmlEncode(node.value);
        return defaultStringifyHandlers.text(node, _, state, info);
      },
    },
  })
  .use(frontmatter, ['yaml'])
  .use(stripTranslateFrontmatter)
  .use(replaceTildesWithHyphens);

const deserializeHTML = async (html) => {
  const vfile = await processor.process(html);

  // remark-stringify still separates adjacent ordered lists with `<!---->`
  // (there's no ordered-list marker the site's parser accepts as an
  // alternative to `1.`), and MDX can't parse HTML comments
  return vfile
    .toString()
    .trim()
    .replace(/^([ \t]*)<!---->$/gm, '$1{/* */}');
};

export default deserializeHTML;
