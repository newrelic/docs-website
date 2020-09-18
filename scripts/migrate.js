const fetchDocs = require('./fetch-docs');
const logger = require('./utils/logger');

const run = async () => {
  logger.normal('Starting migration');
  await fetchDocs();
};

run();
