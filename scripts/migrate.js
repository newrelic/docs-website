const fetchDocs = require('./fetch-docs');
const createDirectories = require('./create-directories');
const convertDocs = require('./convert-docs');
const createIndexPages = require('./create-index-pages');
const logger = require('./utils/logger');

const run = async () => {
  logger.normal('Starting migration');

  try {
    logger.normal('Fetching JSON');
    const docs = await fetchDocs();

    logger.normal('Creating directories');
    createDirectories(docs);

    logger.normal('Creating files for Gatsby');
    convertDocs(docs);

    logger.normal('Creating index pages');
    await createIndexPages();

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err}`);
  }
};

run();
