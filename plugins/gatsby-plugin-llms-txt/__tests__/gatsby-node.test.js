const { mdxToCleanMarkdown } = require('../gatsby-node');

const CALLOUT = {
  type: 'mdxJsxFlowElement',
  name: 'Callout',
  attributes: [{ type: 'mdxJsxAttribute', name: 'variant', value: 'important' }],
  children: [
    { type: 'paragraph', children: [{ type: 'text', value: 'This is important.' }] },
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

const fixture = () => ({
  type: 'root',
  children: [
    CALLOUT,
    COLLAPSER_GROUP,
    TABLE,
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

test('renders a plain mdast table as a markdown table without remark-gfm', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).toContain('|');
  expect(markdown).toContain('Header A');
  expect(markdown).toContain('Header B');
});

test('never leaks raw MDX node types or object references into the output', () => {
  const markdown = mdxToCleanMarkdown(fixture());

  expect(markdown).not.toContain('mdxBlockElement');
  expect(markdown).not.toContain('mdxJsxFlowElement');
  expect(markdown).not.toContain('[object Object]');
});
