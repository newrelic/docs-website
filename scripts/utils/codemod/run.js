const codemods = require('../../../codemods');
const createProcessor = require('./create-processor');

const run = (file) => {
  const processor = createProcessor({ codemods });

  return processor.process(file);
};

module.exports = run;
