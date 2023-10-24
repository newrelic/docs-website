#! /usr/bin/env node

import { glob } from 'glob10';
import { statSync, writeFileSync } from 'fs';
import { stringify } from 'csv-stringify';

const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: '**/index.mdx',
});

const allDocsAndDates = allDocs.map((doc) => {
  const modifiedDate = statSync(doc).mtime;
  return [doc, modifiedDate.toDateString()];
});

stringify(allDocsAndDates, function (err, output) {
  writeFileSync('docsLastModifiedDate.csv', output, 'utf8', function (err) {
    if (err) {
      console.log(
        'Some error occured - file either not saved or corrupted file saved.'
      );
    } else {
      console.log('CSV Created!');
    }
  });
});
