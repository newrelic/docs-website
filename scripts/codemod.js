const { write } = require('to-vfile');
const vfileGlob = require('vfile-glob');
const run = require('./utils/codemod/run');
const path = require('path');

const codemods = process.argv.slice(2);

vfileGlob('./src/content/**/*.mdx').subscribe(async (file) => {
  await run(file, {
    codemods: codemods.map((script) => require(path.resolve(script))),
  });
  await write(file, 'utf-8');
});
