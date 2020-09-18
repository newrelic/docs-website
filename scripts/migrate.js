const fetchDocs = require('./fetch-docs');
const createIndexPages = require('./create-index-pages');
const logger = require('./utils/logger');

const run = async () => {
  try {
    logger.normal('Starting migration');
    await fetchDocs();

    logger.normal('Creating index pages');
    await createIndexPages();

    logger.success('Migration complete!');
  } catch (err) {
    logger.warn(`Error running migration: ${err}`);
  }
};

run();
