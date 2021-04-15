import sortIndexPage from '../sortIndexPage';

const h2 = (text) => `<h2>${text}</h2>`;
const li = (text) => `<li><a>${text}</a></li>`;
const ul = (...lis) => `<ul>${lis.map(li).join('')}</ul>`;

test('should return alphabetized html without nav', async () => {
  const html = h2('Test') + ul('Foo', 'Bar', 'Baz');
  const expected = h2('Test') + ul('Bar', 'Baz', 'Foo');

  expect(sortIndexPage(html)).resolves.toEqual(expected);
});

test('should sort categories alphabetically without nav', async () => {
  const html = [
    h2('Test'),
    ul('Foo', 'Bar', 'Baz'),
    h2('Another Test'),
    ul('Pumpkin', 'Apples', 'Oranges'),
  ].join('');

  const expected = [
    h2('Another Test'),
    ul('Apples', 'Oranges', 'Pumpkin'),
    h2('Test'),
    ul('Bar', 'Baz', 'Foo'),
  ].join('');

  expect(sortIndexPage(html)).resolves.toEqual(expected);
});
