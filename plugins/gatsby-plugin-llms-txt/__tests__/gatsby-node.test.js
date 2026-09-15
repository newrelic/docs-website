const {
  mdxToCleanMarkdown,
  categorizePages,
  categoryForSlug,
  generateLlmsTxt,
  buildReleaseNotesHubs,
  buildWhatsNewHubs,
  humanizeReleaseNotesSegment,
} = require('../lib/helpers');

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

test('renders a Callout\'s label as a real heading, not bold text', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toMatch(/^> #### .*IMPORTANT$/m);
});

test('uses Callout\'s title attribute as the label instead of the generic variant name', () => {
  // Real usage: <Callout title="preview"> - used on ~96 real pages, most
  // commonly the standard preview-doc banner - with no `variant` at all.
  // Without reading `title`, this rendered as a misleading "TIP" label,
  // silently dropping the author's actual title text.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'Callout',
        attributes: [{ type: 'mdxJsxAttribute', name: 'title', value: 'preview' }],
        children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Still working on this.' }] }],
      },
    ],
  });

  expect(markdown).toContain('PREVIEW');
  expect(markdown).not.toContain('TIP');
});

test('uses Callout\'s title attribute together with its variant\'s icon', () => {
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      {
        type: 'mdxJsxFlowElement',
        name: 'Callout',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'title', value: 'Feature Availability' },
          { type: 'mdxJsxAttribute', name: 'variant', value: 'important' },
        ],
        children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Not available on all accounts.' }] }],
      },
    ],
  });

  expect(markdown).toContain('FEATURE AVAILABILITY');
  expect(markdown).not.toContain('IMPORTANT');
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

  expect(markdown).toContain('[View your Kubernetes events](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-events-integration/)');
});

test('does not bold a DocTile\'s link text - TechTile (the same tile concept) doesn\'t either', () => {
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

  expect(markdown).toContain('[Start ingesting data](https://docs.newrelic.com/docs/tutorial-dd-migration/installing-monitor/)');
  expect(markdown).not.toContain('**Start ingesting data**');
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

test('renders each Tabs label as a real heading, not bold text', () => {
  const markdown = mdxToCleanMarkdown(
    tabsFixture([
      { id: 'a', label: [{ type: 'text', value: 'Via OTel Java agent' }], content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Content A.' }] }] },
      { id: 'b', label: [{ type: 'text', value: 'Via Prometheus JMX Exporter' }], content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Content B.' }] }] },
    ])
  );

  // A top-level Tabs with nothing above it defaults to the same starting
  // depth as the page's first real content heading (H2).
  expect(markdown).toMatch(/^## Via OTel Java agent$/m);
  expect(markdown).toMatch(/^## Via Prometheus JMX Exporter$/m);
});

test('nests a Tabs inside another tab\'s content one heading level deeper than that tab\'s own label', () => {
  // Real page shape (opentelemetry/integrations/kafka/self-hosted.mdx): an
  // outer install-method Tabs, and inside one of its tabs' Steps, a second
  // Tabs choosing between two collector distributions - the inner tab
  // labels must land deeper than the outer ones, not at the same level.
  const innerTabs = {
    type: 'mdxJsxFlowElement',
    name: 'Tabs',
    attributes: [],
    children: tabsFixture([
      { id: 'nrdot', label: [{ type: 'text', value: 'NRDOT Collector' }], content: [{ type: 'paragraph', children: [{ type: 'text', value: 'Inner content.' }] }] },
    ]).children[0].children,
  };

  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      { type: 'heading', depth: 2, children: [{ type: 'text', value: 'Installation steps' }] },
      ...tabsFixture([
        { id: 'java-agent', label: [{ type: 'text', value: 'Via OTel Java agent' }], content: [innerTabs] },
      ]).children,
    ],
  });

  expect(markdown).toMatch(/^### Via OTel Java agent$/m);
  expect(markdown).toMatch(/^#### NRDOT Collector$/m);
});

test('rescales a tab\'s own already-authored heading so it nests under the tab label, not beside it', () => {
  // Real page shape: a <Step> inside a tab's content already has its own
  // literal "### Before you begin" heading, written tab-agnostic (every
  // Step heading is "###" regardless of which tab it's in, since tabs
  // aren't part of the heading hierarchy on the live site). Left
  // unadjusted, that literal depth-3 heading collided with the tab label's
  // own depth-3 heading, reading as a sibling instead of nested content.
  const markdown = mdxToCleanMarkdown({
    type: 'root',
    children: [
      { type: 'heading', depth: 2, children: [{ type: 'text', value: 'Installation steps' }] },
      ...tabsFixture([
        {
          id: 'java-agent',
          label: [{ type: 'text', value: 'Via OTel Java agent' }],
          content: [
            { type: 'heading', depth: 3, children: [{ type: 'text', value: 'Before you begin' }] },
            { type: 'paragraph', children: [{ type: 'text', value: 'Ensure you have an account.' }] },
            { type: 'heading', depth: 3, children: [{ type: 'text', value: 'Create the config' }] },
          ],
        },
      ]).children,
    ],
  });

  expect(markdown).toMatch(/^### Via OTel Java agent$/m);
  // Both Step headings nest one level under the tab label, and stay
  // siblings of each other (neither ends up deeper than the other).
  expect(markdown).toMatch(/^#### Before you begin$/m);
  expect(markdown).toMatch(/^#### Create the config$/m);
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

test('promotes a titled Step to a plain heading instead of nesting it under a list number', () => {
  // Real page shape (opentelemetry/integrations/kafka/self-hosted.mdx):
  // every <Step> opens with its own ### heading - forcing a numbered-list
  // wrapper around that buried the heading as "1.  ### Before you begin".
  const markdown = mdxToCleanMarkdown({
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
            children: [
              { type: 'heading', depth: 3, children: [{ type: 'text', value: 'Before you begin' }] },
              { type: 'paragraph', children: [{ type: 'text', value: 'Ensure you have an account.' }] },
            ],
          },
          {
            type: 'mdxJsxFlowElement',
            name: 'Step',
            attributes: [],
            children: [
              { type: 'heading', depth: 3, children: [{ type: 'text', value: 'Create the config' }] },
              { type: 'paragraph', children: [{ type: 'text', value: 'Create the file.' }] },
            ],
          },
        ],
      },
    ],
  });

  expect(markdown).toMatch(/^### Before you begin$/m);
  expect(markdown).toMatch(/^### Create the config$/m);
  expect(markdown).not.toMatch(/\d\.\s+#{1,6}/);
});

test('still numbers an untitled Step even when a sibling Step is titled', () => {
  const markdown = mdxToCleanMarkdown({
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
            children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Untitled first step.' }] }],
          },
          {
            type: 'mdxJsxFlowElement',
            name: 'Step',
            attributes: [],
            children: [
              { type: 'heading', depth: 3, children: [{ type: 'text', value: 'Titled step' }] },
              { type: 'paragraph', children: [{ type: 'text', value: 'Titled step body.' }] },
            ],
          },
        ],
      },
    ],
  });

  expect(markdown).toMatch(/1\.\s+Untitled first step\./);
  expect(markdown).toMatch(/^### Titled step$/m);
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

// categoryForSlug/categorizePages read the site's real nav tree
// (src/nav/generatedNav.yml) instead of a hand-maintained duplicate of its
// ~40 categories - the old hardcoded list only covered ~15 of them, so
// everything else (AI monitoring, Kubernetes, OpenTelemetry, Serverless,
// CodeStream, Distributed Tracing, New Relic Lens, Workflow Automation,
// Licenses, Data and APIs, and more) silently fell into "Other" instead of
// its real category.
test('categorizes real pages under their actual nav category instead of "Other"', () => {
  const realSlugs = {
    '/docs/ai-monitoring/intro-to-ai-monitoring': 'AI monitoring',
    '/docs/kubernetes-pixie/kubernetes-integration/get-started/introduction-kubernetes-integration': 'Kubernetes monitoring',
    '/docs/opentelemetry/get-started/introduction-opentelemetry-new-relic': 'OpenTelemetry',
    '/docs/serverless-function-monitoring/aws-lambda-monitoring/introduction-aws-lambda-monitoring': 'Serverless monitoring',
    '/docs/codestream/observability/performance-monitoring': 'CodeStream',
    '/docs/distributed-tracing/infinite-tracing/introduction-infinite-tracing': 'Distributed tracing',
    '/docs/new-relic-lens/overview': 'New Relic Lens',
    '/docs/workflow-automation/get-workflow-definition': 'Workflow Automation',
    '/docs/licenses/license-types': 'Licenses',
    '/docs/data-apis/get-started/nrdb-horsepower-under-hood': 'Data and APIs',
  };

  Object.entries(realSlugs).forEach(([slug, expectedCategory]) => {
    expect(categoryForSlug(slug)).toBe(expectedCategory);
  });
});

test('nests /docs/apis under Data and APIs - it\'s cross-linked there, not its own top-level nav section', () => {
  expect(categoryForSlug('/docs/apis/rest-api-v2/get-started/introduction-new-relic-rest-api-v2')).toBe('Data and APIs');
});

test('nests /docs/query-your-data under Charts, dashboards, and querying, not "Other"', () => {
  expect(categoryForSlug('/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards')).toBe('Charts, dashboards, and querying');
});

test('categorizes the diagnostics-cli-nrdiag pages by their real section, not as EOL announcements', () => {
  // These pages live under Guides and best practices - they were only ever
  // in "EOL Announcements" because of a slug match that had nothing to do
  // with actual end-of-life notices.
  const category = categoryForSlug('/docs/new-relic-solutions/solve-common-issues/diagnostics-cli-nrdiag/generate-your-license-key-file');
  expect(category).toBe('Guides and best practices');
  expect(category).not.toBe('EOL Announcements');
});

test('categorizes real EOL announcements and What\'s New posts under their own sections', () => {
  // Real EOL/What's New content lives under src/content/eol and
  // src/content/whats-new, outside src/content/docs entirely - so their
  // slugs have no `/docs` prefix at all.
  expect(categoryForSlug('/eol/2025/05/metrics-and-event-explorer')).toBe('End-of-life announcements');
  expect(categoryForSlug('/whats-new/2025/09/whats-new-30-09-new-relic-control')).toBe("What's new?");
});

test('still categorizes release notes as one section', () => {
  expect(categoryForSlug('/docs/release-notes/agent-release-notes/net-release-notes/net-agent-1000')).toBe('Release notes');
});

test('falls back to Other only for a page with no real nav home at all', () => {
  expect(categoryForSlug('/docs/some-genuinely-unnavved-orphan-page')).toBe('Other');
});

test('categorizePages preserves the nav\'s own category order and drops empty categories', () => {
  const categorized = categorizePages([
    { slug: '/docs/licenses/license-types', title: 'Licenses' },
    { slug: '/docs/ai-monitoring/intro-to-ai-monitoring', title: 'AI monitoring intro' },
    { slug: '/docs/some-genuinely-unnavved-orphan-page', title: 'Orphan' },
  ]);

  const keys = Object.keys(categorized);
  expect(keys).toContain('AI monitoring');
  expect(keys).toContain('Licenses');
  expect(keys).toContain('Other');
  // AI monitoring is listed before Licenses in the site's own nav order
  // (src/nav/root.yml) - the generated index should read the same way.
  expect(keys.indexOf('AI monitoring')).toBeLessThan(keys.indexOf('Licenses'));
  expect(keys).not.toContain('Alerts');
  expect(categorized['Other']).toHaveLength(1);
});

// buildReleaseNotesHubs/buildWhatsNewHubs split Release notes (3,967 pages,
// 52.9% of the root llms.txt) and What's New (446 pages, 6.1%) into their
// own nested llms.txt hubs instead of enumerating every page in the root
// index - together they were ~59% of the entire file. Release notes nests
// unevenly on real pages (some products flat, others one level deeper by
// language/platform), so the same generic tree builder/renderer must handle
// both shapes in one pass without hardcoding either.
test('splits a mixed flat+nested release-notes tree into the right leaf and branch hubs', () => {
  const pages = [
    // Nested: agent-release-notes has no pages of its own, only a
    // net-release-notes child - a BRANCH hub with no direct pages.
    { slug: '/docs/release-notes/agent-release-notes/net-release-notes/net-agent-1000', title: '.NET Agent 10.0.0' },
    { slug: '/docs/release-notes/agent-release-notes/net-release-notes/net-agent-990', title: '.NET Agent 9.9.0' },
    { slug: '/docs/release-notes/agent-release-notes/java-release-notes/java-agent-800', title: 'Java Agent 8.0.0' },
    // Flat: streaming-browser-release-notes has pages directly in it - a
    // LEAF hub, one level shallower than the nested case above.
    { slug: '/docs/release-notes/streaming-browser-release-notes/streaming-browser-100', title: 'Streaming Browser 1.0.0' },
  ];

  const { files, indexUrl, count } = buildReleaseNotesHubs(pages, 'https://docs.newrelic.com');
  const byPath = Object.fromEntries(files.map((f) => [f.path, f.content]));

  expect(count).toBe(4);
  expect(indexUrl).toBe('https://docs.newrelic.com/docs/release-notes/llms.txt');

  // Top hub: a branch linking to its two top-level children's hubs, not to
  // any individual release note directly.
  const topHub = byPath['/docs/release-notes/llms.txt'];
  expect(topHub).toContain('/docs/release-notes/agent-release-notes/llms.txt');
  expect(topHub).toContain('/docs/release-notes/streaming-browser-release-notes/llms.txt');
  expect(topHub).not.toContain('net-agent-1000.md');
  expect(topHub).not.toContain('streaming-browser-100.md');

  // agent-release-notes: a branch with no pages of its own - links to its
  // two language children's hubs, not to any individual note.
  const agentHub = byPath['/docs/release-notes/agent-release-notes/llms.txt'];
  expect(agentHub).toContain('/docs/release-notes/agent-release-notes/net-release-notes/llms.txt');
  expect(agentHub).toContain('/docs/release-notes/agent-release-notes/java-release-notes/llms.txt');
  expect(agentHub).not.toContain('net-agent-1000.md');

  // net-release-notes: a genuine leaf - lists its two pages flat.
  const netHub = byPath['/docs/release-notes/agent-release-notes/net-release-notes/llms.txt'];
  expect(netHub).toContain('[.NET Agent 10.0.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/net-release-notes/net-agent-1000.md)');
  expect(netHub).toContain('[.NET Agent 9.9.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/net-release-notes/net-agent-990.md)');

  // streaming-browser-release-notes: a leaf at the TOP level (one level
  // shallower than net-release-notes) - same leaf-rendering code path,
  // reached directly instead of through an intermediate branch.
  const streamingHub = byPath['/docs/release-notes/streaming-browser-release-notes/llms.txt'];
  expect(streamingHub).toContain('[Streaming Browser 1.0.0](https://docs.newrelic.com/docs/release-notes/streaming-browser-release-notes/streaming-browser-100.md)');
});

test('keeps a category\'s index.mdx landing page with its own dated siblings, not one level up', () => {
  // Real shape: every product/language directory has its own index.mdx
  // landing page alongside dated release notes (e.g.
  // .../agent-control-release-notes/index.mdx AND
  // .../agent-control-release-notes/agent-control-2026-07-06.mdx). Gatsby
  // collapses index.mdx's own slug to its containing directory's path, with
  // no distinct filename segment left - naively dropping "the last path
  // segment as the filename" would misplace it one level too high (as a
  // page of release-notes/ itself), splitting it away from its own dated
  // sibling and the category's real hub.
  const pages = [
    { slug: '/docs/release-notes/agent-control-release-notes', title: 'Agent Control release notes' },
    { slug: '/docs/release-notes/agent-control-release-notes/agent-control-2026-07-06', title: 'Agent Control 2026.07.06' },
  ];

  const { files } = buildReleaseNotesHubs(pages, 'https://docs.newrelic.com');
  const byPath = Object.fromEntries(files.map((f) => [f.path, f.content]));

  // Exactly one hub file for this category - the landing page did NOT get
  // split off into its own top-level "release-notes/llms.txt" bullet.
  expect(byPath['/docs/release-notes/agent-control-release-notes/llms.txt']).toBeDefined();

  const categoryHub = byPath['/docs/release-notes/agent-control-release-notes/llms.txt'];
  expect(categoryHub).toContain('[Agent Control release notes](https://docs.newrelic.com/docs/release-notes/agent-control-release-notes.md)');
  expect(categoryHub).toContain('[Agent Control 2026.07.06](https://docs.newrelic.com/docs/release-notes/agent-control-release-notes/agent-control-2026-07-06.md)');

  const topHub = byPath['/docs/release-notes/llms.txt'];
  expect(topHub).not.toContain('agent-control-release-notes.md');
  expect(topHub).toContain('/docs/release-notes/agent-control-release-notes/llms.txt');
});

test('humanizeReleaseNotesSegment produces readable labels, including acronym fixups', () => {
  expect(humanizeReleaseNotesSegment('net-release-notes')).toBe('.NET release notes');
  expect(humanizeReleaseNotesSegment('nodejs-release-notes')).toBe('Node.js release notes');
  expect(humanizeReleaseNotesSegment('c-sdk-release-notes')).toBe('C SDK release notes');
  expect(humanizeReleaseNotesSegment('streaming-browser-release-notes')).toBe('Streaming Browser release notes');
});

test('buildWhatsNewHubs splits by year, newest first, without splitting further by month', () => {
  const pages = [
    { slug: '/whats-new/2025/03/some-march-post', title: 'March post' },
    { slug: '/whats-new/2025/09/some-september-post', title: 'September post' },
    { slug: '/whats-new/2026/01/some-january-post', title: 'January post' },
  ];

  const { files, indexUrl, count } = buildWhatsNewHubs(pages, 'https://docs.newrelic.com');
  const byPath = Object.fromEntries(files.map((f) => [f.path, f.content]));

  expect(count).toBe(3);
  expect(indexUrl).toBe('https://docs.newrelic.com/whats-new/llms.txt');

  const topHub = byPath['/whats-new/llms.txt'];
  const year2026Index = topHub.indexOf('/whats-new/2026/llms.txt');
  const year2025Index = topHub.indexOf('/whats-new/2025/llms.txt');
  expect(year2026Index).toBeGreaterThanOrEqual(0);
  expect(year2025Index).toBeGreaterThanOrEqual(0);
  expect(year2026Index).toBeLessThan(year2025Index); // newest year first

  // 2025's hub holds BOTH months' posts flat - no further split by month.
  const year2025Hub = byPath['/whats-new/2025/llms.txt'];
  expect(year2025Hub).toContain('March post');
  expect(year2025Hub).toContain('September post');
});

test('generateLlmsTxt links to a hub instead of enumerating its pages, regardless of how many pages the category holds', () => {
  const categorizedPages = {
    'Release notes': [
      { slug: '/docs/release-notes/agent-release-notes/net-release-notes/a', title: 'A' },
      { slug: '/docs/release-notes/agent-release-notes/net-release-notes/b', title: 'B' },
    ],
    Licenses: [{ slug: '/docs/licenses/license-types', title: 'License types' }],
  };

  const content = generateLlmsTxt(categorizedPages, 'https://docs.newrelic.com', {
    'Release notes': { url: 'https://docs.newrelic.com/docs/release-notes/llms.txt', count: 3967 },
  });

  expect(content).toContain('- [Release notes index (3967 pages)](https://docs.newrelic.com/docs/release-notes/llms.txt)');
  expect(content).not.toContain('/net-release-notes/a.md');
  expect(content).not.toContain('/net-release-notes/b.md');
  // A category with no hub entry still enumerates its pages as before.
  expect(content).toContain('[License types](https://docs.newrelic.com/docs/licenses/license-types.md)');
});
