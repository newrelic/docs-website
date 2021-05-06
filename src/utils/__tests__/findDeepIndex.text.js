import findDeepIndex from '../findDeepIndex';

const TREE = {
  title: 'Test',
  children: [
    { title: 'Foo', path: '/foo' },
    { title: 'Bar', path: '/bar' },
    {
      title: 'Baz',
      path: '/baz',
      children: [
        { title: 'Apple', path: '/baz/apple' },
        { title: 'Orange', path: '/baz/orange' },
      ],
    },
  ],
};

test('should find an index on the top-level', () => {
  const byPath = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, byPath('/foo'))).toEqual(0);
  expect(findDeepIndex(TREE, byPath('/bar'))).toEqual(1);
  expect(findDeepIndex(TREE, byPath('/baz'))).toEqual(2);
});

test('should find an index in a nested level', () => {
  const byPath = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, byPath('/baz/apple'))).toEqual(0);
  expect(findDeepIndex(TREE, byPath('/baz/orange'))).toEqual(1);
});

test('should return `undefined` if a match not found', () => {
  const byPath = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, byPath('/pumpkin'))).toEqual(undefined);
  expect(findDeepIndex(TREE, byPath('/baz/banana'))).toEqual(undefined);
});

test('should allow for different equality functions', () => {
  const byTitle = (title) => (child) => child.title === title;
  const byLength = (length) => (child) => child.title.length === length;

  expect(findDeepIndex(TREE, byTitle('Foo'))).toEqual(0);
  expect(findDeepIndex(TREE, byTitle('Bar'))).toEqual(1);
  expect(findDeepIndex(TREE, byTitle('Orange'))).toEqual(1);

  expect(findDeepIndex(TREE, byLength(3))).toEqual(0);
  expect(findDeepIndex(TREE, byLength(5))).toEqual(0);
  expect(findDeepIndex(TREE, byLength(6))).toEqual(1);
});

test('should allow for different keys for "children"', () => {
  const tree = {
    name: 'Fruit',
    types: [
      { name: 'Banana', color: 'yellow' },
      { name: 'Orange', color: 'orange' },
      {
        name: 'Berry',
        types: [
          { name: 'Strawberry', color: 'red' },
          { name: 'Blueberry', color: 'blue' },
        ],
      },
    ],
  };

  const byColor = (color) => (child) => child.color === color;

  expect(findDeepIndex(tree, byColor('yellow'), 'types')).toEqual(0);
  expect(findDeepIndex(tree, byColor('orange'), 'types')).toEqual(1);
  expect(findDeepIndex(tree, byColor('red'), 'types')).toEqual(0);
  expect(findDeepIndex(tree, byColor('blue'), 'types')).toEqual(1);
  expect(findDeepIndex(tree, byColor('purple'), 'types')).toEqual(undefined);
});
