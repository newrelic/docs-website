const { write } = require('to-vfile');
const vfileGlob = require('vfile-glob');
const run = require('./utils/codemod/run');
const codemods = require('../codemods');

vfileGlob('./src/content/**/*.mdx').subscribe(async (file) => {
  await run(file, { codemods });
  await write(file, 'utf-8');
});
