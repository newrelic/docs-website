/* eslint-disable no-console */
// Runs the translation pipeline on the given English .mdx files without
// translating anything (serialize-mdx -> deserialize-html) and fails when the
// result no longer compiles, or when an inline element comes back as a block.
// Both have broken locale builds while verify-mdx passed on the English source,
// e.g. `<code><p>x</p></code>` crashes CodeBlock (#26073).
//
//   yarn verify-roundtrip src/content/docs/some/page.mdx ...
import fs from 'fs';
import { createRequire } from 'module';

// deserialize-html writes this into the frontmatter
process.env.TRANSLATION_TYPE ??= 'machine';

const require = createRequire(import.meta.url);
const mdx = require('@mdx-js/mdx');
// the site splits code blocks that swallowed an indented closing fence back
// apart; without it, the English baseline here doesn't match what renders
const fencedCodeBlocks = require('../plugins/gatsby-remark-mdx-v2-fenced-code-blocks');

const siteFencedCodeBlocks = () => (markdownAST) =>
  fencedCodeBlocks({ markdownAST });

const { default: serializeMDX } = await import('./actions/serialize-mdx.mjs');
const { default: deserializeHTML } = await import(
  './actions/deserialize-html.mjs'
);

const INLINE = new Set([
  'a',
  'code',
  'em',
  'strong',
  'sub',
  'sup',
  'var',
  'InlineCode',
  'DNT',
]);
const TABLE_CELLS = new Set(['td', 'th']);

const nameOf = (node) => node.name || node.tagName;
const isBlank = (node) => node.type === 'text' && !node.value.trim();
const contentOf = (node) => (node.children || []).filter((n) => !isBlank(n));
const textOf = (node) =>
  node.value || (node.children || []).map(textOf).join('');

// Inline elements that render as blocks: a `<p>` directly inside them, or
// alone in their own paragraph next to other content in a table cell.
const findBlockInlines = (source) => {
  const compiler = mdx.createMdxAstCompiler({
    remarkPlugins: [siteFencedCodeBlocks],
  });
  const found = [];

  const walk = (node) => {
    const content = contentOf(node);

    if (INLINE.has(nameOf(node)) && content.some((n) => n.tagName === 'p')) {
      found.push(node);
    }

    if (TABLE_CELLS.has(nameOf(node)) && content.length > 1) {
      content.forEach((child) => {
        const [only, ...rest] = contentOf(child);
        if (child.tagName === 'p' && !rest.length && INLINE.has(nameOf(only))) {
          found.push(only);
        }
      });
    }

    (node.children || []).forEach(walk);
  };

  walk(compiler.runSync(compiler.parse(source)));

  return found.map((node) => ({
    name: nameOf(node),
    text: textOf(node).trim(),
    line: node.position && node.position.start.line,
  }));
};

// source line of the next occurrence of `text`, for repeated elements
const lineFinder = (source) => {
  const from = {};
  return (text) => {
    const index = source.indexOf(text, from[text]);
    if (index === -1) return '?';
    from[text] = index + 1;
    return source.slice(0, index).split('\n').length;
  };
};

const verify = async (file) => {
  const source = fs.readFileSync(file, 'utf8');

  // English that doesn't compile is verify-mdx's job
  let expected;
  try {
    mdx.sync(source);
    expected = findBlockInlines(source).map((n) => `${n.name}:${n.text}`);
  } catch {
    return [];
  }

  let output;
  try {
    output = await deserializeHTML(await serializeMDX(source));
  } catch (error) {
    console.warn(`⚠ ${file}: translation pipeline threw: ${error.message}`);
    return [];
  }

  const outputLines = output.split('\n');
  const lineOf = lineFinder(source);

  try {
    mdx.sync(output);
  } catch (error) {
    const message = `${file}: does not compile after translation round-trip`;

    // a Babel error from the generated JSX: its position is not an MDX line
    if (!error.line) {
      return [`${message}: ${error.message.split('\n')[0]} (in generated JSX)`];
    }

    const line = (outputLines[error.line - 1] || '').trim();
    return [
      `${message}: ${error.reason}\n` +
        `    round-trip output line ${error.line}: ${line}`,
    ];
  }

  return findBlockInlines(output)
    .filter(({ name, text }) => {
      const index = expected.indexOf(`${name}:${text}`);
      if (index === -1) return true;
      expected.splice(index, 1);
      return false;
    })
    .map(
      ({ name, text, line }) =>
        `${file}:${lineOf(text)}: <${name}>${text}</${name}> ` +
        `becomes block-level after translation round-trip\n` +
        `    round-trip output line ${line}: ${outputLines[line - 1].trim()}`
    );
};

const files = process.argv.slice(2);
const errors = [];

for (const file of files) {
  errors.push(...(await verify(file)));
}

if (errors.length) {
  errors.forEach((error) => console.error(`✖ ${error}`));
  console.error(
    `\n${errors.length} round-trip error(s). Translated copies of these pages ` +
      `would render wrong or break the locale build. Fix the English source ` +
      `or the deserializer (scripts/actions/deserialize-html.mjs).`
  );
  process.exit(1);
}

console.log(`Round-trip OK for ${files.length} file(s).`);
