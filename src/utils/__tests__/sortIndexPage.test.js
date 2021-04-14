import sortIndexPage from '../sortIndexPage';

test('should return alphabetized html when no navigation provided', async () => {
  const html = [
    '<h2>Test</h2><ul>',
    '<li><a>Foo</a></li>',
    '<li><a>Bar</a></li>',
    '<li><a>Baz</a><li></ul>',
  ].join('');

  const expected = [
    '<h2>Test</h2><ul>',
    '<li><a>Bar</a></li>',
    '<li><a>Baz</a><li>>',
    '<li><a>Foo</a></li></ul>',
  ].join('');

  const actual = await sortIndexPage(html);

  expect(actual).toEqual(expected);
});
