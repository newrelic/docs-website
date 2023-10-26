const { frontmatter } = require('../frontmatter');

const mdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
---
some content!
`;

const badMdxString = `---
heres: some: bad: frontmatter
---
some content!
`;

describe('frontmatter', () => {
  it('should parse frontmatter into an object', () => {
    const { attributes } = frontmatter(mdxString);
    const expected = {
      howdy: 'cowboy 🤠',
      list: ['item 1', 'item 2'],
    };

    expect(attributes).toEqual(expected);
  });

  it('should return the correct body', () => {
    const { body } = frontmatter(mdxString);

    const expected = 'some content!\n';

    expect(body).toEqual(expected);
  });

  it('should return an error when parsing malformed frontmatter', () => {
    const { attributes, error } = frontmatter(badMdxString);

    expect(error).not.toBe(null);
    expect(attributes).toEqual({});
  });
});
