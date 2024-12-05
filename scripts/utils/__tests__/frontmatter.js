const {
  frontmatter,
  validateFreshnessDate,
  validateReleaseDate,
} = require('../frontmatter');

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

const invalidDateFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
freshnessValidatedDate: 23-12-02
---
some content!
`;
const badFormatDateFreshnessMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
freshnessValidatedDate: 2023
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
    const error = validateFreshnessDate(invalidDateFreshnessMdxString);

    const expectedError =
      'freshnessValidatedDate is not a valid value. Must be date format YYYY-MM-DD or `never`';

    expect(error.message).toEqual(expectedError);
  });

  it('should throw error for valid date but wrong format', () => {
    const error = validateFreshnessDate(badFormatDateFreshnessMdxString);

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

const happyReleaseDateMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
releaseDate: '2021-12-02'
---
some content!
`;

const invalidReleaseDateMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
releaseDate: '23-12-02'
---
some content!
`;
const badFormatReleaseDateMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
releaseDate: 2023
---
some content!
`;

const missingReleaseDateMdxString = `---
howdy: cowboy 🤠
list:
  - item 1
  - item 2
---
some content!
`;

describe('releaseDate frontmatter field', () => {
  it('should pass the check with valid "never" value', () => {
    const error = validateReleaseDate(happyReleaseDateMdxString);

    expect(error).toBeFalsy;
  });

  it('should throw error for invalid date value', () => {
    const error = validateReleaseDate(invalidReleaseDateMdxString);

    const expectedError =
      "releaseDate is not a valid value. Must be date string formatted like 'YYYY-MM-DD' wrapped in single quotes";

    expect(error.message).toEqual(expectedError);
  });

  it('should throw error for valid date but wrong format', () => {
    const error = validateReleaseDate(badFormatReleaseDateMdxString);

    const expectedError =
      "releaseDate is not a valid value. Must be date string formatted like 'YYYY-MM-DD' wrapped in single quotes";

    expect(error.message).toEqual(expectedError);
  });

  it('should throw error missing releaseDate field', () => {
    const error = validateReleaseDate(missingReleaseDateMdxString);

    const expectedError = 'releaseDate field missing from frontmatter';

    expect(error.message).toEqual(expectedError);
  });
});
