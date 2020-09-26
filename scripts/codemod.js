const createProcessor = require('./utils/codemod/createProcessor');
const { read, write } = require('to-vfile');
const codemods = require('../codemods');

const FILE =
  './src/content/whats-new/create-grafana-dashboards-prometheus-data-stored-new-relic.mdx';

const process = async (path) => {
  const file = await read(path);
  const processor = createProcessor({ codemods });

  await processor.process(file);
  await write(file, 'utf-8');
};

process(FILE);
