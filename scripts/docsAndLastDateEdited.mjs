#! /usr/bin/env node

import { execSync } from 'child_process';
import { glob } from 'glob10';
import { writeFile, readFileSync } from 'fs';
import { stringify } from 'csv-stringify';
import cliProgress from 'cli-progress';

console.log('Building CSV file...');
console.time('csvCreation');
const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: [
    '**/index.mdx',
    'src/content/docs/release-notes/**/*.mdx',
    'src/content/docs/style-guide/**/*.mdx',
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

  if (frontmatter?.includes(freshnessFrontmatterKey)) {
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
  // get date of most recent commit
  const gitLogModifiedDate = execSync(
    `git log -1 --pretty=format:%aI ${doc}`
  ).toString();

  const dateModified = new Date(gitLogModifiedDate).toDateString();
  const freshnessDate = getFreshnessFrontmatter(doc);

  // get author and date for each commit in last 180 days. split into an array
  const authorData = execSync(
    `git log --format=%an,%aI --since=180.days ${doc}`
  )
    .toString()
    .split('\n');

  // remove empty element from trailing new line
  authorData.pop();

  // shorten date to YYYY-MM-DD and return author data formatted for readability
  const authorsAndDates = authorData.map((author) => {
    const [name, date] = author.split(',');
    return `[${name} - ${date?.slice(0, 10)}]`;
  });

  progressBar.update(i + 1);

  return [doc, freshnessDate, dateModified, authorsAndDates.toString()];
});

const headers = [
  'Doc',
  'Freshness Date',
  'Last Modified Date',
  'Recent Authors',
];

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
