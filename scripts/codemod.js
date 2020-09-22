const createProcessor = require('./utils/codemod/createProcessor');
const { read } = require('to-vfile');
const codemods = require('../codemods');

const FILE =
  './src/content/docs/mobile-apps/new-relic-mobile-apps/ios-app/introduction-ios-mobile-app.mdx';

const process = async (path) => {
  const file = await read(path);
  const processor = createProcessor({ codemods });

  const { contents } = await processor.process(file);

  console.log(contents);
};

process(FILE);
