#! /usr/bin/env node

import { execSync } from 'child_process';
import { glob } from 'glob10';
import { writeFileSync, writeFile, readFileSync } from 'fs';
import { stringify } from 'csv-stringify';
import cliProgress from 'cli-progress';

console.log('Building CSV file...');
console.time('csvCreation');

const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: [
    '**/index.mdx',
    'src/content/docs/release-notes/**/*.mdx',
    'src/content/whats-new/**/*.mdx',
    'src/content/docs/security/new-relic-security/security-bulletins/**/*.mdx',
  ],
});

const freshnessFrontmatterKey = 'freshnessValidatedDate: ';

/**
 * Reads a doc file and extracts the `freshnessValidatedDate` value from frontmatter
 * @param {String} doc - doc file path
 * @returns {String} freshnessDate - date string | `never` | null
 **/
const getFreshnessFrontmatter = (doc) => {
  // split the doc using the frontmatter delimiter and keep the frontmatter data
  const frontmatter = readFileSync(doc, 'utf-8').split('---')[1];
  let freshnessDate;

  if (frontmatter.includes(freshnessFrontmatterKey)) {
    freshnessDate = frontmatter
      .split('\n')
      // find the line with the freshnessDate, there should always be one, and remove the key
      .filter((string) => string.includes(freshnessFrontmatterKey))[0]
      .replace(freshnessFrontmatterKey, '');
  } else {
    freshnessDate = null;
  }

  return freshnessDate?.includes('never') | (freshnessDate === null)
    ? freshnessDate
    : new Date(freshnessDate).toDateString();
};

const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
progressBar.start(allDocs.length, 0);

const allDocsAndDates = allDocs.map((doc, i) => {
  const gitLogModifiedDate = execSync(
    `git log -1 --pretty=format:%aI ${doc}`
  ).toString();

  const dateModified = new Date(gitLogModifiedDate).toDateString();
  const freshnessDate = getFreshnessFrontmatter(doc);

  progressBar.update(i + 1);

  return [doc, freshnessDate, dateModified];
});

const headers = ['Doc', 'Freshness Date', 'Last Modified Date'];

allDocsAndDates.unshift(headers);

stringify(allDocsAndDates, function (err, output) {
  writeFile('docsLastModifiedDate.csv', output, 'utf8', function (err) {
    if (err) {
      console.log(
        'Some error occurred - file either not saved or corrupted file saved.'
      );
    } else {
      console.log('\n');
      console.timeEnd('csvCreation');
      console.log('CSV Created!');
      progressBar.stop();
    }
  });
});
