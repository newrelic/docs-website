/* eslint-disable no-console */
const { frontmatter } = require('./utils/frontmatter');
const { verifyImageImports } = require('./utils/image-import-utils.js');
const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const glob = require('glob');
const cliProgress = require('cli-progress');
const colors = require('ansi-colors');

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

const mdxErrors = [];

const readFile = async (filePath) => {
  let failed = false;

  const mdxText = fs.readFileSync(filePath, 'utf8');
  try {
    const jsx = mdx.sync(mdxText);
  } catch (exception) {
    mdxErrors.push(`\x1b[35m MDX error:\x1b[0m ${filePath} \n
      \x1b[31m${exception.reason}\x1b[0m
    line: ${exception.line}
    column: ${exception.column}`);

    failed = true;
  }

  const { error } = frontmatter(mdxText);
  if (error != null) {
    mdxErrors.push(`\x1b[35m Frontmatter error:\x1b[0m ${filePath} \n
      \x1b[31m${error.reason}\x1b[0m
    ${error.mark.snippet}`);
    failed = true;
  }

  return failed ? filePath : null;
};

const verifyMDX = async (filePaths) => {
  console.log(
    `🔍\x1b[92mReading MDX files. This may take a few moments... \n\x1b[0m`
  );
  progressBar.start(filePaths.length, 1);

  const allResults = await Promise.all(
    filePaths.map((path, i) => {
      progressBar.update(i + 1);
      return readFile(path);
    })
  );
  await progressBar.stop();

  const results = allResults.filter(Boolean);

  console.log(`\x1b[35mFailed MDX file count:\x1b[0m ${results.length}`);
  console.log(results);

  if (mdxErrors.length > 0) {
    console.log(`\n\n❌ \x1b[33mFound ${mdxErrors.length} MDX errors\x1b[0m`);
    mdxErrors.forEach((error, i) =>
      console.error(`\n\n\x1b[35mError ${i + 1}:\x1b[0m ${error}`)
    );
    process.exitCode = 1;
  } else {
    console.log('🎉 No MDX issues found');
  }
};

const verifyImages = (filePaths) => {
  const imageErrors = verifyImageImports(filePaths);

  if (imageErrors.length > 0) {
    console.error(
      `\n\n❌\x1b[33mFound ${imageErrors.length} image import errors\x1b[0m`
    );
    imageErrors.forEach((error, i) =>
      console.error(`\n\n\x1b[35mError ${i + 1}:\x1b[0m ${error}`)
    );
    console.error('-------------------------- \n \n');
    process.exitCode = 1;
  } else {
    console.log('🎉 No image import issues found');
  }
};

const main = async () => {
  let filePaths = process.argv.slice(2);

  if (filePaths.length === 0) {
    // if user did not supply paths, default to all
    filePaths = glob.sync(
      `${__dirname}/../src{/content/**/*.mdx,/i18n/content/**/*.mdx}`
    );
  }

  verifyImages(filePaths);
  await verifyMDX(filePaths);
};

main();
