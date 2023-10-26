#! /usr/bin/env node

import { execSync } from 'child_process';
import { glob } from 'glob10';
import { writeFile } from 'fs';
import { stringify } from 'csv-stringify';
import cliProgress from 'cli-progress';

console.log('Building CSV file...');
console.time('csvCreation');

const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: '**/index.mdx',
});

const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
progressBar.start(allDocs.length, 0);

const allDocsAndDates = allDocs.map((doc, i) => {
  const gitLogModifiedDate = execSync(
    `git log -1 --pretty=format:%aI ${doc}`
  ).toString();

  const dateModified = new Date(gitLogModifiedDate);

  progressBar.update(i);

  return [doc, dateModified.toDateString()];
});

stringify(allDocsAndDates, function (err, output) {
  writeFile('docsLastModifiedDate.csv', output, 'utf8', function (err) {
    if (err) {
      console.log(
        'Some error occured - file either not saved or corrupted file saved.'
      );
    } else {
      console.log('CSV Created!');
      progressBar.stop();
      console.timeEnd('csvCreation');
    }
  });
});
