const loadFromDB = require('./utils/load-from-db');

const CHART_DIR = ''; // TODO

const COLORS = {}; // TODO

// TODO
const getChartData = (dates) => {
  return [];
};

// TODO
const generateChartContent = (data) => {
  return '';
};

// TODO
const saveChartFile = (content) => {
  return null;
};

/** Entrypoint. */
const main = async () => {
  const dates = await loadFromDB('BurndownData'); // TODO: limit? without key?
  const chartData = getChartData(dates);
  const content = chartData.map(generateChartContent);

  content.map(saveChartFile);
};

main();
