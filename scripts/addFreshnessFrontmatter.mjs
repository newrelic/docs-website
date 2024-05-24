#! /usr/bin/env node

import { execSync } from 'child_process';
import { glob } from 'glob10';
import { writeFile, readFileSync } from 'fs';
import cliProgress from 'cli-progress';

console.log('Reading git history...');
console.time('Freshness field added');

const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: [
    '**/index.mdx',
    'src/content/docs/release-notes/**/*.mdx',
    'src/content/docs/style-guide/**/*.mdx',
    'src/content/whats-new/**/*.mdx',
    'src/content/docs/security/new-relic-security/security-bulletins/**/*.mdx',
  ],
});

/**
 * Helper function that checks if a date is outside the freshness threshold of 180 days.
 * @param {Date} date
 * @returns {boolean} if date is stale
 */
const isDocStale = (date) => {
  const days = 180;
  const today = Date.now();
  const staleDate = new Date(today - days * 24 * 60 * 60 * 1000);
  return staleDate > date;
};

const freshnessFrontmatterKey = 'freshnessValidatedDate: ';

/**
 * Reads an array of docs and writes a new freshnessValidatedDate field to frontmatter.
 * Uses the last git rename date on that file to set the value.
 * @param {Array} docs - Array of docs file paths
 */
const addFreshnessFrontmatter = (allDocs) => {
  allDocs.map(async (doc, i) => {
    // get rename date of file to get a 'created' date
    const gitLogCreatedDate = execSync(
      `git log --follow --pretty=format:%aI ${doc}  | tail -1`
    ).toString();

    const created = new Date(gitLogCreatedDate);

    const fileData = readFileSync(doc, 'utf-8');

    // split doc into sections using the frontmatter delimiter
    const content = fileData.split('---');

    // modify the frontmatter adding the freshness field if it does not have it already
    if (!content[1]?.includes(freshnessFrontmatterKey)) {
      content[1] = `${content[1]}${freshnessFrontmatterKey}${
        isDocStale(created) ? 'never' : created.toISOString().slice(0, 10)
      }\n`;
    }
    // put the doc back together
    const newContent = content.join('---');

    writeFile(doc, newContent, 'utf-8', function (err) {
      if (err) {
        console.log(
          '\n',
          'Some error occurred - file either not saved or corrupted file saved.'
        );
      }
    });
    progressBar.update(i + 1);
  });
  progressBar.stop();
  console.timeEnd('Freshness field added');
};

const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);
progressBar.start(allDocs.length, 0);

addFreshnessFrontmatter(allDocs);
