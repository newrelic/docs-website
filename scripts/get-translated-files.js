const fetch = require('node-fetch');
const frontmatter = require('@github-docs/frontmatter');
const fs = require('fs');
const path = require('path');
const process = require('process');

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

const url = process.argv[2];

const fetchFiles = async (url) => {
  const res = await fetch(url);
  const files = await res.json();

  const fileNames = files
    .map((file) => file.filename)
    .filter((filename) => filename.slice(-3) === 'mdx')
    .reduce((accum, curr) => {
      const file = fs.readFileSync(path.join(process.cwd(), curr));
      const { data } = frontmatter(file);
      if (data.translate) {
        data.translate.forEach((locale) => {
          if (!accum[locale]) {
            accum[locale] = [];
          }
          accum[locale].push(curr);
        });
      }
      return accum;
    }, {});

  console.log(fileNames);
  process.exit(0);
};

fetchFiles(url);
