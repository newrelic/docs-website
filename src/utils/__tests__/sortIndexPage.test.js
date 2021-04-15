import sortIndexPage from '../sortIndexPage';

const NAV_1 = [
  'title: Test',
  'path: /test',
  'pages:',
  '  - title: Baz',
  '    path: /test/foo',
  '  - title: Foo',
  '    path: /test/foo',
  '  - title: Bar',
  '    path: /test/foo',
].join('\n');

const h2 = (text) => `<h2>${text}</h2>`;
const li = (parent) => (text) =>
  `<li><a href="/${parent}/${text.toLowerCase()}">${text}</a></li>`;
const ul = (parent, ...lis) => `<ul>${lis.map(li(parent)).join('')}</ul>`;

describe('without navigation', () => {
  test('should sort lists alphabetically', async () => {
    const html = h2('Test') + ul('test', 'Foo', 'Bar', 'Baz');
    const expected = h2('Test') + ul('test', 'Bar', 'Baz', 'Foo');

    const actual = await sortIndexPage(html);
    expect(actual).toEqual(expected);
  });

  test('should sort categories alphabetically', async () => {
    const html = [
      h2('Test'),
      ul('test', 'Foo', 'Bar', 'Baz'),
      h2('Another Test'),
      ul('another-test', 'Pumpkin', 'Apples', 'Oranges'),
    ].join('');

    const expected = [
      h2('Another Test'),
      ul('another-test', 'Apples', 'Oranges', 'Pumpkin'),
      h2('Test'),
      ul('test', 'Bar', 'Baz', 'Foo'),
    ].join('');

    const actual = await sortIndexPage(html);
    expect(actual).toEqual(expected);
  });
});

describe('with navigation containing all content', () => {
  test('should sort lists by navigation', async () => {
    const html = h2('Test') + ul('test', 'Foo', 'Bar', 'Baz');
    const expected = h2('Test') + ul('test', 'Baz', 'Foo', 'Bar');

    const actual = await sortIndexPage(html, [NAV_1]);
    expect(actual).toEqual(expected);
  });

  test.todo('should sort categories by navigation');
});

describe('with some content outside of navigation', () => {
  test.todo('should sort lists alphabetically and then by navigation');
  test.todo('should sort categories alphabetically and then by navigation');
});

describe('error handling', () => {
  test('should throw without arguments', async () => {
    expect.assertions(1);
    try {
      await sortIndexPage();
    } catch (e) {
      expect(e).toEqual(Error('Missing arguments'));
    }
  });
});
