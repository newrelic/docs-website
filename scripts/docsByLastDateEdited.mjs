#! /usr/bin/env node

import { glob } from 'glob10';
import { statSync, writeFile } from 'fs';
import { stringify } from 'csv-stringify';

const allDocs = await glob('src/content/docs/**/*.mdx', {
  ignore: '**/index.mdx',
});

const allDocsAndDates = allDocs.map((doc) => {
  // mtime is the last modified time of a particular file
  // https://nodejs.org/api/fs.html#statsmtime
  const modifiedDate = statSync(doc).mtime;
  return [doc, modifiedDate.toDateString()];
});

stringify(allDocsAndDates, function (err, output) {
  writeFile('docsLastModifiedDate.csv', output, 'utf8', function (err) {
    if (err) {
      console.log(
        'Some error occured - file either not saved or corrupted file saved.'
      );
    } else {
      console.log('CSV Created!');
    }
  });
});
