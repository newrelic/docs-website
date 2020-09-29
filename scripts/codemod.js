const createProcessor = require('./utils/codemod/createProcessor');
const { write } = require('to-vfile');
const vfileGlob = require('vfile-glob');
const codemods = require('../codemods');

const process = async (file) => {
  const processor = createProcessor({ codemods });

  await processor.process(file);
  await write(file, 'utf-8');
};

vfileGlob('./src/content/**/*.mdx').subscribe((file) => process(file));
