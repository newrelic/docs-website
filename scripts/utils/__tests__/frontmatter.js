const { frontmatter, validateFreshnessDate } = require('../frontmatter');

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

const happyFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
freshnessValidatedDate: never
---
some content!
`;

const happierFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
freshnessValidatedDate: 2023-12-02
---
some content!
`;

const badDateFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
freshnessValidatedDate: 23-12-02
---
some content!
`;

const missingFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
---
some content!
`;

describe('freshness frontmatter field', () => {
  it('should pass the check with valid "never" value', () => {
    const error = validateFreshnessDate(happyFreshnessMdxString);

    expect(error).toBeFalsy;
  });

  it('should pass the check with valid YYYY-MM-DD date value', () => {
    const error = validateFreshnessDate(happierFreshnessMdxString);

    expect(error).toBeFalsy;
  });

  it('should throw error for invalid date value', () => {
    const error = validateFreshnessDate(badDateFreshnessMdxString);

    const expectedError =
      'freshnessValidatedDate is not a valid value. Must be date format YYYY-MM-DD or `never`';

    expect(error.message).toEqual(expectedError);
  });

  it('should throw error missing freshnessValidatedDate field', () => {
    const error = validateFreshnessDate(missingFreshnessMdxString);

    const expectedError =
      'freshnessValidatedDate field missing from frontmatter';

    expect(error.message).toEqual(expectedError);
  });
});
