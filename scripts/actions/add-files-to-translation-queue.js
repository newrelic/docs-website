const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
const frontmatter = require('@github-docs/frontmatter');
const AWS = require('aws-sdk');

const { prop } = require('../utils/functional');

AWS.config.update({ region: 'us-east-2' });

/** @typedef {Object<string, string[]>} SlugsByLocale */

const isMdxFile = (filename) => filename.slice(-3) === 'mdx';

const showError = (text) => console.error(chalk.red(`[!] Error: ${text}`));

const checkArgs = () => {
  const { argv } = process;

  if (argv.length !== 3) {
    showError('expected 1 argument: API_URL');
    console.log(`[?] Usage:\n\tnode ${argv[1]} API_URL`);

    process.exit(1);
  }
};

/**
 * @param {string} url An API url containing a list of files changed in a PR.
 * @returns {Promise<SlugsByLocale>} An object containing arrays of slugs, keyed by locale.
 */
const getSlugsToTranslate = async (url) => {
  try {
    const resp = await fetch(url);
    const files = await resp.json();

    return files
      .map(prop('filename'))
      .filter(isMdxFile)
      .reduce((slugs, filename) => {
        const file = fs.readFileSync(path.join(process.cwd(), filename));
        const { data } = frontmatter(file);

        return data.translate && data.translate.length
          ? data.translate.reduce(
              (acc, locale) => ({
                ...acc,
                [locale]: [...(acc[locale] || []), filename],
              }),
              slugs
            )
          : slugs;
      }, {});
  } catch (error) {
    showError(error);
    showError(`unable to fetch files for url: ${url}`);
    process.exit(1);
  }
};

/**
 * @todo Abstract this into a helper function once we need to do this more than once.
 * @param {SlugsByLocale} slugs An object containing arrays of slugs, keyed by locale.
 */
const saveQueue = async (slugs) => {
  const ddbClient = new AWS.DynamoDB.DocumentClient();

  /** @type AWS.DynamoDB.DocumentClient.UpdateItemInput */
  const params = {
    TableName: 'TranslationQueues',
    Key: {
      type: 'To translate',
    },
    UpdateExpression: 'set locales = :slugs',
    ExpressionAttributeValues: {
      ':slugs': slugs,
    },
  };

  ddbClient.update(params, (error, data) => {
    if (error) {
      showError(error);
      showError('unable to update translation queue:');
      process.exit(1);
    }

    console.log('[*] Success!', data);
    process.exit(0);
  });
};

/**
 * Script entrypoint.
 */
const main = async () => {
  checkArgs();
  const data = await getSlugsToTranslate(process.argv[2]);
  await saveQueue(data);
};

main();
