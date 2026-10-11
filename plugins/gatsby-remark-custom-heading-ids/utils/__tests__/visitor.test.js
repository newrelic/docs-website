const visitor = require('../visitor');

const heading = (...children) => ({
  type: 'root',
  children: [{ type: 'heading', depth: 2, children }],
});

const run = (tree) => {
  visitor()(tree);
  return tree.children[0];
};

test('removes the custom id from a text-only heading', () => {
  const node = run(heading({ type: 'text', value: 'Hi there! [#some-id]' }));

  expect(node.data.id).toBe('some-id');
  expect(node.children).toEqual([{ type: 'text', value: 'Hi there!' }]);
});

test('drops the trailing text node when it only holds the id', () => {
  const node = run(
    heading(
      { type: 'inlineCode', value: 'hi there!' },
      { type: 'text', value: ' [#some-id]' }
    )
  );

  expect(node.data.id).toBe('some-id');
  expect(node.children).toEqual([{ type: 'inlineCode', value: 'hi there!' }]);
});

test('keeps heading text that follows an inline node', () => {
  const node = run(
    heading(
      { type: 'text', value: 'Use the ' },
      { type: 'inlineCode', value: 'pkg' },
      { type: 'text', value: ' package [#use-pkg]' }
    )
  );

  expect(node.data.id).toBe('use-pkg');
  expect(node.children).toEqual([
    { type: 'text', value: 'Use the ' },
    { type: 'inlineCode', value: 'pkg' },
    { type: 'text', value: ' package' },
  ]);
});
