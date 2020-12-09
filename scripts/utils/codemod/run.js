const createProcessor = require('./create-processor');

const run = async (file, { codemods }) => {
  const processor = createProcessor({ codemods });

  try {
    await processor.process(file);
  } catch (e) {
    file.fail(`${e.message}\n${e.stack}`);
  }
};

module.exports = run;
