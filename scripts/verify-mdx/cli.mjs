#!/usr/bin/env node
import colors from 'ansi-colors';
import { Command } from 'commander';
import cliProgress from 'cli-progress';
import { lstatSync } from 'fs';
import { globSync } from 'glob10';
import { join } from 'path';

import { ERROR_TYPES } from './error-types.mjs';
import { verifyMDX } from './verify-mdx.mjs';

const __dirname = import.meta.dirname;

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

const main = async (paths) => {
  if (paths.length === 0) {
    // if user did not supply paths, default to all
    paths = globSync(
      `${__dirname}/../../src{/content/**/*.mdx,/i18n/content/**/*.mdx}`
    );
  } else {
    // if any of the paths are directories, grab all their MDX files
    paths = paths.flatMap((path) =>
      lstatSync(path).isDirectory() ? globSync(join(path, '**/*.mdx')) : path
    );
  }

  console.log(
    colors.greenBright(
      '\n\n🔍Reading MDX files. This may take a few moments... \n'
    )
  );
  progressBar.start(paths.length, 1);

  const allResults = await Promise.all(
    paths.map(async (path, i) => {
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

  if (resultsWithErrors.length > 0) {
    process.exitCode = 1;
  }
};

const program = new Command();
program
  .description('validate MDX content')
  .argument(
    '[paths...]',
    'a list of MDX files or directories to validate. if a directory is passed, check all MDX files inside it.'
  )
  .action(main);
program.parse();

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
    ${error.mark.snippet}\n`
        );
      }

      if (error.type === ERROR_TYPES.FRONTMATTER_FIELD_ERROR) {
        console.log(
          colors.magenta(` Frontmatter field error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}\n`
        );
      }

      if (error.type === ERROR_TYPES.MDX_ERROR) {
        console.log(
          colors.magenta(` MDX error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}
    line: ${error.line}
    column: ${error.column}\n`
        );
      }

      if (error.type === ERROR_TYPES.VALIDATION_ERROR) {
        console.log(
          colors.magenta(` MDX validation error: `) +
            `${result.filePath} \n
      ${colors.red(error.reason)}
    line: ${error.line}
    column: ${error.column}\n`
        );
      }
    });
  });
};
