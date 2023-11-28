// the error handling of this module was taken from `@github-docs/frontmatter`.
// but, it's no longer maintained (in fact, the repo is just gone).
// the code is still available on npm:
// https://www.npmjs.com/package/@github-docs/frontmatter
//
// also, for some reason, it doesn't expose the error location that
// it gets from `gray-matter`, but we could use it for nicer errors.

// using `@gr2m/gray-matter` instead of `gray-matter` because the original
// library hasn't been updated in years and this fork updates the `js-yaml`
// dependency, which is much smaller and more performant.
const grayMatter = require('@gr2m/gray-matter');

const DEFAULT_REASON = 'Invalid frontmatter entry';

/**
 * @typedef {Object} FrontmatterParseResult
 * @property {Record<string, unknown>} attributes
 * @property {string} body
 * @property {YAMLException | null} error
 */

/**
 * Parse the frontmatter and body from the content of a Markdown/MDX string.
 *
 * @example
 * ```js
 * import { frontmatter } from './scripts/utils/frontmatter'
 *
 * const mdxString = `---
 * key: value
 * list:
 *   - item 1
 *   - item 2
 * ---
 * howdy pardner 🤠`;
 *
 * const { attributes, body, error } = frontmatter(mdxString)
 * console.log(attributes)
 * // {
 * //   key: 'value',
 * //   list: ['item 1', 'item 2']
 * // }
 *
 * console.log(body)
 * // 'howdy pardner 🤠'
 *
 * console.log(error)
 * // null
 * ```
 *
 * @param {string} mdString - Full content of the MD(X) file to parse.
 * @return {FrontmatterParseResult} { attributes, body, error }
 */
const frontmatter = (mdString) => {
  let result;
  try {
    const { content, data } = grayMatter(mdString);

    result = {
      attributes: data,
      body: content,
      error: null,
    };
  } catch (error) {
    if (error.reason.startsWith('can not read a block mapping entry;')) {
      error.reason = DEFAULT_REASON;
    }

    result = {
      attributes: {},
      body: null,
      error,
    };
  }

  return result;
};

/**
 * Parse the frontmatter and check for required freshnessValidatedDate field on most content doc pages. 
 * Valid options are `never` or `YYYY-MM-DD`
 *
 * @example
 * ```yaml
 * ---
 * title: This is a doc page
 * freshnessValidatedDate: 2021-03-15
 * ---
 * ```
 * 
 *```js
 * // error.message = undefined
 * ``` 
 * 
 * ```yaml
 * ---
 * title: This is a doc page with an invalid date
 * freshnessValidatedDate: 21-03-15
 * ---
 * ```
 * 
 *```js
 * // error.message = freshnessValidatedDate is not a valid value. Must be date format YYYY-MM-DD or `never`
 * ```

 *
 *
 *
 * @param {string} mdString - Full content of the MD(X) file to parse.
 * @returns error | undefined
 */

const validateFreshnessDate = (mdString) => {
  let error;

  const { data } = grayMatter(mdString);

  const isValidDate = (date) => {
    return !isNaN(new Date(date));
  };

  // freshnessValidatedDate is a required field and must be a date or `never`
  if (data.freshnessValidatedDate) {
    if (
      !isValidDate(data.freshnessValidatedDate) &&
      !data.freshnessValidatedDate.includes('never')
    ) {
      error = new Error(
        'freshnessValidatedDate is not a valid value. Must be date format YYYY-MM-DD or `never`'
      );
    }
  } else {
    error = new Error('freshnessValidatedDate field missing from frontmatter');
  }

  return error;
};

module.exports = {
  frontmatter,
  validateFreshnessDate,
};
