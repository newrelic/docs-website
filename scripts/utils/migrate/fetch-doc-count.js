const fetch = require('node-fetch');
require('dotenv').config();
const { writeSync } = require('to-vfile');
const vfile = require('vfile');

const logger = require('../logger');

const fetchDocCount = async () => {
    const url = 'https://docs-dev.newrelic.com/api/migration/content/count'
    try {
      const resp = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
        }
      });
      const result = await resp.json();
      console.log(result)
      writeSync( vfile({
          contents: JSON.stringify(result), 
          path: `${process.cwd()}/src/count`,
          extname: '.json'
      }))
    } catch {
      logger.error(`Error, could not fetch number of docs`)
    }
  }

module.exports = fetchDocCount;