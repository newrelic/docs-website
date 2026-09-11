const fs = require('fs');
const path = require('path');
const visit = require('unist-util-visit');
const remove = require('unist-util-remove');
const toString = require('mdast-util-to-string');
const unified = require('unified');
const stringify = require('remark-stringify');
const { findAttribute } = require('../../codemods/utils/mdxast');
// InlinePopover's visible text (`inlineText`) is resolved from this JSON by
// its `type` prop at React render time - it's never a plain MDX attribute,
// so it has to be looked up the same way here (English only, matching this
// plugin's own English-only scope).
const popoversEn = require('../../src/data/popovers_en.json');
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
    current = current.replace(/<\/?[A-Za-z][A-Za-z0-9]*(?:\s+[^>]*)?>/g, '');
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

    return {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            { type: 'strong', children: [{ type: 'text', value: `${variantEmoji} ${variant.toUpperCase()}` }] },
          ],
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

  // Steps/Step render as a numbered sequence visually - without this, each
  // step still reads fine as consecutive paragraphs, but the explicit
  // ordering is left implicit. A real ordered list makes it explicit.
  if (node.name === 'Step') {
    return { type: 'listItem', spread: false, children: node.children };
  }
  if (node.name === 'Steps') {
    // A stray JSX comment ({/* ... */}) between <Step> siblings survives as
    // a non-empty text node (see toTextOrDrop) rather than being dropped,
    // the same way a {' '} spacer corrupts a raw <table>'s row list.
    // remark-stringify's list-item visitor assumes every child is a real
    // listItem with its own `children` array - an unfiltered stray node
    // crashes it. Drop anything that isn't one.
    const items = (node.children || []).filter((child) => child.type === 'listItem');
    return { type: 'list', ordered: true, start: 1, spread: false, children: items };
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

    if (!title) {
      return {
        type: 'paragraph',
        children: [{ type: 'link', url, children: [{ type: 'strong', children: node.children || [] }] }],
      };
    }

    return [
      {
        type: 'paragraph',
        children: [{ type: 'link', url, children: [{ type: 'strong', children: [{ type: 'text', value: title }] }] }],
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
    const name = attributeText(findAttribute('name', node));
    const symbol = ICON_TEXT_EQUIVALENTS[name];
    return { type: 'text', value: symbol || '' };
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
const transformChildren = (nodes) =>
  (nodes || []).flatMap((child) => {
    const result = transformNode(child);
    return Array.isArray(result) ? result : [result];
  });

// A label wrapped in its own <DNT>**bold**</DNT> already transforms to a
// paragraph (or bare node) containing a single `strong` - wrapping that in
// another `strong` for the tab-label styling below would double the
// asterisks (`****text****`). Unwrap that one redundant layer first; a
// plain-text label (the common case) doesn't match either shape here and
// passes through untouched.
const unwrapIfAlreadyBold = (nodes) => {
  if (nodes.length === 1 && nodes[0].type === 'strong') {
    return nodes[0].children;
  }
  if (nodes.length === 1 && nodes[0].type === 'paragraph' && nodes[0].children?.length === 1 && nodes[0].children[0].type === 'strong') {
    return nodes[0].children[0].children;
  }
  return nodes;
};

const transformTabs = (tabsNode) => {
  const bar = (tabsNode.children || []).find((c) => c.name === 'TabsBar');
  const pages = (tabsNode.children || []).find((c) => c.name === 'TabsPages');

  if (!bar || !pages) {
    // Unexpected shape - fall back to plain per-child transformation
    // rather than guess at a pairing that isn't there.
    return transformChildren(tabsNode.children);
  }

  const barItems = (bar.children || []).filter((c) => c.name === 'TabsBarItem');
  const pageItems = (pages.children || []).filter((c) => c.name === 'TabsPageItem');

  return barItems.flatMap((barItem, i) => {
    const id = attributeText(findAttribute('id', barItem));
    const pageItem =
      pageItems.find((p) => attributeText(findAttribute('id', p)) === id) || pageItems[i];

    // A label can itself hold a block-level component (e.g. <DNT>**Label**</DNT>)
    // - it must go through the same transform as everything else, not be
    // spliced in raw, or an unresolved mdxBlockElement crashes the stringifier.
    const label = {
      type: 'paragraph',
      children: [{ type: 'strong', children: unwrapIfAlreadyBold(transformChildren(barItem.children)) }],
    };

    const content = transformChildren(pageItem?.children);

    return [label, ...content];
  });
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
const transformNode = (node) => {
  if (node.name === 'Tabs') {
    return transformTabs(node);
  }

  if (Array.isArray(node.children)) {
    node.children = node.children.flatMap((child) => {
      const result = transformNode(child);
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

  transformNode(ast);

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

/**
 * Categorizes a page based on its slug/path
 */
const categorizePages = (pages) => {
  const categories = {
    'APM': [],
    'Browser': [],
    'Infrastructure': [],
    'Mobile': [],
    'Synthetic Monitoring': [],
    'Logs': [],
    'Alerts': [],
    'APIs': [],
    'Accounts & Settings': [],
    'Dashboards': [],
    'Queries & Data': [],
    'Security': [],
    'Integrations': [],
    'Release Notes': [],
    'What\'s New': [],
    'EOL Announcements': [],
    'Other': []
  };

  pages.forEach(page => {
    const { slug } = page;

    if (slug.includes('/release-notes/')) {
      categories['Release Notes'].push(page);
    } else if (slug.includes('/whats-new/')) {
      categories['What\'s New'].push(page);
    } else if (slug.includes('/docs/new-relic-solutions/solve-common-issues/diagnostics-cli-nrdiag/')) {
      categories['EOL Announcements'].push(page);
    } else if (slug.includes('/docs/apm/')) {
      categories['APM'].push(page);
    } else if (slug.includes('/docs/browser/')) {
      categories['Browser'].push(page);
    } else if (slug.includes('/docs/infrastructure/')) {
      categories['Infrastructure'].push(page);
    } else if (slug.includes('/docs/mobile-monitoring/')) {
      categories['Mobile'].push(page);
    } else if (slug.includes('/docs/synthetics/')) {
      categories['Synthetic Monitoring'].push(page);
    } else if (slug.includes('/docs/logs/')) {
      categories['Logs'].push(page);
    } else if (slug.includes('/docs/alerts/')) {
      categories['Alerts'].push(page);
    } else if (slug.includes('/docs/apis/')) {
      categories['APIs'].push(page);
    } else if (slug.includes('/docs/accounts/')) {
      categories['Accounts & Settings'].push(page);
    } else if (slug.includes('/docs/query-your-data/') || slug.includes('/docs/data-apis/')) {
      categories['Queries & Data'].push(page);
    } else if (slug.includes('/docs/security/')) {
      categories['Security'].push(page);
    } else if (slug.includes('/docs/new-relic-integrations/') || slug.includes('/docs/integrations/')) {
      categories['Integrations'].push(page);
    } else if (slug.includes('/docs/dashboards/')) {
      categories['Dashboards'].push(page);
    } else {
      categories['Other'].push(page);
    }
  });

  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) {
      delete categories[key];
    }
  });

  return categories;
};

/**
 * Generates the llms.txt index file
 */
const generateLlmsTxt = (categorizedPages, siteUrl) => {
  let content = '# New Relic Documentation\n\n';
  content += '> Documentation for New Relic\'s observability platform.\n\n';
  content += 'This file provides clean markdown versions of all documentation pages for AI tools and LLM-powered assistants.\n\n';
  content += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`;

  Object.entries(categorizedPages).forEach(([category, pages]) => {
    content += `## ${category}\n\n`;

    pages.forEach(page => {
      const title = page.title || page.slug.split('/').pop();
      const url = `${siteUrl}${page.slug}.md`;
      content += `- [${title}](${url})\n`;
    });

    content += '\n';
  });

  return content;
};

/**
 * Main plugin hook - runs after the Gatsby build completes
 */
exports.onPostBuild = async ({ graphql, store, reporter }) => {
  const { program } = store.getState();
  const publicDir = path.join(program.directory, 'public');

  try {
    reporter.info('Generating clean markdown files for LLMs (llms.txt)');

    // Query all MDX content (English only, per requirements)
    const query = `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allMdx(
          filter: {
            fileAbsolutePath: {
              regex: "/src/content/docs/((?!.*i18n).)*\\\\.mdx$/"
            }
          }
        ) {
          nodes {
            id
            slug
            mdxAST
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
    `;

    const { data } = await graphql(query);
    const { site, allMdx } = data;
    const siteUrl = site.siteMetadata.siteUrl || 'https://docs.newrelic.com';

    reporter.info(`\tProcessing ${allMdx.nodes.length} pages...`);

    const processedPages = [];
    let successCount = 0;
    let errorCount = 0;

    // Process each MDX node
    for (const node of allMdx.nodes) {
      try {
        const slug = node.fields?.slug || node.slug;
        const title = node.frontmatter?.title || slug.split('/').pop();

        // Convert MDX to clean markdown
        const cleanMarkdown = mdxToCleanMarkdown(node.mdxAST);

        // Add frontmatter header to markdown
        const markdownWithFrontmatter = `---
title: ${title}
source: ${siteUrl}${slug}
---

${cleanMarkdown}`;

        // Write individual .md file
        const mdFilePath = path.join(publicDir, `${slug}.md`);
        const mdDir = path.dirname(mdFilePath);

        if (!fs.existsSync(mdDir)) {
          fs.mkdirSync(mdDir, { recursive: true });
        }

        fs.writeFileSync(mdFilePath, markdownWithFrontmatter);

        processedPages.push({
          slug,
          title,
          type: node.frontmatter?.type
        });

        successCount++;
      } catch (error) {
        errorCount++;
        reporter.warn(`\tFailed to process ${node.slug}: ${error.message}`);
      }
    }

    reporter.info(`\tGenerated ${successCount} markdown files (${errorCount} errors)`);

    // Categorize pages for the index
    const categorizedPages = categorizePages(processedPages);

    // Generate llms.txt index
    const llmsTxtContent = generateLlmsTxt(categorizedPages, siteUrl);
    const llmsTxtPath = path.join(publicDir, 'llms.txt');
    fs.writeFileSync(llmsTxtPath, llmsTxtContent);

    reporter.info(`\tGenerated llms.txt at ${llmsTxtPath}`);
    reporter.info('\tDone!');

  } catch (error) {
    reporter.panicOnBuild(
      `Unable to generate llms.txt files: ${error.message}`,
      error
    );
  }
};

exports.mdxToCleanMarkdown = mdxToCleanMarkdown;
