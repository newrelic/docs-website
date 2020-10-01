const fetchDocs = require('./utils/migrate/fetch-docs');
const createDirectories = require('./utils/migrate/create-directories');
const convertDocs = require('./utils/migrate/convert-docs');
const createIndexPages = require('./utils/migrate/create-index-pages');
const mapToVFiles = require('./utils/migrate/map-to-vfiles');
const logger = require('./utils/logger');
const runCodemod = require('./utils/codemod/run');
const { write } = require('to-vfile');
const createRawHTMLFiles = require('./utils/migrate/create-raw-html-files');

const run = async () => {
  logger.normal('Starting migration');

  try {
    logger.normal('Fetching JSON');
    const docs = await fetchDocs();
    const files = mapToVFiles(docs);

    logger.normal('Creating directories');
    createDirectories(files);

    logger.normal('Creating files for Gatsby');
    convertDocs(files);

    logger.normal('Running codemods');
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

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err}`);
  }
};

run();
