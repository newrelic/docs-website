/* eslint-disable no-console */
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const { validateYamlFields } = require('./validate-install/schema');

const verifyInstall = () => {
  const installPage = process.argv.slice(2);

  if (installPage.length === 0) {
    // just a little styling for the output
    console.error(
      '\x1b[31m%s\x1b[0m',
      '\n (!)',
      'Please provide the name of the agent/install page',
      '\n eg. yarn verify-installpage java \n'
    );
    process.exit(1);
  }
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), `/src/install/config/${installPage}.yaml`),
      'utf8'
    );
    try {
      const data = yaml.load(file);

      const isValid = validateYamlFields(data);

      if (!isValid) {
        process.exit(1);
      }
    } catch (e) {
      console.error(
        '\x1b[31m%s\x1b[0m%s\x1b[31m%s\x1b[0m%s',
        '\n(!)',
        `There is a syntax issue in ${installPage}.yaml \n These are sometimes caused by apostrophes. Be sure to use double quotes around any strings with apostrophes \n`,
        '\nerror message: ',
        `${e.message} \n`
      );
      process.exit(1);
    }
  } catch (e) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      '\n (!)',
      `Cannot parse ${installPage}.yaml, make sure the file exists \n`,
      `${e.message} \n`
    );
    process.exit(1);
  }
  console.log(' ✅ no issues found');
};

verifyInstall();
