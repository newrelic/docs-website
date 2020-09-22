const createProcessor = require('./utils/codemod/createProcessor');
const { read, write } = require('to-vfile');
const codemods = require('../codemods');

const FILE =
  './src/content/docs/mobile-apps/new-relic-mobile-apps/ios-app/introduction-ios-mobile-app.mdx';

const process = async (path) => {
  const file = await read(path);
  const processor = createProcessor({ codemods });

  await processor.process(file);
  await write(file, 'utf-8');
};

process(FILE);
