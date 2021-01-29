/* eslint-disable no-console */
const chalk = require('chalk');

const STYLES = {
  success: chalk.green.inverse,
  warn: chalk.yellow.inverse,
  error: chalk.red.inverse,
  info: chalk.blue,
};

const log = (type) => (message) => {
  console.log(STYLES[type](type), message);
};

module.exports = {
  info: log('info'),
  success: log('success'),
  warn: log('warn'),
  error: (error) => {
    console.error(`${chalk.red.inverse('error')} ${error.stack}`);
  },
};
