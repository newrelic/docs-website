const colors = require('ansi-colors');
const cliProgress = require('cli-progress');
const glob = require('glob');

const ERROR_TYPES = require('./error-types');
const { verifyImages, verifyMDX } = require('./verify-mdx');

const main = async () => {
  let filePaths = process.argv.slice(2);

  if (filePaths.length === 0) {
    // if user did not supply paths, default to all
    filePaths = glob.sync(
      `${__dirname}/../../src{/content/**/*.mdx,/i18n/content/**/*.mdx}`
    );
  }

  verifyImages(filePaths);

  console.log(
    colors.greenBright(
      '\n\n🔍Reading MDX files. This may take a few moments... \n'
    )
  );
  progressBar.start(filePaths.length, 1);

  const allResults = await Promise.all(
    filePaths.map(async (path, i) => {
      const result = verifyMDX(path);
      await progressBar.update(i + 1);
      return result;
    })
  );
  await progressBar.stop();

  const resultsWithErrors = allResults.filter(
    (result) => result.errors.length > 0
  );
  report(resultsWithErrors);
};

const report = (results) => {
  console.log(
    colors.magenta(`\n\nFailed MDX file count: `) + `${results.length}`
  );
  results.forEach((result) => {
    result.errors.forEach((error) => {
      if (error.type === ERROR_TYPES.FRONTMATTER_ERROR) {
        console.log(
          colors.magenta(` Frontmatter error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}
    ${error.mark.snippet}`
        );
      }

      if (error.type === ERROR_TYPES.FRONTMATTER_FIELD_ERROR) {
        console.log(
          colors.magenta(` Frontmatter field error: `) +
            `${result.filePath} \n
      ${colors.red(error.message)}`
        );
      }

      if (error.type === ERROR_TYPES.MDX_ERROR) {
        console.log(
          colors.magenta(` MDX error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}
    line: ${error.line}
    column: ${error.column}`
        );
      }

      if (error.type === ERROR_TYPES.VALIDATION_ERROR) {
        console.log(
          colors.magenta(` MDX validation error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}
    line: ${error.line}
    column: ${error.column}`
        );
      }
    });
  });
};

const progressBar = new cliProgress.SingleBar(
  {
    format:
      // eslint-disable-next-line prefer-template
      'MDX verification progress |' +
      colors.cyan('{bar}') +
      '| {percentage}% || {value} of {total} Files',
    forceRedraw: true,
  },
  cliProgress.Presets.rect
);

main();
