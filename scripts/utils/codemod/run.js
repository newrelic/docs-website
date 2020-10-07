const codemods = require('../../../codemods');
const createProcessor = require('./create-processor');

const run = (file) => {
  const processor = createProcessor({ codemods });

  return processor.process(file, (err) => {
    if (err) {
      file.fail(`${err.message}\n${err.stack}`);
    }
  });
};

module.exports = run;
