const { write } = require('to-vfile');
const vfileGlob = require('vfile-glob');
const run = require('./utils/codemod/run');

vfileGlob('./src/content/**/*.mdx').subscribe(async (file) => {
  await run(file);
  await write(file, 'utf-8');
});
