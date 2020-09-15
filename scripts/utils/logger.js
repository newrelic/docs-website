const chalk = require('chalk');

const TYPES = {
  LOG: 'LOG',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

const STYLES = {
  [TYPES.LOG]: chalk.white,
  [TYPES.SUCCESS]: chalk.green.inverse,
  [TYPES.WARN]: chalk.yellow.inverse,
  [TYPES.ERROR]: chalk.red.inverse,
};

const log = (type) => (message) => {
  console.log(STYLES[type](TYPES[type]), message);
};

module.exports = {
  normal: log(TYPES.LOG),
  success: log(TYPES.SUCCESS),
  warn: log(TYPES.WARN),
  error: log(TYPES.ERROR),
};
