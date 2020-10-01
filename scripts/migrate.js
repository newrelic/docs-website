const fetchDocs = require('./utils/migrate/fetch-docs');
const createDirectories = require('./utils/migrate/create-directories');
const convertFile = require('./utils/migrate/convert-file');
const createIndexPages = require('./utils/migrate/create-index-pages');
const toVFile = require('./utils/migrate/to-vfile');
const logger = require('./utils/logger');
const runCodemod = require('./utils/codemod/run');
const { write } = require('to-vfile');
const createRawHTMLFiles = require('./utils/migrate/create-raw-html-files');
const reporter = require('vfile-reporter');

const run = async () => {
  logger.normal('Starting migration');

  try {
    logger.normal('Fetching JSON');
    const docs = await fetchDocs();
    const files = docs.map(toVFile);

    logger.normal('Creating directories');
    createDirectories(files);

    logger.normal('Converting files');
    files.forEach(convertFile);

    logger.normal('Running codemods on .mdx files');
    await Promise.all(
      files.filter((file) => file.extname === '.mdx').map(runCodemod)
    );

    logger.normal('Saving changes to files');
    await Promise.all(files.map((file) => write(file, 'utf-8')));

    logger.normal('Creating index pages');
    await createIndexPages();

    // Run `DEBUG=true yarn migrate` to also write a `.html` file right next to
    // the `.mdx` file. This can help us look at the original HTML to compare
    // with the generated markdown to ensure we don't miss edge cases. These
    // files should not be committed.
    if (process.env.DEBUG) {
      logger.normal('[DEBUG] Creating raw HTML files');
      createRawHTMLFiles(files);
    }

    console.error(reporter(files, { quiet: true }));

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err}`);
  }
};

run();
