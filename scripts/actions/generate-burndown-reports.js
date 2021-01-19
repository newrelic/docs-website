const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const createSvg = require('./utils/create-svg');

const CHART_DIR = path.join(process.cwd(), 'charts');

/**
 * @typedef {Object} Column
 * @property {string} name
 * @property {number} points
 */

/**
 * @typedef {Object} Milestone
 * @property {string} title
 * @property {Column[]} columns
 */

/**
 * @typedef {Object} BurndownDate
 * @property {string} date Day in the format of d_m_yyyy.
 * @property {Milestone[]} milestones Active milestones for this date.
 */

/**
 * Gets the last 20 days worth of burndown data from DynamoDB.
 * @returns {Promise<BurndownDate[]>}
 */
const getMilestones = async () => {
  AWS.config.update({ region: 'us-east-2' });

  const ddbClient = new AWS.DynamoDB.DocumentClient();
  const table = 'BurndownData';

  return new Promise((resolve, reject) => {
    /** @type AWS.DynamoDB.DocumentClient.ScanInput */
    const params = {
      TableName: table,
      Limit: 20,
    };

    ddbClient.scan(params, (error, data) => {
      if (error || data.Count === 0) {
        console.error(`[!] Unable to load data from ${table}:`);
        console.log(error);
        reject(error);
        return false;
      }

      console.log(`[*] Successfully loaded from ${table}`);
      resolve(data.Items);
    });
  });
};

/**
 * Transforms the data into a chartist format.
 * @param {BurndownDate[]} dates Data from DynamoDB.
 * @returns {Chartist.IBarChartOptions[]} An array of data to be supplied to chartist.
 */
const getChartData = (dates) => {
  const milestones = [
    ...new Set(dates.flatMap((d) => d.milestones.map((m) => m.title))),
  ];

  if (!milestones || !milestones.length) {
    console.error('[!] No milestones found!?');
    process.exit(1);
  }

  const labels = dates.map((d) => d.date.split('_').slice(0, -1).join('/'));

  return milestones.map((title) => ({
    title,
    labels,
    series: dates.map((date) => {
      const milestone = date.milestones.find((m) => m.title === title);
      return milestone
        ? milestone.columns.map((c) => c.points)
        : dates.map(() => 0);
    }),
  }));
};

/**
 * Creates a `.svg` file for the chart data provided.
 * @param {Chartist.IBarChartOptions} data Chart configuration and data.
 * @param {Object} document A virtual dom object to interface with chartist.
 * @returns {Promise}
 */
const saveChartFile = async ({ series, labels, title }) => {
  const content = createSvg(series, labels);

  const filename = path.join(CHART_DIR, `${title.replace(/\s/g, '_')}.svg`);

  console.log(`[*] Generating ${filename}`);
  fs.writeFileSync(filename, content, 'utf-8');
};

/** Entrypoint. */
const main = async () => {
  const dates = await getMilestones();

  if (!fs.existsSync(CHART_DIR)) {
    fs.mkdirSync(CHART_DIR, { recursive: true });
  }

  for (const data of getChartData(dates)) {
    await saveChartFile(data);
  }

  process.exit(0);
};

main();
