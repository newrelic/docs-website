const fetchDocs = require('./utils/migrate/fetch-docs');
const createDirectories = require('./utils/migrate/create-directories');
const convertDocs = require('./utils/migrate/convert-docs');
const createIndexPages = require('./utils/migrate/create-index-pages');
const mapToVFiles = require('./utils/migrate/map-to-vfiles');
const logger = require('./utils/logger');
const runCodemod = require('./utils/codemod/run');
const { write } = require('to-vfile');

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

    logger.normal('Creating index pages');
    await createIndexPages();

    logger.normal('Running codemods');
    await Promise.all(
      files.filter((file) => file.extname === '.mdx').map(runCodemod)
    );

    logger.normal('Saving changes');
    await Promise.all(files.map((file) => write(file, 'utf-8')));

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err}`);
  }
};

run();
