const { mdxToCleanMarkdown } = require('../gatsby-node');

const CALLOUT = {
  type: 'mdxJsxFlowElement',
  name: 'Callout',
  attributes: [{ type: 'mdxJsxAttribute', name: 'variant', value: 'important' }],
  children: [
    { type: 'paragraph', children: [{ type: 'text', value: 'This is important.' }] },
  ],
};

const VIDEO = {
  type: 'mdxJsxFlowElement',
  name: 'Video',
  attributes: [
    { type: 'mdxJsxAttribute', name: 'type', value: 'wistia' },
    { type: 'mdxJsxAttribute', name: 'id', value: 'dbipyzuyok' },
  ],
  children: [],
};

const STEPS = {
  type: 'mdxJsxFlowElement',
  name: 'Steps',
  attributes: [],
  children: [
    {
      type: 'mdxJsxFlowElement',
      name: 'Step',
      attributes: [],
      children: [{ type: 'paragraph', children: [{ type: 'text', value: 'First, do this.' }] }],
    },
    {
      type: 'mdxJsxFlowElement',
      name: 'Step',
      attributes: [],
      children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Then, do that.' }] }],
    },
  ],
};

const COLLAPSER_GROUP = {
  type: 'mdxBlockElement',
  name: 'CollapserGroup',
  attributes: [],
  children: [
    {
      type: 'mdxBlockElement',
      name: 'Collapser',
      attributes: [
        { type: 'mdxAttribute', name: 'id', value: 'collapser-1' },
        { type: 'mdxAttribute', name: 'title', value: 'Collapser 1' },
      ],
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'This is our first example collapser.' }],
        },
      ],
    },
    {
      type: 'mdxBlockElement',
      name: 'Collapser',
      attributes: [
        {
          type: 'mdxAttribute',
          name: 'title',
          value: { type: 'mdxValueExpression', value: '<InlineCode>delay</InlineCode> (in minutes)' },
        },
      ],
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'Body of the expression-titled collapser.' }],
        },
      ],
    },
    {
      type: 'mdxBlockElement',
      name: 'Collapser',
      attributes: [{ type: 'mdxAttribute', name: 'id', value: 'collapser-2' }],
      children: [
        {
          type: 'mdxBlockElement',
          name: 'CollapserTitle',
          attributes: [],
          children: [{ type: 'text', value: 'Rich Title' }],
        },
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'Body of second collapser.' }],
        },
      ],
    },
  ],
};

const TABLE = {
  type: 'table',
  align: ['left', 'right'],
  children: [
    {
      type: 'tableRow',
      children: [
        { type: 'tableCell', children: [{ type: 'text', value: 'Header A' }] },
        { type: 'tableCell', children: [{ type: 'text', value: 'Header B' }] },
      ],
    },
    {
      type: 'tableRow',
      children: [
        { type: 'tableCell', children: [{ type: 'text', value: 'Cell 1' }] },
        { type: 'tableCell', children: [{ type: 'text', value: 'Cell 2' }] },
      ],
    },
  ],
};

// A raw HTML table written directly as JSX (as opposed to a markdown
// pipe-table, which parses as a plain mdast `table` node already covered
// by the TABLE fixture above). This shape is extremely common in real
// content - 1,345 pages use <table> directly.
const HTML_TABLE = {
  type: 'mdxJsxFlowElement',
  name: 'table',
  attributes: [],
  children: [
    {
      type: 'mdxJsxFlowElement',
      name: 'thead',
      attributes: [],
      children: [
        {
          type: 'mdxJsxFlowElement',
          name: 'tr',
          attributes: [],
          children: [
            { type: 'mdxJsxFlowElement', name: 'th', attributes: [], children: [{ type: 'text', value: 'API type' }] },
            { type: 'mdxJsxFlowElement', name: 'th', attributes: [], children: [{ type: 'text', value: 'Description' }] },
          ],
        },
      ],
    },
    {
      type: 'mdxJsxFlowElement',
      name: 'tbody',
      attributes: [],
      children: [
        {
          type: 'mdxJsxFlowElement',
          name: 'tr',
          attributes: [],
          children: [
            { type: 'mdxJsxFlowElement', name: 'td', attributes: [], children: [{ type: 'text', value: 'Metric API' }] },
            { type: 'mdxJsxFlowElement', name: 'td', attributes: [], children: [{ type: 'text', value: 'Send dimensional metrics.' }] },
          ],
        },
      ],
    },
  ],
};

// Real usage is always `type="alerts"` (a lookup key into
// src/data/popovers_en.json) - a `text` attribute is never actually used
// anywhere in the ~677 pages that use this component.
const INLINE_POPOVER = {
  type: 'paragraph',
  children: [
    { type: 'text', value: 'And you can receive ' },
    {
      type: 'mdxJsxTextElement',
      name: 'InlinePopover',
      attributes: [{ type: 'mdxJsxAttribute', name: 'type', value: 'alerts' }],
      children: [],
    },
    { type: 'text', value: ' directly on the app.' },
  ],
};

const fixture = () => ({
  type: 'root',
  children: [
    CALLOUT,
    VIDEO,
    STEPS,
    COLLAPSER_GROUP,
    TABLE,
    HTML_TABLE,
    INLINE_POPOVER,
    { type: 'export', value: 'export const foo = 1;' },
    { type: 'inlineMath', value: 'x^2' },
  ],
});

test('does not throw on a page mixing Callout, nested Collapsers, a table, and unhandled node types', () => {
  expect(() => mdxToCleanMarkdown(fixture())).not.toThrow();
});

test('preserves both Collapser titles and bodies instead of dropping them', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('Collapser 1');
  expect(markdown).toContain('This is our first example collapser.');
  expect(markdown).toContain('Rich Title');
  expect(markdown).toContain('Body of second collapser.');
});

test('handles a Collapser title set via a JSX expression instead of a plain string', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('Body of the expression-titled collapser.');
});

test('renders a nested InlineCode inside a Collapser title as real backticks, not raw JSX', () => {
  // Real usage (100+ occurrences, e.g. nrql-syntax-clauses-functions.mdx):
  // title={<>Use <InlineCode>PREDICT</InlineCode> clause.</>}. attributeText()
  // only has the raw, never-dispatched source text of the expression to fall
  // back on - without cleanup this renders as literal, HTML-escaped
  // "&lt;InlineCode>PREDICT&lt;/InlineCode>" text in the title.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxBlockElement',
        name: 'Collapser',
        attributes: [
          {
            type: 'mdxAttribute',
            name: 'title',
            value: { type: 'mdxValueExpression', value: '<>Use <InlineCode>PREDICT</InlineCode> clause.</>' },
          },
        ],
        children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Body text.' }] }],
      },
    ],
  });

  expect(markdown).not.toContain('InlineCode');
  expect(markdown).not.toContain('&lt;');
  expect(markdown).toContain('Use `PREDICT` clause.');
});

test('fully strips a tag reassembled from leftovers after removing an inner tag (CodeQL js/incomplete-multi-character-sanitization)', () => {
  // A single `.replace(tagRegex, '')` pass can leave a brand-new tag
  // behind: removing the inner match from "<scri<b>pt>" leaves "<scri"
  // and "pt>" to join back into "<script>", which a single pass never
  // revisits. Must repeat the replacement until it stops changing anything.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxBlockElement',
        name: 'Collapser',
        attributes: [
          {
            type: 'mdxAttribute',
            name: 'title',
            value: { type: 'mdxValueExpression', value: '<>Use <scri<b>pt>alert(1)</scri<b>pt></>' },
          },
        ],
        children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Body text.' }] }],
      },
    ],
  });

  expect(markdown).not.toContain('<script');
  expect(markdown).not.toContain('<scri');
  expect(markdown).toContain('Use alert(1)');
});

test('cleans a nested InlineCode inside a JSX expression used as a child, not just an attribute value', () => {
  // Real usage: <TabsBarItem>{ <>Find spans using the
  // <InlineCode>like</InlineCode> operator</> }</TabsBarItem> - the same
  // raw-JSX-source-text leak, reached via toTextOrDrop (a JSX expression
  // child) rather than attributeText (a JSX expression attribute value).
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'TabsBarItem',
        attributes: [],
        children: [
          {
            type: 'mdxBlockExpression',
            value: '<>Find spans using the <InlineCode>like</InlineCode> operator</>',
          },
        ],
      },
    ],
  });

  expect(markdown).not.toContain('InlineCode');
  expect(markdown).not.toContain('&lt;');
  expect(markdown).toContain('Find spans using the `like` operator');
});

test('never renders the old CollapserGroup placeholder comment', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).not.toContain('<!-- Expandable section -->');
});

test('still renders Callout as a blockquote with its variant', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('IMPORTANT');
  expect(markdown).toContain('This is important.');
});

test('keeps a space between a multi-paragraph Callout\'s paragraphs instead of gluing them together', () => {
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'Callout',
        attributes: [{ type: 'mdxJsxAttribute', name: 'variant', value: 'important' }],
        children: [
          { type: 'paragraph', children: [{ type: 'text', value: 'First paragraph ends here.' }] },
          { type: 'paragraph', children: [{ type: 'text', value: 'Second paragraph starts here.' }] },
        ],
      },
    ],
  };

  const markdown = mdxToCleanMarkdown(ast);

  expect(markdown).not.toContain('here.Second');
  expect(markdown).toContain('First paragraph ends here.');
  expect(markdown).toContain('Second paragraph starts here.');
});

test('resolves InlinePopover text from its type prop, not a nonexistent text attribute', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('And you can receive alerts directly on the app.');
});

test('resolves InlinePopover text from a wrong-case type ("APM" instead of "apm")', () => {
  // Real page: <InlinePopover type="APM"/> - a typo that also silently
  // renders nothing in the real component (the lookup there is case-
  // sensitive too), but a lookup key can only ever mean one popover
  // regardless of case, so recovering it here costs nothing.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: 'By enabling ' },
          {
            type: 'mdxJsxTextElement',
            name: 'InlinePopover',
            attributes: [{ type: 'mdxJsxAttribute', name: 'type', value: 'APM' }],
            children: [],
          },
          { type: 'text', value: ' auto instrumentation.' },
        ],
      },
    ],
  });

  expect(markdown).toContain('By enabling APM auto instrumentation.');
});

test('renders a plain mdast table as a markdown table without remark-gfm', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('|');
  expect(markdown).toContain('Header A');
  expect(markdown).toContain('Header B');
});

test('preserves both title and link URL for DocTile, not just the description', () => {
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'DocTile',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'title', value: 'Start ingesting data' },
          { type: 'mdxJsxAttribute', name: 'path', value: '/docs/tutorial-dd-migration/installing-monitor/' },
        ],
        children: [{ type: 'text', value: 'Start by ingesting your data' }],
      },
    ],
  });

  expect(markdown).toContain('Start ingesting data');
  expect(markdown).toContain('https://docs.newrelic.com/docs/tutorial-dd-migration/installing-monitor/');
  expect(markdown).toContain('Start by ingesting your data');
});

test('wraps DocTile children in the link when there is no title (27% of real usages)', () => {
  // Real usage: <DocTile path="...">View your Kubernetes events</DocTile> -
  // no `title` at all. The real component renders `children` itself as the
  // tile's heading and link text in that case, not a separate description
  // under an empty heading - the old handler dropped the link entirely here.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'DocTile',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'path', value: '/docs/kubernetes-pixie/kubernetes-events-integration/' },
        ],
        children: [{ type: 'text', value: 'View your Kubernetes events' }],
      },
    ],
  });

  expect(markdown).toContain('[**View your Kubernetes events**](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-events-integration/)');
});

test('bolds a TabsBarItem label so it reads as distinct from body text', () => {
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'TabsBarItem',
        attributes: [],
        children: [{ type: 'text', value: 'Tab one' }],
      },
    ],
  });

  expect(markdown.trim()).toBe('**Tab one**');
});

const tabsFixture = (barItems) => ({
  type: 'root',
  children: [
    {
      type: 'mdxJsxFlowElement',
      name: 'Tabs',
      attributes: [],
      children: [
        {
          type: 'mdxJsxFlowElement',
          name: 'TabsBar',
          attributes: [],
          children: barItems.map(({ id, label }) => ({
            type: 'mdxJsxFlowElement',
            name: 'TabsBarItem',
            attributes: [{ type: 'mdxJsxAttribute', name: 'id', value: id }],
            children: label,
          })),
        },
        {
          type: 'mdxJsxFlowElement',
          name: 'TabsPages',
          attributes: [],
          children: barItems.map(({ id, content }) => ({
            type: 'mdxJsxFlowElement',
            name: 'TabsPageItem',
            attributes: [{ type: 'mdxJsxAttribute', name: 'id', value: id }],
            children: content,
          })),
        },
      ],
    },
  ],
});

test('pairs each Tabs label with its own content instead of bunching all labels before all content', () => {
  // TabsBar (labels) and TabsPages (content) are SIBLINGS matched only by a
  // shared `id` - without pairing them back up, every label ends up before
  // every tab's content, with no way to tell which content belongs to which.
  const markdown = mdxToCleanMarkdown(
    tabsFixture([
      { id: 'a', label: [{ type: 'text', value: 'Tab A' }], content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Content A.' }] }] },
      { id: 'b', label: [{ type: 'text', value: 'Tab B' }], content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Content B.' }] }] },
    ])
  );

  const labelAIndex = markdown.indexOf('Tab A');
  const contentAIndex = markdown.indexOf('Content A.');
  const labelBIndex = markdown.indexOf('Tab B');
  const contentBIndex = markdown.indexOf('Content B.');

  expect(labelAIndex).toBeGreaterThanOrEqual(0);
  expect(labelAIndex).toBeLessThan(contentAIndex);
  expect(contentAIndex).toBeLessThan(labelBIndex);
  expect(labelBIndex).toBeLessThan(contentBIndex);
});

test('does not crash or double-bold a Tabs label wrapped in its own <DNT>**bold**</DNT>', () => {
  const markdown = mdxToCleanMarkdown(
    tabsFixture([
      {
        id: 'a',
        label: [
          {
            type: 'mdxJsxFlowElement',
            name: 'DNT',
            attributes: [],
            children: [{ type: 'paragraph', children: [{ type: 'strong', children: [{ type: 'text', value: 'BTP runtime' }] }] }],
          },
        ],
        content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Content A.' }] }],
      },
    ])
  );

  expect(markdown).not.toContain('****');
  expect(markdown).toContain('**BTP runtime**');
});

test('renders a self-closing Video as a followable embed link, not an empty gap', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('https://fast.wistia.net/embed/iframe/dbipyzuyok');
});

test('renders Steps/Step as a real ordered list', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toMatch(/1\.\s+First, do this\./);
  expect(markdown).toMatch(/2\.\s+Then, do that\./);
});

test('does not crash on a stray JSX comment between <Step> siblings inside <Steps>', () => {
  // A real page has a large {/* ... */} JSX comment (an example shown in a
  // comment) sitting directly between two <Step> elements. toTextOrDrop()
  // turns that into a non-empty stray text node rather than dropping it,
  // which isn't a real listItem - remark-stringify's list-item visitor
  // assumes every list child is one and crashes otherwise.
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'Steps',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'Step',
            attributes: [],
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'First step.' }] }],
          },
          { type: 'mdxBlockExpression', value: '/* an example shown in a comment */' },
          {
            type: 'mdxJsxFlowElement',
            name: 'Step',
            attributes: [],
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Second step.' }] }],
          },
        ],
      },
    ],
  };

  expect(() => mdxToCleanMarkdown(ast)).not.toThrow();

  const markdown = mdxToCleanMarkdown(ast);
  expect(markdown).toMatch(/1\.\s+First step\./);
  expect(markdown).toMatch(/2\.\s+Second step\./);
});

test('renders a raw JSX <img> as a real markdown image, not an empty gap', () => {
  // 2,364 real occurrences across 793 pages use raw JSX <img src=... alt=...
  // title=.../> rather than markdown ![]() syntax (only 4 pages). Lowercase
  // HTML tag names have no explicit handler, and a self-closing <img> has
  // no children to fall back on, so without this it vanishes completely -
  // both the URL and the (often descriptive) alt text.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxBlockElement',
        name: 'img',
        attributes: [
          { type: 'mdxAttribute', name: 'src', value: '/images/dashboard.webp' },
          { type: 'mdxAttribute', name: 'alt', value: 'An image displaying the dashboard' },
          { type: 'mdxAttribute', name: 'title', value: 'dashboard' },
        ],
        children: [],
      },
    ],
  });

  expect(markdown).toContain('![An image displaying the dashboard](https://docs.newrelic.com/images/dashboard.webp');
});

test('renders a TechTile with no `to` as plain text, not a broken empty link', () => {
  // `to` is optional on the real component (no `.isRequired`) - 0 real
  // pages currently omit it, but wrapping empty string in a link
  // unconditionally would still produce a broken `[name]()` the day one does.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxBlockElement',
        name: 'TechTile',
        attributes: [{ type: 'mdxAttribute', name: 'name', value: 'Standalone tile' }],
        children: [],
      },
    ],
  });

  expect(markdown).not.toContain(']()');
  expect(markdown).toContain('Standalone tile');
});

test('drops the stray bullet when a bare TechTile listItem ends up inside a table cell', () => {
  // Real usage (iast/introduction.mdx): a <TechTileGrid> holding a single
  // <TechTile> nested inside a <th>, used as a column-header icon/link, not
  // a real list. remark-stringify's listItem visitor still renders its own
  // "-" bullet marker even for a bare listItem with no `list` wrapper.
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'table',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'thead',
            attributes: [],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  {
                    type: 'mdxJsxFlowElement',
                    name: 'th',
                    attributes: [],
                    children: [
                      {
                        type: 'mdxBlockElement',
                        name: 'TechTileGrid',
                        attributes: [],
                        children: [
                          {
                            type: 'mdxBlockElement',
                            name: 'TechTile',
                            attributes: [
                              { type: 'mdxAttribute', name: 'name', value: 'Go agent' },
                              { type: 'mdxAttribute', name: 'to', value: 'https://example.com/go' },
                            ],
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const markdown = mdxToCleanMarkdown(ast);

  expect(markdown).not.toContain('- [Go agent]');
  expect(markdown).toContain('[Go agent](https://example.com/go)');
});

test('renders a bare Icon in a table cell as a text symbol, not an empty cell', () => {
  // Real usage: <td><Icon name="fe-check" /></td> in compatibility matrices,
  // with no other text in the cell. Icon has no alt/aria-label prop, so
  // dropping it (correct for the hundreds of purely decorative inline
  // usages) turns a fully-supported row into one that reads as fully
  // unsupported - the opposite of what the table means.
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'table',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'tbody',
            attributes: [],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  { type: 'mdxJsxFlowElement', name: 'td', attributes: [], children: [{ type: 'text', value: 'Java' }] },
                  {
                    type: 'mdxJsxFlowElement',
                    name: 'td',
                    attributes: [],
                    children: [
                      { type: 'mdxBlockElement', name: 'Icon', attributes: [{ type: 'mdxJsxAttribute', name: 'name', value: 'fe-check' }], children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const markdown = mdxToCleanMarkdown(ast);

  expect(markdown).toMatch(/Java\s*\|\s*✓/);
});

test('drops a purely decorative Icon (not check/x/warning) instead of leaking its name', () => {
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: 'select the plus ' },
          {
            type: 'mdxSpanElement',
            name: 'Icon',
            attributes: [{ type: 'mdxJsxAttribute', name: 'name', value: 'fe-plus-circle' }],
            children: [],
          },
          { type: 'text', value: ' icon.' },
        ],
      },
    ],
  });

  expect(markdown).not.toContain('fe-plus-circle');
  expect(markdown.trim()).toBe('select the plus  icon.');
});

test('converts a raw HTML <table> into a real markdown table, not flattened text', () => {
  const markdown = mdxToCleanMarkdown(fixture());
  const tableLines = markdown.split('\n').filter((l) => l.includes('API type') || l.includes('Metric API'));

  // A real markdown table row is a single pipe-delimited line - if the
  // header and its data ever end up on separate, unrelated lines, the
  // table structure was lost.
  expect(tableLines.some((l) => l.includes('API type') && l.includes('Description'))).toBe(true);
  expect(tableLines.some((l) => l.includes('Metric API') && l.includes('Send dimensional metrics.'))).toBe(true);
});

test('does not crash on a raw HTML <table> with a {\' \'} spacer between <tr> rows', () => {
  // Authors sometimes add {' '} between <tr> siblings to force whitespace
  // JSX would otherwise collapse - it survives as a stray tbody child that
  // isn't a tableRow, unlike every other child.
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'table',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'tbody',
            attributes: [],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  { type: 'mdxJsxFlowElement', name: 'td', attributes: [], children: [{ type: 'text', value: 'Row 1' }] },
                ],
              },
              { type: 'mdxBlockExpression', value: "' '" },
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  { type: 'mdxJsxFlowElement', name: 'td', attributes: [], children: [{ type: 'text', value: 'Row 2' }] },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  expect(() => mdxToCleanMarkdown(ast)).not.toThrow();

  const markdown = mdxToCleanMarkdown(ast);
  expect(markdown).toContain('Row 1');
  expect(markdown).toContain('Row 2');
});

test('keeps a table cell\'s paragraph and bullet list from gluing together', () => {
  // Real content: a <td> with explanatory prose followed by a bullet list -
  // remark-stringify's table-cell visitor only expects phrasing children,
  // so unflattened blocks compile to their own markdown strings and get
  // joined with no separator (e.g. "startup.-   Use the same level...").
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'table',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'tbody',
            attributes: [],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  {
                    type: 'mdxJsxFlowElement',
                    name: 'td',
                    attributes: [],
                    children: [
                      { type: 'paragraph', children: [{ type: 'text', value: 'Ends here.' }] },
                      {
                        type: 'list',
                        ordered: false,
                        children: [
                          { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'First item.' }] }] },
                          { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Second item.' }] }] },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const markdown = mdxToCleanMarkdown(ast);

  expect(markdown).not.toContain('here.-');
  expect(markdown).not.toContain('item.-');
  expect(markdown).toContain('Ends here.');
  expect(markdown).toContain('First item.');
  expect(markdown).toContain('Second item.');
});

test('keeps a list item\'s own two paragraphs from gluing together inside a table cell', () => {
  // A CommonMark lazy-continuation quirk: non-indented content right after
  // a blank line following list items gets swallowed into the previous
  // list item as a second paragraph, instead of becoming a new sibling.
  // Real source: a bullet list ending in a version number, immediately
  // followed (same item) by a <DNT>**next label**</DNT> paragraph.
  const ast = {
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'table',
        attributes: [],
        children: [
          {
            type: 'mdxJsxFlowElement',
            name: 'tbody',
            attributes: [],
            children: [
              {
                type: 'mdxJsxFlowElement',
                name: 'tr',
                attributes: [],
                children: [
                  {
                    type: 'mdxJsxFlowElement',
                    name: 'td',
                    attributes: [],
                    children: [
                      {
                        type: 'list',
                        ordered: false,
                        children: [
                          {
                            type: 'listItem',
                            children: [
                              { type: 'paragraph', children: [{ type: 'text', value: 'Latest version: 4.8.6' }] },
                              {
                                type: 'mdxJsxFlowElement',
                                name: 'DNT',
                                attributes: [],
                                children: [{ type: 'paragraph', children: [{ type: 'strong', children: [{ type: 'text', value: 'Next label' }] }] }],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const markdown = mdxToCleanMarkdown(ast);

  expect(markdown).not.toContain('4.8.6**Next');
  expect(markdown).toContain('4.8.6 **Next label**');
});

test('never leaks raw MDX node types or object references into the output', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).not.toContain('mdxBlockElement');
  expect(markdown).not.toContain('mdxJsxFlowElement');
  expect(markdown).not.toContain('[object Object]');
});
