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

it('should find an index on the top-level', () => {
  const fn = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, fn('/foo'))).toEqual(0);
  expect(findDeepIndex(TREE, fn('/bar'))).toEqual(1);
  expect(findDeepIndex(TREE, fn('/baz'))).toEqual(2);
});

it('should find an index in a nested level', () => {
  const fn = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, fn('/baz/apple'))).toEqual(0);
  expect(findDeepIndex(TREE, fn('/baz/orange'))).toEqual(1);
});

it('should return `undefined` if a match not found', () => {
  const fn = (path) => (child) => child.path === path;

  expect(findDeepIndex(TREE, fn('/pumpkin'))).toEqual(undefined);
  expect(findDeepIndex(TREE, fn('/baz/banana'))).toEqual(undefined);
});

it('should allow for different equality functions', () => {
  const fn1 = (title) => (child) => child.title === title;
  const fn2 = (length) => (child) => child.title.length === length;

  expect(findDeepIndex(TREE, fn1('Foo'))).toEqual(0);
  expect(findDeepIndex(TREE, fn1('Bar'))).toEqual(1);
  expect(findDeepIndex(TREE, fn1('Orange'))).toEqual(1);

  expect(findDeepIndex(TREE, fn2(3))).toEqual(0);
  expect(findDeepIndex(TREE, fn2(5))).toEqual(0);
  expect(findDeepIndex(TREE, fn2(6))).toEqual(1);
});
