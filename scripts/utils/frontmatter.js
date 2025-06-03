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
const yaml = require('js-yaml');

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

const stringifyFrontmatter = (body, attributes, options) => {
  try {
    return grayMatter.stringify(body, attributes, options);
  } catch (error) {
    return error;
  }
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

  const { data } = grayMatter(mdString, {
    engines: {
      yaml: {
        parse: (string) => yaml.safeLoad(string, { schema: yaml.JSON_SCHEMA }),
      },
    },
  });

  const isValidDate = (date) => {
    const regex = /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;
    return regex.test(date);
  };
  // freshnessValidatedDate is a required field and must be a date or `never`
  if (data.freshnessValidatedDate) {
    const stringDate = data.freshnessValidatedDate.toString();
    if (!isValidDate(stringDate) && !stringDate.includes('never')) {
      error = new Error(
        'freshnessValidatedDate is not a valid value. Must be date format YYYY-MM-DD or `never`'
      );
    }
  } else {
    error = new Error('freshnessValidatedDate field missing from frontmatter');
  }

  return error;
};

/**
 * Parse the frontmatter and check for required releaseDate field on whats-new, security-bulletins, and release-notes. 
 * Valid format is `YYYY-MM-DD`
 *
 * @example
 * ```yaml
 * ---
 * title: This is a security bulletin
 * releaseDate: '2021-03-15'
 * ---
 * ```
 * 
 *```js
 * // error.message = undefined
 * ``` 
 * 
 * ```yaml
 * ---
 * title: This is a security bulletin with an invalid date
 * releaseDate: 21-03-15
 * ---
 * ```
 * 
 *```js
 * // error.message = releaseDate is not a valid value. Must be date string formatted like 'YYYY-MM-DD' wrapped in single quotes
 * ```

 *
 *
 *
 * @param {string} mdString - Full content of the MD(X) file to parse.
 * @returns error | undefined
 */

const validateReleaseDate = (mdString) => {
  let error;

  const { data } = grayMatter(mdString, {
    engines: {
      yaml: {
        parse: (string) => yaml.safeLoad(string, { schema: yaml.JSON_SCHEMA }),
      },
    },
  });

  const isValidDate = (date) => {
    const regex = /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;
    return regex.test(date);
  };
  // releaseDate is a required field and must be a date wrapped in single quotes
  if (data.releaseDate) {
    if (!isValidDate(data.releaseDate)) {
      error = new Error(
        "releaseDate is not a valid value. Must be date string formatted like 'YYYY-MM-DD' wrapped in single quotes"
      );
    }
  } else {
    error = new Error('releaseDate field missing from frontmatter');
  }

  return error;
};

module.exports = {
  frontmatter,
  stringifyFrontmatter,
  validateFreshnessDate,
  validateReleaseDate,
};
