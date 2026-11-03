/* eslint-disable no-console */
// Repairs the STRUCTURE (never the words) of translated .mdx files damaged by
// older serialize-mdx / deserialize-html bugs:
//
//   inline-collapse  `<code>\n  x\n</code>` -> `<code>x</code>`
//   inline-merge     `text\n\n<code>x</code>\n\n more` -> `text <code>x</code> more`
//   heading-id       `## T [#a\_b][#a_b]`, `\[#id]`, `[T [#id]](url)` -> `## T [#a_b]`
//   expression       `\{&apos;&lt;&apos;}` -> `{'<'}`
//   fragment-expr    `\{&lt;&gt;...&lt;/&gt;}` -> `{<>...</>}`
//
// Only run it on translations written by the old pipeline (before #26365).
// inline-merge can't tell a translated paragraph that is just a link or bold
// text from an inline element split out of its sentence, so on newer
// translations it may join a real paragraph onto its neighbour. Review the
// merges in the diff.
//
// Dry-run by default.
//   node scripts/repair-translations.mjs [--write] [--locale es,fr] [file ...]
//   LIST=1 prints the changed files.
// Safety nets: a result that differs from the input by more than whitespace
// (heading ids and the expression classes aside) is dropped, and with --write a
// file that compiled before but not after is left untouched and listed.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
// only needed by --write; a missing install must not silently disable the check
const mdx = require('@mdx-js/mdx');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const I18N = path.join(ROOT, 'src/i18n/content');
const ENGLISH = path.join(ROOT, 'src/content');
const LOCALES = ['es', 'fr', 'jp', 'kr', 'pt'];

const INLINE = 'code|InlineCode|DNT|a|strong|em|b|i|sub|sup|var|kbd';
const INLINE_TAG = new RegExp(`^<(${INLINE})(\\s[^<>]*)?>`);
// self-closing inline elements that sit alone in their own chunk
const BR_LINE = /^\s*<(?:br|InlinePopover|Icon)\b[^<>]*\/?>\s*$/;
const COLLAPSE = new RegExp(
  `<(${INLINE})((?:\\s[^<>\\n]*)?)>[ \\t]*\\n((?:[ \\t]*[^\\s][^\\n]*\\n)+?)[ \\t]*</\\1>`,
  'g'
);

const ENTITIES = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" };
const decode = (s) => s.replace(/&(lt|gt|amp|quot|apos);/g, (_, e) => ENTITIES[e]);

const emptyCounts = () => ({
  'inline-collapse': 0,
  'inline-merge': 0,
  'heading-id': 0,
  expression: 0,
  'fragment-expr': 0,
});

// run fn over the prose between code fences only
const mapProse = (text, fn) => {
  const out = [];
  let cur = [];
  let fence = null;
  const flush = (fenced) => {
    if (cur.length) out.push(fenced ? cur.join('\n') : fn(cur.join('\n')));
    cur = [];
  };
  text.split('\n').forEach((line) => {
    const m = line.match(/^\s*(?:[*-]\s+)?(`{3,}|~{3,})/);
    if (!fence && m) {
      flush(false);
      fence = m[1];
      cur.push(line);
    } else if (fence && line.trim() === fence[0].repeat(fence.length)) {
      cur.push(line);
      flush(true);
      fence = null;
    } else cur.push(line);
  });
  flush(!!fence);
  return out.join('\n');
};

// ---- headings and expressions (line level) --------------------------------

const fixHeading = (line, counts) => {
  if (!/^\s*#{1,6}\s/.test(line)) return line;
  const out = line
    // `[#a\_b][#a_b]` -> `[#a_b]`
    .replace(/\\?\[#([^\]\n]*)\]\[#([^\]\n]*)\]/g, (m, a, b) =>
      a.replace(/\\_/g, '_') === b ? `[#${b}]` : m
    )
    // `\[#id]` at the end -> `[#id]`
    .replace(/\\\[#([^\]\n]*)\]\s*$/, (m, id) => `[#${id.replace(/\\_/g, '_')}]`)
    // `[text [#id]](url)` and `[text \[#id\]](url)` -> `[text](url) [#id]`
    .replace(
      /^(\s*#{1,6}\s+)\[(.*?)\s*\\?\[#([^\]\n\\]+)\\?\]\]\(([^)\n]+)\)\s*$/,
      '$1[$2]($4) [#$3]'
    );
  if (out !== line) counts['heading-id'] += 1;
  return out;
};

const fixExpressions = (line, counts) =>
  line
    .replace(/\\\{&lt;&gt;.*?&lt;\/&gt;\}/g, (m) => {
      counts['fragment-expr'] += 1;
      return decode(m).replace(/\\([_{}])/g, '$1');
    })
    .replace(/\\\{&apos;(.*?)&apos;\}/g, (m, inner) => {
      counts.expression += 1;
      return `{'${decode(inner)}'}`;
    });

// ---- inline elements ------------------------------------------------------

const BLOCK_START = /^(#{1,6}\s|[-*+]\s|\d+[.)]\s|>|\||`{3}|~{3}|---|\{\/\*|import\s|export\s|:::)/;
const isTagLine = (l) =>
  /^\s*<\/?[A-Za-z][^<>]*>\s*$/.test(l) && !INLINE_TAG.test(l.trim()) && !BR_LINE.test(l);

const LIST_MARKER = /^(\s*(?:[-*+]|\d+[.)])\s+)/;
// a list item's own text counts as phrasing once the marker is dropped
const withoutMarker = (para) => [para[0].replace(LIST_MARKER, ''), ...para.slice(1)];

const isPhrasing = (para) => {
  const first = para[0].trim();
  if (BLOCK_START.test(first) || first.startsWith('</')) return false;
  if (/^<[A-Za-z]/.test(first) && !INLINE_TAG.test(first) && !/^<(br|InlinePopover|Icon)\b/.test(first)) return false;
  return !para.some(isTagLine);
};

// a single line that is one inline element (or <br />) and nothing else
const isLone = (para) => {
  if (para.length !== 1) return false;
  const t = para[0].trim();
  if (BR_LINE.test(t)) return true;
  const m = t.match(INLINE_TAG);
  return !!m && t.endsWith(`</${m[1]}>`) && t.indexOf(`</${m[1]}>`) === t.lastIndexOf(`</${m[1]}>`);
};
const indentOf = (l) => l.match(/^\s*/)[0].length;

const GLUE_BEFORE = /[(\[“"'‘「『（【　-〿぀-ヿ㐀-鿿가-힯＀-￯]$/;
const GLUE_AFTER = /^[)\].,:;!?”"'’」』）】、。，：；！？　-〿぀-ヿ㐀-鿿가-힯＀-￯]/;

// the blank line between two chunks lost the whitespace around the inline
// element: keep it when it survived, else guess from the punctuation
const joinParas = (a, b, listItem) => {
  const lastA = a[a.length - 1];
  const firstB = b[0];
  const x = lastA.trimEnd();
  const y = firstB.trim();
  const kept = /\s$/.test(lastA) || (!listItem && indentOf(firstB) > indentOf(a[0]));
  const glued =
    GLUE_BEFORE.test(x) || GLUE_AFTER.test(y) || /<br\s*\/?>$/.test(x) || /^<br\s*\/?>/.test(y);
  return [...a.slice(0, -1), `${x}${kept || !glued ? ' ' : ''}${y}`, ...b.slice(1)];
};

const squash = (s) => s.replace(/\s+/g, ' ').trim();

// <DNT> text is never translated, so a multi-line <DNT> whose text the English
// page also writes over several lines is a deliberate label, not damage. The
// pipeline writes it the same way, so collapsing it would only churn.
const englishBlockDNTs = (englishText) =>
  new Set(
    [...englishText.matchAll(COLLAPSE)]
      .filter(([, tag]) => tag === 'DNT')
      .map(([, , , body]) => squash(body))
  );

const collapseInline = (text, counts, keep = new Set()) => {
  let prev;
  let cur = text;
  do {
    prev = cur;
    cur = cur.replace(COLLAPSE, (m, tag, attrs, body) => {
      const lines = body.trimEnd().split('\n').map((l) => l.trim());
      if (!isPhrasing(lines)) return m;
      if (tag === 'DNT' && keep.has(squash(body))) return m;
      counts['inline-collapse'] += 1;
      return `<${tag}${attrs}>${lines.join('\n')}</${tag}>`;
    });
  } while (cur !== prev);
  return cur;
};

// lone-inline paragraphs the English page also has: those are real paragraphs
const englishLones = (englishText) => {
  const set = new Set();
  if (englishText) {
    mapProse(englishText, (prose) => {
      collapseInline(prose, emptyCounts())
        .split(/\n\s*\n/)
        .forEach((p) => {
          const lines = p.trim().split('\n');
          const bare = [lines[0].replace(LIST_MARKER, ''), ...lines.slice(1)];
          if (isLone(bare)) set.add(bare[0].trim());
        });
      return prose;
    });
  }
  return set;
};

const mergeInline = (prose, counts, english) => {
  // items: paragraphs (runs of non-blank lines), blank lines and fixed tag lines
  const items = [];
  let run = [];
  const pushRun = () => {
    let s = 0;
    let e = run.length;
    while (s < e && isTagLine(run[s])) items.push({ fixed: true, lines: [run[s++]] });
    const tail = [];
    while (e > s && isTagLine(run[e - 1])) tail.unshift(run[--e]);
    if (e > s) items.push({ lines: run.slice(s, e) });
    tail.forEach((l) => items.push({ fixed: true, lines: [l] }));
    run = [];
  };
  prose.split('\n').forEach((l) => {
    if (l.trim()) run.push(l);
    else {
      pushRun();
      items.push({ blank: true, lines: [l] });
    }
  });
  pushRun();

  // a list item may start a merge (its text is followed by a lone inline in
  // the item's next paragraph) but never continue one
  const isItem = (p) => p && !p.fixed && !p.blank && LIST_MARKER.test(p.lines[0]);
  const mergeable = (p) => p && !p.fixed && !p.blank && isPhrasing(isItem(p) ? withoutMarker(p.lines) : p.lines);
  const lone = (p) => {
    if (!mergeable(p)) return false;
    const lines = isItem(p) ? withoutMarker(p.lines) : p.lines;
    return isLone(lines) && !english.has(lines[0].trim());
  };
  const out = [];
  let i = 0;
  while (i < items.length) {
    const it = items[i];
    const gap = items[i + 1];
    const next = items[i + 2];
    if (
      mergeable(it) && gap?.blank && mergeable(next) && !isItem(next) &&
      (lone(it) || lone(next) || it.chained) &&
      (isItem(it)
        ? indentOf(next.lines[0]) > indentOf(it.lines[0])
        : Math.abs(indentOf(it.lines[0]) - indentOf(next.lines[0])) <= 2)
    ) {
      // text right after a merged lone inline belongs to the same sentence
      items.splice(i, 3, { lines: joinParas(it.lines, next.lines, isItem(it)), chained: lone(next) });
      counts['inline-merge'] += 1;
    } else {
      out.push(it);
      i += 1;
    }
  }
  return out.flatMap((it) => it.lines).join('\n');
};

// ---- per file -------------------------------------------------------------

// whitespace and the rewritten heading ids / expressions aside, nothing may change
const comparable = (s) =>
  s
    .replace(/\\\[#/g, '[#')
    .replace(/\[#[^\]\n]*\]/g, (m) => m.replace(/\\_/g, '_'))
    .replace(/\[#([^\]\n]+)\]\[#\1\]/g, '[#$1]')
    .replace(/\[(.*?)\s*\\?\[#([^\]\n\\]+)\\?\]\]\(([^)\n]+)\)/g, '[$1]($3)[#$2]')
    .replace(/\\\{&lt;&gt;.*?&lt;\/&gt;\}/g, (m) => decode(m).replace(/\\([_{}])/g, '$1'))
    .replace(/\\\{&apos;(.*?)&apos;\}/g, (m, inner) => `{'${decode(inner)}'}`)
    .replace(/\s+/g, '');

export const repair = (text, englishText = '') => {
  const counts = emptyCounts();
  const english = englishLones(englishText);
  const keep = englishBlockDNTs(englishText);
  const out = mapProse(text, (prose) => {
    const fixed = prose
      .split('\n')
      .map((l) => fixExpressions(fixHeading(l, counts), counts))
      .join('\n');
    return mergeInline(mergeInline(collapseInline(fixed, counts, keep), counts, english), counts, english);
  });
  if (!process.env.NOCHECK && out !== text && comparable(out) !== comparable(text)) {
    return { text, counts: emptyCounts(), rejected: true };
  }
  return { text: out, counts, rejected: false };
};

const compiles = (text) => {
  try {
    mdx.sync(text);
    return true;
  } catch (e) {
    return false;
  }
};

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    return p.endsWith('.mdx') ? [p] : [];
  });

const main = () => {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  const li = args.indexOf('--locale');
  const locales = li >= 0 ? args[li + 1].split(',') : LOCALES;
  const explicit = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--locale');
  const files = explicit.length
    ? explicit.map((f) => path.resolve(f))
    : locales.flatMap((l) => walk(path.join(I18N, l)));

  const totals = {};
  const reverted = [];
  const rejected = [];
  const changed = [];
  files.forEach((file) => {
    const rel = path.relative(I18N, file);
    const locale = rel.split(path.sep)[0];
    const enFile = path.join(ENGLISH, rel.split(path.sep).slice(1).join(path.sep));
    const src = fs.readFileSync(file, 'utf8');
    const en = fs.existsSync(enFile) ? fs.readFileSync(enFile, 'utf8') : '';
    const { text, counts, rejected: bad } = repair(src, en);
    if (bad) rejected.push(path.relative(ROOT, file));
    if (text === src) return;
    if (write) {
      if (compiles(src) && !compiles(text)) {
        reverted.push(path.relative(ROOT, file));
        return;
      }
      fs.writeFileSync(file, text);
    }
    changed.push(path.relative(ROOT, file));
    totals[locale] ??= { ...emptyCounts(), files: 0 };
    Object.entries(counts).forEach(([k, v]) => {
      totals[locale][k] += v;
    });
    totals[locale].files += 1;
  });

  console.log(write ? 'WROTE' : 'DRY RUN (use --write to apply)');
  console.table(totals);
  if (rejected.length) {
    console.log('Skipped, result changed more than whitespace:');
    rejected.forEach((f) => console.log(`  ${f}`));
  }
  if (reverted.length) {
    console.log('Reverted (compiled before, not after):');
    reverted.forEach((f) => console.log(`  ${f}`));
  }
  if (process.env.LIST) changed.forEach((f) => console.log(f));
};

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
