const checkArgs = require('./utils/check-args');
const saveToDB = require('./utils/save-to-db');

/**
 * @example getDate(); // 1_15_21
 * @returns {string} The current date in the format `month_day_year`.
 */
const getDate = () =>
  new Date().toLocaleString().replace(/\//g, '_').replace(/,.*/, '');

const main = async () => {
  checkArgs(3);

  const milestones = JSON.parse(process.argv[2]);

  const result = await saveToDB(
    'BurndownData',
    { date: getDate() },
    'set milestones = :milestones',
    { ':milestones': milestones }
  );

  return result;
};

main();
