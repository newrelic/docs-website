const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { EXCLUSIONS_FILE } = require('./constants');

/**
 * Loads the Exclusions yaml file and converts it to a JSON object.
 * @returns {Object} The Exclusions yaml file as a JSON object.
 */
const getExclusions = () => {
  return yaml.load(fs.readFileSync(path.join(process.cwd(), EXCLUSIONS_FILE)));
};

module.exports = {
  getExclusions,
};
