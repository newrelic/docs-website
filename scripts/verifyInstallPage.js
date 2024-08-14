/* eslint-disable no-console */
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const glob = require('glob');
const { validateYamlFields } = require('./validate-install/schema');
const { verifyImages, verifyMDX } = require('./utils/verify-mdx-utils');

const verifyInstall = async () => {
  const installPage = process.argv.slice(2);

  if (installPage.length === 0) {
    // just a little styling for the output
    console.error(
      '\x1b[31m%s\x1b[0m',
      '\n (!)',
      'Please provide the name of the agent/install page',
      '\n eg. yarn verify-install-page java \n'
    );
    process.exit(1);
  }

  // VERIFY MDX CONTENT

  const filePaths = glob.sync(`${__dirname}/../${installPage}/**/*.mdx`);

  verifyImages(filePaths);
  await verifyMDX(filePaths);

  // VERIFY INSTALL

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
  console.log('\n🎉 No install issues found!');
};

verifyInstall();
