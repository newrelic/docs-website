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

test('never renders the old CollapserGroup placeholder comment', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).not.toContain('<!-- Expandable section -->');
});

test('still renders Callout as a blockquote with its variant', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('IMPORTANT');
  expect(markdown).toContain('This is important.');
});

test('resolves InlinePopover text from its type prop, not a nonexistent text attribute', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('And you can receive alerts directly on the app.');
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

test('renders a self-closing Video as a followable embed link, not an empty gap', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('https://fast.wistia.net/embed/iframe/dbipyzuyok');
});

test('renders Steps/Step as a real ordered list', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toMatch(/1\.\s+First, do this\./);
  expect(markdown).toMatch(/2\.\s+Then, do that\./);
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

test('never leaks raw MDX node types or object references into the output', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).not.toContain('mdxBlockElement');
  expect(markdown).not.toContain('mdxJsxFlowElement');
  expect(markdown).not.toContain('[object Object]');
});
