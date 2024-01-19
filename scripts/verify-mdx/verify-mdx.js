const fs = require('fs');
const colors = require('ansi-colors');

const { createAST } = require('../../mdx-utils/mdxast');
const {
  frontmatter,
  validateFreshnessDate,
  validateReleaseDate,
} = require('../utils/frontmatter');
const { verifyImageImports } = require('../utils/image-import-utils.js');
const ERROR_TYPES = require('./error-types');
const { validators } = require('./validators');

/**
 * Given an array of file paths, determine if any image imports are unused
 * or reference images that don't exist in the repo.
 */
const verifyImages = (filePaths) => {
  const imageErrors = verifyImageImports(filePaths);

  if (imageErrors.length > 0) {
    console.error(
      colors.yellow(`\n\n❌ Found ${imageErrors.length} image import errors`)
    );
    imageErrors.forEach((error, i) =>
      console.error(colors.magenta(`\n\nError ${i + 1}: `) + `${error}`)
    );
    console.error('\n\n-------------------------- ');
    process.exitCode = 1;
  } else {
    console.log('\n\n🎉 No image import issues found');
  }
};

/**
 * Given a file path, attempt to parse the MDX content to an AST
 * and run our custom validators against it.
 *
 * @param {string[]} filePaths - the list of files to check
 * @returns {object} an object containing the `filePath` and the list of errors
 */
const verifyMDX = (filePath) => {
  const mdxText = fs.readFileSync(filePath, 'utf8');
  let mdxAst;
  let errors = [];

  try {
    // we used to use `mdx.sync(mdxText)` from `@mdx-js/mdx` here too,
    // but we get the same errors if trying to parse the AST fails,
    // so this avoids duplicate work.
    mdxAst = createAST(mdxText);
  } catch (exception) {
    errors.push({
      filePath: filePath,
      reason: exception.reason,
      line: exception.line,
      column: exception.column,
      type: ERROR_TYPES.MDX_ERROR,
    });
  }

  if (mdxAst != null) {
    errors = validators.flatMap((validator) => validator(mdxAst));
  }

  const shouldValidateFreshnessDate = !excludeFromFreshnessPaths.some(
    (excludedPath) => filePath.includes(excludedPath)
  );

  const includeInReleaseDateRegex =
    /src\/(?!i18n).*(\/security-bulletins\/|\/release-notes\/|\/whats-new\/).*(?<!index)(.mdx|.md)/;

  const shouldValidateReleaseDate = includeInReleaseDateRegex.test(filePath);

  const { error } = frontmatter(mdxText);
  if (error != null) {
    errors.push({
      reason: error.reason,
      snippet: error.mark.snippet,
      type: ERROR_TYPES.FRONTMATTER_ERROR,
    });
  }

  if (shouldValidateFreshnessDate) {
    const error = validateFreshnessDate(mdxText);
    if (error != null) {
      errors.push({
        reason: error.message,
        type: ERROR_TYPES.FRONTMATTER_FIELD_ERROR,
      });
    }
  }

  if (shouldValidateReleaseDate) {
    const error = validateReleaseDate(mdxText);
    if (error) {
      errors.push({
        reason: error.message,
        type: ERROR_TYPES.FRONTMATTER_FIELD_ERROR,
      });
    }
  }

  return { filePath, errors };
};

const excludeFromFreshnessPaths = [
  'src/content/docs/release-notes/',
  'src/content/whats-new/',
  'src/content/docs/style-guide/',
  'src/content/docs/security/new-relic-security/security-bulletins/',
  'src/i18n/content/',
];

module.exports = {
  verifyImages,
  verifyMDX,
};
