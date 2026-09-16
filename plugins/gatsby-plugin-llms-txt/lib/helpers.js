const fs = require('fs');
const path = require('path');
const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const toString = require('mdast-util-to-string');
const unified = require('unified');
const remarkParse = require('remark-parse');
const stringify = require('remark-stringify');
const yaml = require('js-yaml');
const { findAttribute } = require('../../../codemods/utils/mdxast');
// InlinePopover's visible text (`inlineText`) is resolved from this JSON by
// its `type` prop at React render time - it's never a plain MDX attribute,
// so it has to be looked up the same way here (English only, matching this
// plugin's own English-only scope).
const popoversEn = require('../../../src/data/popovers_en.json');
// A `type` typo'd in the wrong case (e.g. "APM" instead of "apm") fails this
// lookup identically in the real component (it silently renders nothing) -
// but since a lookup key can only ever mean one popover regardless of case,
// falling back to a case-insensitive match here costs nothing and recovers
// real content a strict-case lookup would otherwise drop.
const popoversEnKeyByLowerCase = Object.fromEntries(
  Object.keys(popoversEn).map((key) => [key.toLowerCase(), key])
);

// Icon is purely decorative - no alt/aria-label prop exists on the real
// component, and dropping it is correct for the hundreds of usages where
// surrounding prose already names it (e.g. "select the plus <Icon .../>
// icon"). But a handful of icon names are used as the ONLY content in a
// table cell to mean yes/no/warning in compatibility matrices (~410 real
// occurrences, e.g. `<td><Icon name="fe-check" /></td>` meaning "supported"
// with no other text in the cell) - dropping those silently turns a fully-
// supported row into a row that reads as fully UNsupported, the opposite of
// what the table means. Everything else stays correctly empty.
const ICON_TEXT_EQUIVALENTS = {
  'fe-check': '✓',
  'fe-x': '✗',
  'fe-alert-triangle': '⚠',
};

// remark-stringify@8.1.1 (the version installed here) only knows how to
// render a fixed set of standard mdast node types (see
// node_modules/remark-stringify/lib/compiler.js) - anything else throws
// "Missing compiler for node of type X". These are the non-standard types
// that can appear in a real MDX AST and have no component-name concept, so
// they can't go through dispatchFlow/dispatchText.
const NON_STANDARD_NODE_TYPES = new Set([
  'mdxBlockExpression',
  'mdxSpanExpression',
  'mdxTextExpression',
  'mdxFlowExpression',
  'mdxValueExpression',
  'mdxJsxAttributeValueExpression',
  'export',
  'import',
  'mdxjsEsm',
  'inlineMath',
  'math',
]);

// Converts a text node to plain text, or drops it if empty, so the
// stringifier never sees a node type it doesn't recognize. This also
// catches expression nodes used as a JSX child (not just an attribute
// value) - e.g. `<TabsBarItem>{ <>Find spans using the
// <InlineCode>like</InlineCode> operator</> }</TabsBarItem>` - which is
// the exact same "raw, never-dispatched JSX source text" shape
// cleanJsxExpressionText() exists for, just reached through a different
// node type than a Collapser's `title` attribute.
const toTextOrDrop = (node) => {
  const text = toString(node).trim();
  return text ? cleanJsxExpressionText(text) : [];
};

// An attribute's value is usually a plain string, but when it's set via a
// JSX expression (e.g. title={<><InlineCode>delay</InlineCode> (in minutes)</>})
// findAttribute() returns the raw expression node instead - an object, not a
// string - which crashes downstream string methods (.startsWith, .charAt via
// the stringifier's escaper, etc.) if used as-is. Fall back to the
// expression's own raw source text when available.
const attributeText = (value) => {
  if (typeof value === 'string') return value;
  if (value && typeof value.value === 'string') return value.value;
  return null;
};

// A single `.replace(tagRegex, '')` pass can leave a brand-new tag behind:
// removing the inner match from "<scri<b>pt>" leaves "<scri" and "pt>" to
// join back into "<script>", which the single pass never revisits (CodeQL
// js/incomplete-multi-character-sanitization). Re-run the replacement until
// it stops changing anything, the same fix GitHub's own docs for this rule
// recommend.
const stripTagsCompletely = (text) => {
  let current = text;
  let previous;
  do {
    previous = current;
    current = current.replace(/<\/?[A-Za-z][A-Za-z0-9]*(?:\s+[^>]*)?\/?>/g, '');
  } while (current !== previous);
  return current;
};

// attributeText()'s JSX-expression fallback is the raw, never-dispatched
// source text of the expression - so a title like
// `title={<>Use <InlineCode>PREDICT</InlineCode> clause.</>}` comes back
// as the literal string "<>Use <InlineCode>PREDICT</InlineCode>
// clause.</>". This exact shape (a fragment wrapping prose plus one or
// more <InlineCode> spans, occasionally a <Link>) is extremely common -
// 100+ real Collapser titles, concentrated in nrql-syntax-clauses-
// functions.mdx - so leaving it raw would flood titles with literal
// "<InlineCode>" tag text. Splits into real text/inlineCode mdast nodes
// (not a single string with literal backticks in it - remark-stringify
// would escape those as `\``, same problem in a different disguise) and
// strips any other remaining tag (covers the one real title that also
// wraps a <Link> - its href is lost, but that beats literal "<Link to=...>"
// text) rather than leave every one of these titles unreadable.
const cleanJsxExpressionText = (raw) => {
  const stripped = raw.replace(/^<>|<\/>$/g, '');
  const parts = stripped.split(/<InlineCode>([\s\S]*?)<\/InlineCode>/g);
  return parts
    .map((part, i) =>
      i % 2 === 1
        ? { type: 'inlineCode', value: part }
        : { type: 'text', value: stripTagsCompletely(part) }
    )
    .filter((node) => node.value !== '');
};

// A raw HTML <td>/<th> can contain multiple blocks (a paragraph followed by
// a bullet list, say) - real content in the wild does this. remark-stringify's
// table-cell visitor is only built for phrasing/inline children: it does
// `this.all(node).join('')` with no separator, then just swaps embedded
// newlines for spaces afterward. That compiles each block to its own
// markdown string and glues them directly together (a paragraph immediately
// followed by "-   list item" text, no space) before the newline pass ever
// runs. Flatten multi-block cell content into one inline line ourselves, with
// a plain-text separator between blocks/items - this output is read as raw
// text by an LLM, not rendered to HTML, so an actual `<br>` tag would just
// mean an escaped, noisier "&lt;br>" for no benefit over a plain space.
// A single list item can itself hold more than one paragraph - e.g. a
// CommonMark lazy-continuation quirk (non-indented content right after a
// blank line following list items) swallows an unrelated label paragraph
// into the previous item instead of making it a new sibling. Recursing with
// the same segment-collecting logic handles that nesting the same way as
// the top level, instead of only fixing the one level that was reported.
const collectCellSegments = (nodes) => {
  const segments = [];
  (nodes || []).forEach((node) => {
    if (node.type === 'paragraph') {
      segments.push(node.children || []);
    } else if (node.type === 'list') {
      (node.children || []).forEach((item) => {
        const itemSegments = collectCellSegments(item.children);
        const itemInline = itemSegments.flatMap((segment, i) =>
          i === 0 ? segment : [{ type: 'text', value: ' ' }, ...segment]
        );
        segments.push([{ type: 'text', value: '- ' }, ...itemInline]);
      });
    } else if (node.type === 'listItem') {
      // A bare listItem with no `list` wrapper - e.g. a <TechTileGrid>
      // holding a single <TechTile> nested inside a <th> (used as a column-
      // header icon/link, not a real list). remark-stringify's listItem
      // visitor still has a registered standalone dispatch for this and
      // would render its own "- " bullet marker even here, which reads as
      // a stray bullet inside what's meant to be a plain cell. Unwrap its
      // content the same way as a list *item* above, just without adding
      // that bullet back.
      const itemSegments = collectCellSegments(node.children);
      segments.push(
        itemSegments.flatMap((segment, i) =>
          i === 0 ? segment : [{ type: 'text', value: ' ' }, ...segment]
        )
      );
    } else {
      segments.push([node]);
    }
  });
  return segments;
};

const flattenCellContent = (children) => {
  const segments = collectCellSegments(children);
  return segments.flatMap((segment, i) =>
    i === 0 ? segment : [{ type: 'text', value: ' ' }, ...segment]
  );
};

/**
 * Dispatches a flow-level (block) custom MDX component to its markdown
 * equivalent. `node.children` is always already fully resolved by the time
 * this runs (see transformNode). Returns a single node, an array (to
 * unwrap/splice in place), or an empty array to drop the node.
 */
const dispatchFlow = (node) => {
  if (node.name === 'Callout') {
    const variant = attributeText(findAttribute('variant', node)) || 'tip';
    const variantEmoji = {
      tip: '💡',
      important: '⚠️',
      caution: '⚠️',
      warning: '⚠️',
    }[variant] || '💡';

    // The real component's `title` prop overrides the variant name as the
    // visible label (e.g. `<Callout title="preview">`, used on ~96 real
    // pages, most commonly for the standard preview-doc banner) - and is
    // itself uppercased on publish, same as the variant-derived default.
    // Without reading it, every one of those callouts came out mislabeled
    // "TIP" here, silently dropping the author's actual title text.
    const title = attributeText(findAttribute('title', node)) || variant;

    // A titled aside reads as a heading, not bold body text, in a real
    // heading hierarchy (see Tabs above) - Stripe's own callouts follow the
    // same `> #### Title` shape rather than bolding the label.
    return {
      type: 'blockquote',
      children: [
        {
          type: 'heading',
          depth: 4,
          children: [{ type: 'text', value: `${variantEmoji} ${title.toUpperCase()}` }],
        },
        ...(node.children || []),
      ],
    };
  }

  if (node.name === 'ButtonLink') {
    const href = attributeText(findAttribute('to', node)) || '#';
    const text = toString(node);
    return {
      type: 'link',
      url: href.startsWith('/') ? `https://docs.newrelic.com${href}` : href,
      children: [{ type: 'text', value: text }],
    };
  }

  // Strip DNT (Do Not Translate) - just keep the content
  if (node.name === 'DNT') {
    return node.children;
  }

  if (node.name === 'Icon') {
    const name = attributeText(findAttribute('name', node));
    const symbol = ICON_TEXT_EQUIVALENTS[name];
    return symbol ? { type: 'text', value: symbol } : [];
  }

  // Raw JSX <img> (as opposed to markdown ![]() syntax, which already
  // arrives as a proper mdast `image` node) - lowercase HTML tag names have
  // no component-name concept, so they're not on any author's radar as
  // something to specifically break, but they're also not the generic
  // "unrecognized custom component" case below. Without this, a self-
  // closing <img> has no children to fall back on and vanishes completely -
  // both the src AND the (often descriptive) alt text - which is how the
  // overwhelming majority of images in this docs site are actually
  // authored: 2,364 raw <img> occurrences across 793 pages, vs. 4 pages
  // using markdown image syntax.
  if (node.name === 'img') {
    const url = attributeText(findAttribute('src', node)) || '';
    const alt = attributeText(findAttribute('alt', node)) || '';
    const title = attributeText(findAttribute('title', node));
    return { type: 'image', url, alt, title: title || null };
  }

  // Render title + body as a bold line followed by the body content, so
  // nothing is lost. The title may arrive as a plain string attribute, or
  // (if it was originally a JSX expression) already extracted into a
  // synthetic `CollapserTitle` first child by
  // plugins/utils/jsxImagesToChildren.js, which runs earlier in the MDX
  // compile pipeline and removes the attribute in that case - check both.
  if (node.name === 'Collapser') {
    const attrTitle = attributeText(findAttribute('title', node));
    let bodyChildren = node.children || [];
    let titleChildren;

    if (attrTitle) {
      titleChildren = cleanJsxExpressionText(attrTitle);
    } else if (bodyChildren[0] && bodyChildren[0].name === 'CollapserTitle') {
      titleChildren = bodyChildren[0].children;
      bodyChildren = bodyChildren.slice(1);
    } else {
      titleChildren = [{ type: 'text', value: 'Details' }];
    }

    return [
      { type: 'paragraph', children: [{ type: 'strong', children: titleChildren }] },
      ...bodyChildren,
    ];
  }

  // Unwrap CollapserGroup - each Collapser child has already been resolved
  // into a title+body sequence by the handler above, so nothing is lost.
  if (node.name === 'CollapserGroup') {
    return node.children;
  }

  if (node.name === 'TechTile') {
    // `to` is optional on the real component (no `.isRequired`) - 0 real
    // pages currently omit it, but wrapping an empty string in a link
    // unconditionally would still produce a broken `[name]()` for the day
    // one does, so only link when there's actually a destination.
    const name = attributeText(findAttribute('name', node)) || '';
    const to = attributeText(findAttribute('to', node));
    const label = { type: 'text', value: name };
    return {
      type: 'listItem',
      children: [
        {
          type: 'paragraph',
          children: [
            to
              ? {
                  type: 'link',
                  url: to.startsWith('/') ? `https://docs.newrelic.com${to}` : to,
                  children: [label],
                }
              : label,
          ],
        },
      ],
    };
  }

  // Raw HTML tables written directly as JSX (as opposed to markdown pipe-tables,
  // which already arrive as proper mdast `table` nodes). Without this, table/tr/td/th
  // fall to the generic unwrap below and lose all row/column structure - text just
  // runs together with no indication of what's a header vs. a cell.
  if (node.name === 'thead' || node.name === 'tbody') {
    return node.children;
  }
  if (node.name === 'tr') {
    return { type: 'tableRow', children: node.children };
  }
  if (node.name === 'th' || node.name === 'td') {
    return { type: 'tableCell', children: flattenCellContent(node.children) };
  }
  if (node.name === 'table') {
    // Authors sometimes add a JSX expression like {' '} between <tr> rows to
    // force whitespace that JSX would otherwise collapse. toTextOrDrop()
    // stringifies its raw source (quotes included), which doesn't trim to
    // empty, so it survives as a stray text node here. remark-stringify's
    // table visitor assumes every row is a tableRow with real children, so
    // an unfiltered stray node crashes it - drop anything that isn't one.
    const rows = (node.children || []).filter((child) => child.type === 'tableRow');
    const columnCount = rows[0]?.children?.length || 0;
    return { type: 'table', align: Array(columnCount).fill(null), children: rows };
  }

  // Steps/Step render as a numbered sequence visually - for an untitled
  // step (no heading of its own), a real ordered list item makes that
  // explicit ordering explicit in markdown too. A step that DOES have its
  // own heading (the common real-page shape: `<Step>### Title...</Step>`)
  // is a titled section in its own right, not list content - splicing it
  // in directly instead lets it stand as a normal heading, the same way
  // Stripe's own .md export promotes a titled step to a plain heading with
  // no list numbering at all, rather than nesting the heading inside a
  // `1.` marker.
  if (node.name === 'Step') {
    const children = node.children || [];
    if (children[0] && children[0].type === 'heading') {
      return children;
    }
    return { type: 'listItem', spread: false, children };
  }
  if (node.name === 'Steps') {
    // A stray JSX comment ({/* ... */}) between <Step> siblings survives as
    // a non-empty bare text node (see toTextOrDrop) rather than being
    // dropped, the same way a {' '} spacer corrupts a raw <table>'s row
    // list - drop that specific shape. Everything else here is real
    // content: either a listItem (untitled step) or a titled step's own
    // spliced heading + body (see above), never a bare text node itself.
    const kept = (node.children || []).filter((child) => child.type !== 'text');

    // Consecutive untitled steps still share one numbered list; a titled
    // step's spliced content passes through as its own section, breaking
    // that run so the next untitled step (if any) starts a fresh list.
    const result = [];
    let run = [];
    const flushRun = () => {
      if (run.length) {
        result.push({ type: 'list', ordered: true, start: 1, spread: false, children: run });
        run = [];
      }
    };
    kept.forEach((child) => {
      if (child.type === 'listItem') {
        run.push(child);
      } else {
        flushRun();
        result.push(child);
      }
    });
    flushRun();
    return result;
  }

  // Video is self-closing with no text content in the MDX source at all -
  // just a platform `type` and an `id`. Without this, it vanishes entirely
  // with no indication a video was ever there. Build the same embed URL
  // the real component does (see Video.js's videoPlatforms map) so at
  // least a followable link survives.
  if (node.name === 'Video') {
    const videoType = attributeText(findAttribute('type', node));
    const videoId = attributeText(findAttribute('id', node));
    const title = attributeText(findAttribute('title', node)) || 'Video';
    const embedUrl = {
      youtube: (id) => `https://www.youtube.com/embed/${id}`,
      wistia: (id) => `https://fast.wistia.net/embed/iframe/${id}`,
    }[videoType]?.(videoId);
    return embedUrl ? { type: 'link', url: embedUrl, children: [{ type: 'text', value: title }] } : [];
  }

  // Normally intercepted and paired with its TabsPageItem by transformTabs()
  // at the parent <Tabs> level. Only reached if a TabsBarItem/TabsBar shows
  // up without the expected <Tabs><TabsBar/><TabsPages/></Tabs> wrapper -
  // bolding the label is a reasonable fallback for that unexpected shape.
  if (node.name === 'TabsBarItem') {
    return { type: 'paragraph', children: [{ type: 'strong', children: node.children }] };
  }

  // DocTile is a navigation card: title + link (path) + a short description
  // as children. Without this, both the title and the link vanish, leaving
  // only the bare description with no indication it was ever a link.
  //
  // ~27% of real usages (204 of 751) omit `title` entirely - in the real
  // component, `children` itself becomes the tile's heading *and* its link
  // text in that case, not a separate description under an empty heading.
  // Treating it as body text under an empty heading (the old behavior)
  // dropped the link/destination completely, leaving what reads as an
  // unlinked, purposeless phrase.
  if (node.name === 'DocTile') {
    const title = attributeText(findAttribute('title', node));
    const path = attributeText(findAttribute('path', node)) || '#';
    const url = path.startsWith('/') ? `https://docs.newrelic.com${path}` : path;

    // No bold wrapper on the link text - TechTile (the same "card" concept
    // elsewhere in this file) doesn't bold its link either, and neither
    // does a real card-grid tile in the wild (e.g. Stripe's own `.md`
    // export: `[Create a Stripe account](url): Create and activate...`).
    if (!title) {
      return {
        type: 'paragraph',
        children: [{ type: 'link', url, children: node.children || [] }],
      };
    }

    return [
      {
        type: 'paragraph',
        children: [{ type: 'link', url, children: [{ type: 'text', value: title }] }],
      },
      ...(node.children || []),
    ];
  }

  // Default: unrecognized component name - strip the wrapper but keep children
  return node.children;
};

/**
 * Dispatches a span-level (inline) custom MDX component to its markdown
 * equivalent.
 */
const dispatchText = (node) => {
  if (node.name === 'InlineCode') {
    return { type: 'inlineCode', value: toString(node) };
  }

  if (node.name === 'InlinePopover') {
    const type = attributeText(findAttribute('type', node));
    const canonicalType =
      type && (popoversEn[type] ? type : popoversEnKeyByLowerCase[type.toLowerCase()]);
    const text =
      popoversEn[canonicalType]?.inlineText ||
      attributeText(findAttribute('text', node)) ||
      toString(node);
    return { type: 'text', value: text };
  }

  if (node.name === 'DNT') {
    return node.children;
  }

  if (node.name === 'Icon') {
    // Drop entirely rather than an empty text node, matching dispatchFlow's
    // Icon handler - same decorative-vs-meaningful distinction applies
    // inline as it does at block level.
    const name = attributeText(findAttribute('name', node));
    const symbol = ICON_TEXT_EQUIVALENTS[name];
    return symbol ? { type: 'text', value: symbol } : [];
  }

  if (node.name === 'img') {
    const url = attributeText(findAttribute('src', node)) || '';
    const alt = attributeText(findAttribute('alt', node)) || '';
    const title = attributeText(findAttribute('title', node));
    return { type: 'image', url, alt, title: title || null };
  }

  // Default: convert to text
  return { type: 'text', value: toString(node) };
};

// <Tabs> pairs a TabsBar (labels) with a TabsPages (content) as SIBLINGS,
// matched only by a shared `id` attribute between each TabsBarItem and its
// TabsPageItem - not by nesting. Generic per-node dispatch has no way to see
// across that sibling boundary: TabsBar and TabsPages each get unwrapped
// independently, so every label ends up bunched together up front, followed
// by every tab's content concatenated back-to-back with no separator or
// indication of which label it belongs to - worse than losing the label,
// the content itself becomes unattributable. Must run on the RAW node,
// before transformNode's generic recursion has already unwrapped TabsBar/
// TabsPages away and lost the id attributes this needs to pair them.
const transformChildren = (nodes, headingCtx) =>
  (nodes || []).flatMap((child) => {
    const result = transformNode(child, headingCtx);
    return Array.isArray(result) ? result : [result];
  });

// A label can resolve to a bare paragraph (e.g. <DNT>**Label**</DNT> used as
// a block element, rather than plain text) instead of already-inline
// content - a heading's children must be inline, so unwrap that one
// wrapping layer (keeping any bold/etc. inside it intact). A plain-text
// label (the common case) doesn't match this shape and passes through
// untouched.
const unwrapParagraph = (nodes) => {
  if (nodes.length === 1 && nodes[0].type === 'paragraph') {
    return nodes[0].children;
  }
  return nodes;
};

// A heading an author writes inside a tab's content is at a fixed depth
// independent of which tab it happens to sit in (e.g. every real <Step>'s
// own heading is "###", tab-agnostic - on the live site tabs are a UI
// switcher, not part of the heading hierarchy, so there was never a reason
// to write it any deeper). Nesting it correctly under its tab's own
// (synthetic) label heading needs an active shift, not just reading it as
// ambient context - otherwise a literal `### Step title` and a `### Tab
// label` one level up collide at the same depth, reading as siblings
// instead of parent/child. shallowestHeadingDepth() finds the shallowest
// heading actually authored in a tab's content (the "top" of whatever
// hierarchy the author wrote); shiftHeadings() then moves every heading in
// that content down by the same amount, preserving their relative
// structure (siblings stay siblings, a sub-heading stays one level under
// its own section) while landing the shallowest one just below the tab
// label. Both stop at a nested <Tabs> - that one computes and applies its
// own shift independently once transformTabs reaches it.
const shallowestHeadingDepth = (nodes) => {
  let min = Infinity;
  (nodes || []).forEach((node) => {
    if (node.type === 'heading') min = Math.min(min, node.depth);
    if (node.name !== 'Tabs' && Array.isArray(node.children)) {
      min = Math.min(min, shallowestHeadingDepth(node.children));
    }
  });
  return min;
};

const shiftHeadings = (nodes, offset) => {
  if (!offset) return;
  (nodes || []).forEach((node) => {
    if (node.type === 'heading') node.depth = Math.min(6, node.depth + offset);
    if (node.name !== 'Tabs' && Array.isArray(node.children)) {
      shiftHeadings(node.children, offset);
    }
  });
};

// Tab labels render as real headings rather than bold text, so both the
// hierarchy (this is a titled section, not an emphasized run of body text)
// and the nesting (a <Tabs> inside another tab's content is a sub-section
// of it) survive into the flattened markdown. Depth tracks whatever heading
// last preceded this point in the document (headingCtx, updated as
// transformNode walks headings in document order) so a top-level <Tabs>
// lands one level under its enclosing section while a <Tabs> nested inside
// another tab's content lands one level under THAT tab's own label -
// mirroring how e.g. Stripe's own .md export nests a platform-picker tab
// group a level deeper than the install-method tab group it sits inside.
const transformTabs = (tabsNode, headingCtx) => {
  const bar = (tabsNode.children || []).find((c) => c.name === 'TabsBar');
  const pages = (tabsNode.children || []).find((c) => c.name === 'TabsPages');

  if (!bar || !pages) {
    // Unexpected shape - fall back to plain per-child transformation
    // rather than guess at a pairing that isn't there.
    return transformChildren(tabsNode.children, headingCtx);
  }

  const barItems = (bar.children || []).filter((c) => c.name === 'TabsBarItem');
  const pageItems = (pages.children || []).filter((c) => c.name === 'TabsPageItem');

  const outerDepth = headingCtx.depth;
  const tabDepth = Math.min(outerDepth + 1, 6);

  const result = barItems.flatMap((barItem, i) => {
    const id = attributeText(findAttribute('id', barItem));
    const pageItem =
      pageItems.find((p) => attributeText(findAttribute('id', p)) === id) || pageItems[i];

    // Each tab's own content is walked as if tabDepth were the ambient
    // heading level, so a heading (or another nested <Tabs>) inside it
    // nests one level deeper still - reset per tab, not carried over from
    // whatever the previous tab's content last left it at.
    headingCtx.depth = tabDepth;

    // A label can itself hold a block-level component (e.g. <DNT>**Label**</DNT>)
    // - it must go through the same transform as everything else, not be
    // spliced in raw, or an unresolved mdxBlockElement crashes the stringifier.
    const label = {
      type: 'heading',
      depth: tabDepth,
      children: unwrapParagraph(transformChildren(barItem.children, headingCtx)),
    };

    // Rescale this tab's own already-authored headings (see
    // shallowestHeadingDepth/shiftHeadings above) so they land one level
    // under the label instead of colliding with it at the same depth.
    const shallowest = shallowestHeadingDepth(pageItem?.children);
    if (Number.isFinite(shallowest)) {
      shiftHeadings(pageItem?.children, tabDepth + 1 - shallowest);
    }

    const content = transformChildren(pageItem?.children, headingCtx);

    return [label, ...content];
  });

  // Restore the ambient depth for whatever comes after </Tabs> - it must
  // not inherit whatever a tab's own content last left headingCtx at.
  headingCtx.depth = outerDepth;
  return result;
};

/**
 * Recursively rebuilds a node's children before dispatching the node
 * itself (post-order), guaranteeing nested custom components (e.g. a
 * Collapser inside a CollapserGroup) are always fully resolved before
 * stringification - by construction, not by luck.
 *
 * This replaces a single-pass mutate-while-traversing `unist-util-visit`
 * call that silently skipped siblings whenever a replacement's length
 * wasn't exactly 1 (most commonly 0, e.g. a childless self-closing
 * component) - the root cause of ~30% of pages failing to convert.
 */
const transformNode = (node, headingCtx) => {
  if (node.type === 'heading') {
    headingCtx.depth = node.depth;
  }

  if (node.name === 'Tabs') {
    return transformTabs(node, headingCtx);
  }

  if (Array.isArray(node.children)) {
    node.children = node.children.flatMap((child) => {
      const result = transformNode(child, headingCtx);
      if (result === undefined || result === null) return [];
      return Array.isArray(result) ? result : [result];
    });
  }

  if (node.type === 'mdxBlockElement' || node.type === 'mdxJsxFlowElement') {
    return dispatchFlow(node);
  }
  if (node.type === 'mdxSpanElement' || node.type === 'mdxJsxTextElement') {
    return dispatchText(node);
  }
  if (NON_STANDARD_NODE_TYPES.has(node.type)) {
    return toTextOrDrop(node);
  }

  return node;
};

/**
 * Converts MDX AST to clean markdown by removing JSX and simplifying components
 */
const mdxToCleanMarkdown = (mdxAST) => {
  // Clone the AST to avoid mutating the original
  const ast = JSON.parse(JSON.stringify(mdxAST));

  // Remove import and export statements
  remove(ast, { type: 'import' });
  remove(ast, { type: 'export' });
  remove(ast, { type: 'mdxjsEsm' });

  // Page title (frontmatter, not a literal node here) is the implicit H1,
  // so the first real content heading is conventionally H2 - a <Tabs> with
  // nothing above it defaults to that same starting depth.
  transformNode(ast, { depth: 1 });

  // Convert relative links/images to absolute. This only mutates fields in
  // place (never array length), so it's safe under plain unist-util-visit,
  // unlike the component-replacement pass above.
  visit(ast, (node) => {
    if (node.type === 'link' && node.url && node.url.startsWith('/docs/')) {
      node.url = `https://docs.newrelic.com${node.url}`;
    }
    if (node.type === 'image' && node.url && node.url.startsWith('/')) {
      node.url = `https://docs.newrelic.com${node.url}`;
    }
  });

  // Convert AST to markdown string. No custom `handlers` option here - for
  // remark-stringify@8.1.1 that option is inert (it merges into
  // Compiler.prototype.options, never .visitors, so it never actually
  // catches anything); transformNode above is the real, and only,
  // safety net.
  const processor = unified().use(stringify, {
    bullet: '-',
    fence: '`',
    fences: true,
    incrementListMarker: true,
  });

  return processor.stringify(ast);
};

// What's New and EOL content is plain MarkdownRemark, not Mdx - there's no
// `mdxAST`-equivalent GraphQL field for it. `markdownAST` looks like the
// obvious analog but was never real - it's only ever the internal
// parameter name gatsby-transformer-remark's own remark-plugin hooks use
// internally (see e.g. plugins/gatsby-remark-videos/index.js), not a
// queryable schema field; querying it makes the whole GraphQL call fail
// (`Cannot query field "markdownAST"`), which - since nothing checked
// `errors` before destructuring `data` - surfaced as the confusing
// "Cannot destructure property 'site' of 'data'" instead of that real
// message. `htmlAst` IS a real field on MarkdownRemark, but it's an HTML/
// hast tree (`element`/`tagName` nodes), not a markdown/mdast tree
// (`heading`/`paragraph`/... nodes) - incompatible with mdxToCleanMarkdown,
// which dispatches on mdast/mdx node types. `rawMarkdownBody` (the file's
// raw, unparsed markdown text - set directly on the node at creation time,
// see gatsby-transformer-remark/on-node-create.js) IS safe to query, and
// parsing it ourselves with the same remark-parse used everywhere else in
// this file's own verification tooling produces a real mdast tree.
const parseMarkdown = (rawMarkdownBody) => unified().use(remarkParse).parse(rawMarkdownBody || '');

// The site's real top-level categories aren't hand-maintained here - a
// second, independently-updated copy of the ~40 real categories in
// src/nav/*.yml is exactly how "Other" ended up swallowing ~40% of all
// pages (AI monitoring, Kubernetes, OpenTelemetry, Serverless, CodeStream,
// Distributed Tracing, New Relic Lens, Workflow Automation, Licenses, Data
// and APIs, and more all had no entry in the old hardcoded list of ~15).
// generatedNav.yml is the site's own fully-resolved nav tree (root.yml plus
// every category's own file, already merged by scripts/createSingleNav.js)
// - read its top-level sections directly instead of re-deriving the same
// mapping by hand a second time.
const NAV_YAML_PATH = path.join(__dirname, '../../../src/nav/generatedNav.yml');

// Two real, published sections have no resolvable entry in the nav tree at
// all - they're generated dynamically (this repo's release-notes.yml is
// empty; there's no whats-new.yml) rather than hand-authored like every
// other category, so generatedNav.yml leaves their `path:` unresolved
// ("release-notes", "whats-new" - not even absolute). Their real URL
// prefixes come from how their content is actually built (see
// src/content/release-notes and src/content/whats-new, and the query in
// onPostBuild below that now also reads src/content/whats-new and
// src/content/eol directly, since neither lives under src/content/docs).
const UNRESOLVED_NAV_PREFIXES = [
  { prefix: '/docs/release-notes', category: 'Release notes' },
  { prefix: '/whats-new', category: "What's new?" },
];

// A few real content directories are cross-linked INTO another category's
// section rather than owning a top-level nav entry of their own (e.g.
// `/docs/apis/*` pages are linked from within "Data and APIs", not listed
// under their own top-level "APIs" section) - or, for the style guide,
// aren't in the public nav tree at all. Confirmed against src/nav/*.yml.
const PREFIX_OVERRIDES = [
  { prefix: '/docs/apis', category: 'Data and APIs' },
  { prefix: '/docs/mobile-apps', category: 'Guides and best practices' },
  { prefix: '/docs/infrastructure-as-code', category: 'Guides and best practices' },
  { prefix: '/docs/agile-handbook', category: 'Style guide' },
  { prefix: '/docs/style-guide', category: 'Style guide' },
  { prefix: '/docs/query-your-data', category: 'Charts, dashboards, and querying' },
];

// A prefix ending in `-` (e.g. nav's own `/docs/tutorial-`, from its literal
// `/docs/tutorial-/` entry) is a shared-prefix pattern across many sibling
// directory names (`tutorial-create-alerts`, `tutorial-improve-...`), not a
// single parent directory - match it directly rather than requiring a `/`
// boundary after it, which would never occur for this shape.
const matchesPrefix = (slug, prefix) =>
  prefix.endsWith('-') ? slug.startsWith(prefix) : slug === prefix || slug.startsWith(`${prefix}/`);

const loadCategoryPrefixes = () => {
  const nav = yaml.safeLoad(fs.readFileSync(NAV_YAML_PATH, 'utf8'));

  const fromNav = (nav.pages || [])
    .filter((entry) => typeof entry.path === 'string' && entry.path.startsWith('/'))
    .map((entry) => ({ prefix: entry.path.trim().replace(/\/+$/, ''), category: entry.title }));

  // Longest prefix first, so a more specific override (e.g. `/docs/apis`)
  // is tried before a shorter, unrelated one that would otherwise also match.
  return [...fromNav, ...UNRESOLVED_NAV_PREFIXES, ...PREFIX_OVERRIDES].sort(
    (a, b) => b.prefix.length - a.prefix.length
  );
};

// Loaded lazily, on first actual use, rather than eagerly at module load
// time. generatedNav.yml is a build ARTIFACT (gitignored - see .gitignore),
// written by the root gatsby-node.js's `onPreBootstrap` hook - but Gatsby
// requires every plugin's gatsby-node.js (running this module's top-level
// code) while loading plugins, which happens BEFORE onPreBootstrap fires.
// Reading the file at module load time throws ENOENT on any environment
// that hasn't already produced it from an earlier build (a fresh Netlify
// checkout, most CI runs) - it only reliably exists later, e.g. by the time
// onPostBuild (categorizePages' only real caller) runs. This module is
// required lazily too (from inside gatsby-node.js's onPostBuild), but the
// memoization here is still worth keeping as a second line of defense.
let cachedCategoryPrefixes = null;
const getCategoryPrefixes = () => {
  if (!cachedCategoryPrefixes) {
    cachedCategoryPrefixes = loadCategoryPrefixes();
  }
  return cachedCategoryPrefixes;
};

const categoryForSlug = (slug) => {
  const match = getCategoryPrefixes().find(({ prefix }) => matchesPrefix(slug, prefix));
  return match ? match.category : 'Other';
};

/**
 * Categorizes a page based on its slug/path, matching the site's own real
 * nav categories (see getCategoryPrefixes above) instead of a hand-maintained
 * duplicate of them.
 */
const categorizePages = (pages) => {
  const categories = {};

  // Preserve getCategoryPrefixes()' own order (the docs team's curated nav
  // order from root.yml) so the generated index reads the same way the
  // site's own sidebar is organized, rather than an arbitrary object-key
  // order - "Other" (genuinely uncategorizable pages only, now a small
  // residual rather than ~40% of the site) always sorts last.
  getCategoryPrefixes().forEach(({ category }) => {
    if (!categories[category]) categories[category] = [];
  });
  categories['Other'] = [];

  pages.forEach((page) => {
    categories[categoryForSlug(page.slug)].push(page);
  });

  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) {
      delete categories[key];
    }
  });

  return categories;
};

// Release notes (3,967 pages, 52.9% of the root index) and What's New (446
// pages, 6.1%) together are ~59% of the entire root llms.txt, ahead of any
// real product documentation - an AI tool reading the root index to find,
// say, Kubernetes docs pays for thousands of unwanted release-note links
// just to reach it. Split both into their own nested `llms.txt` hubs (a
// "hub of hubs" - the llms.txt convention doesn't require every link to
// point at a content page; a section can link to another index instead),
// so the root index costs one line per section, and a tool that actually
// needs release-note history pays that cost only when it follows the link.

// A hub link's label for a release-notes directory segment - naive
// title-case of its hyphens, with a small fixup dictionary for names that
// would otherwise look wrong. Not a full registry - good enough to not look
// broken, not claimed to handle every future product name.
const SEGMENT_ACRONYM_FIXUPS = {
  net: '.NET',
  php: 'PHP',
  sap: 'SAP',
  ios: 'iOS',
  aws: 'AWS',
  sre: 'SRE',
  nrdot: 'NRDOT',
  cli: 'CLI',
  api: 'API',
  sdk: 'SDK',
  nodejs: 'Node.js',
  tvos: 'tvOS',
  maui: 'MAUI',
};

const humanizeReleaseNotesSegment = (segment) =>
  `${segment
    .replace(/-release-notes$/, '')
    .split('-')
    .map((word) => SEGMENT_ACRONYM_FIXUPS[word] || word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} release notes`;

// Builds a tree from a flat list of {segments, slug, title} entries -
// `segments` is the grouping key path (not the filename itself); the caller
// decides how many real path segments count as grouping (every directory
// segment for release notes - which nests unevenly, some products flat,
// others one level deeper by language/platform - vs. just [year] for
// what's-new, folding month+slug into that year's own leaf).
const buildHubTree = (entries) => {
  const root = { children: new Map(), pages: [] };
  entries.forEach(({ segments, slug, title }) => {
    let node = root;
    segments.forEach((segment) => {
      if (!node.children.has(segment)) {
        node.children.set(segment, { children: new Map(), pages: [] });
      }
      node = node.children.get(segment);
    });
    node.pages.push({ slug, title });
  });
  return root;
};

// Renders one hub node - and, recursively, every descendant hub - into
// {path, content} files, post-order (children render first, so their own
// URL/title/page-count are already known by the time this node links to
// them). A node with only children (no direct pages) becomes a branch hub
// linking to each child's own hub; a node with only direct pages (no
// children) becomes a leaf hub listing them flat - both shapes fall out of
// the same code, no directory name is special-cased.
const renderHubTree = (node, { urlPath, title, siteUrl, humanize = (s) => s, sortChildren = 'asc' }) => {
  const files = [];
  const childLinks = [];
  let count = node.pages.length;

  [...node.children.keys()]
    .sort((a, b) => (sortChildren === 'desc' ? b.localeCompare(a) : a.localeCompare(b)))
    .forEach((segment) => {
      const childTitle = humanize(segment);
      const rendered = renderHubTree(node.children.get(segment), {
        urlPath: `${urlPath}/${segment}`,
        title: childTitle,
        siteUrl,
        humanize,
        sortChildren,
      });
      files.push(...rendered.files);
      childLinks.push({ title: childTitle, url: rendered.indexUrl, count: rendered.count });
      count += rendered.count;
    });

  let content = `# ${title}\n\n`;
  content += `> Index of ${count} page${count === 1 ? '' : 's'}.\n\n`;

  childLinks.forEach(({ title: childTitle, url, count: childCount }) => {
    content += `- [${childTitle} (${childCount} page${childCount === 1 ? '' : 's'})](${url})\n`;
  });
  if (childLinks.length && node.pages.length) content += '\n';

  [...node.pages]
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .forEach((page) => {
      const pageTitle = page.title || page.slug.split('/').pop();
      content += `- [${pageTitle}](${siteUrl}${page.slug}.md)\n`;
    });

  const indexUrl = `${siteUrl}${urlPath}/llms.txt`;
  files.push({ path: `${urlPath}/llms.txt`, content });

  return { files, indexUrl, count };
};

const buildReleaseNotesHubs = (pages, siteUrl) => {
  const prefix = '/docs/release-notes';
  const relevant = pages.filter((p) => p.slug === prefix || p.slug.startsWith(`${prefix}/`));

  // Every real product/language directory has its own `index.mdx` landing
  // page alongside its dated release notes (e.g. .../agent-control-release-notes/
  // has both index.mdx and agent-control-2026-07-06.mdx). Gatsby collapses
  // an index file's own slug to its containing directory's path, with no
  // distinct "filename" segment left to drop - naively treating every
  // page's last path segment as its filename would misplace that landing
  // page one level too high (as a direct page of the PARENT), splitting it
  // away from its own dated siblings. Detect this by checking whether a
  // page's own full remaining path is itself a directory some OTHER page
  // already lives under - if so, don't drop a segment for it, so it lands
  // in the same node as its siblings instead of one level up.
  const parts = relevant.map((p) => (p.slug === prefix ? [] : p.slug.slice(prefix.length + 1).split('/')));
  const impliedDirs = new Set(parts.map((p) => p.slice(0, -1).join('/')));

  const entries = relevant.map((p, i) => {
    const isIndexPage = impliedDirs.has(parts[i].join('/'));
    const segments = isIndexPage ? parts[i] : parts[i].slice(0, -1);
    return { segments, slug: p.slug, title: p.title };
  });

  return renderHubTree(buildHubTree(entries), {
    urlPath: prefix,
    title: 'Release notes',
    siteUrl,
    humanize: humanizeReleaseNotesSegment,
    sortChildren: 'asc',
  });
};

const buildWhatsNewHubs = (pages, siteUrl) => {
  const prefix = '/whats-new';
  const entries = pages
    .filter((p) => p.slug.startsWith(`${prefix}/`))
    .map((p) => ({ segments: [p.slug.slice(prefix.length + 1).split('/')[0]], slug: p.slug, title: p.title }));

  return renderHubTree(buildHubTree(entries), {
    urlPath: prefix,
    title: "What's new?",
    siteUrl,
    sortChildren: 'desc',
  });
};

/**
 * Generates the llms.txt index file. `hubIndexes` (built from
 * buildReleaseNotesHubs/buildWhatsNewHubs) maps a category name to its own
 * nested hub - when present, that category renders one link to the hub
 * instead of enumerating every page in it.
 */
const generateLlmsTxt = (categorizedPages, siteUrl, hubIndexes = {}) => {
  let content = '# New Relic Documentation\n\n';
  content += '> Documentation for New Relic\'s observability platform.\n\n';
  content += 'This file provides clean markdown versions of all documentation pages for AI tools and LLM-powered assistants.\n\n';
  content += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;

  Object.entries(categorizedPages).forEach(([category, pages]) => {
    content += `## ${category}\n\n`;

    const hub = hubIndexes[category];
    if (hub) {
      content += `- [${category} index (${hub.count} pages)](${hub.url})\n`;
    } else {
      pages.forEach(page => {
        const title = page.title || page.slug.split('/').pop();
        const url = `${siteUrl}${page.slug}.md`;
        content += `- [${title}](${url})\n`;
      });
    }

    content += '\n';
  });

  return content;
};

// Shared write path for every text output this plugin produces (per-page
// .md files, nested llms.txt hubs, the root llms.txt) - creates the
// destination directory first since none of these paths necessarily exist
// yet under public/.
const writeTextFile = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
};

module.exports = {
  mdxToCleanMarkdown,
  parseMarkdown,
  categorizePages,
  categoryForSlug,
  generateLlmsTxt,
  buildHubTree,
  renderHubTree,
  buildReleaseNotesHubs,
  buildWhatsNewHubs,
  humanizeReleaseNotesSegment,
  writeTextFile,
};
