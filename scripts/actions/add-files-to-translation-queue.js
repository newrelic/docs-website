const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');
const frontmatter = require('@github-docs/frontmatter');
const AWS = require('aws-sdk');
const { prop } = require('../utils/functional');

AWS.config.update({ region: 'us-east-2' });

const ddbClient = new AWS.DynamoDB.DocumentClient();

/** @typedef {Object<string, string[]>} SlugsByLocale */

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
 * @param {string} url The API url that is used to fetch files.
 * @param {SlugsByLocale} queue The queue from DynamoDB.
 * @returns {Promise<SlugsByLocale>} An updated queue.
 */
const getUpdatedQueue = async (url, queue) => {
  const resp = await fetch(url);
  const files = await resp.json();

  const mdxFiles = files
    .filter((file) => path.extname(file.filename) === '.mdx')
    .reduce((files, file) => {
      const contents = fs.readFileSync(path.join(process.cwd(), file.filename));
      const { data } = frontmatter(contents);

      return data.translate && data.translate.length
        ? [...files, { ...file, locales: data.translate }]
        : files;
    }, []);

  const addedMdxFiles = mdxFiles
    .filter((f) => f.status !== 'removed')
    .reduce((files, file) => {
      return file.locales.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: [...(acc[locale] || []), file.filename],
        }),
        files
      );
    }, {});

  const removedMdxFileNames = mdxFiles
    .filter((f) => f.status === 'removed')
    .map(prop('filename'));

  return Object.entries(queue)
    .map(([locale, files]) => [
      locale,
      files.filter((f) => !removedMdxFileNames.includes(f)),
    ])
    .reduce(
      (acc, [locale, filenames]) => ({
        ...acc,
        [locale]: filenames.concat(acc[locale] || []),
      }),
      addedMdxFiles
    );
};

/**
 * @todo Abstract this into a helper function once we need to do this more than once.
 * @returns {Promise<SlugsByLocale>} The current queue in DynamoDB.
 */
const getQueue = () =>
  new Promise((resolve) => {
    /** @type AWS.DynamoDB.DocumentClient.GetItemInput */
    const params = {
      TableName: 'TranslationQueues',
      Key: {
        type: 'to_translate',
      },
    };

    ddbClient.get(params, (error, data) => {
      if (error) {
        showError(error);
        showError('unable to get translation queue:');
        process.exit(1);
      }

      console.log('[*] getQue: success!');
      resolve(data);
    });
  });

/**
 * @todo Abstract this into a helper function once we need to do this more than once.
 * @param {SlugsByLocale} slugs An object containing arrays of slugs, keyed by locale.
 */
const saveQueue = (slugs) =>
  new Promise((resolve) => {
    /** @type AWS.DynamoDB.DocumentClient.UpdateItemInput */
    const params = {
      TableName: 'TranslationQueues',
      Key: {
        type: 'to_translate',
      },
      UpdateExpression: 'set locales = :slugs',
      ExpressionAttributeValues: {
        ':slugs': slugs,
      },
    };

    ddbClient.update(params, (error) => {
      if (error) {
        showError(error);
        showError('unable to update translation queue:');
        process.exit(1);
      }

      console.log('[*] saveQueue: success!');
      resolve();
    });
  });

/**
 * Script entrypoint.
 */
const main = async () => {
  checkArgs();

  const url = process.argv[2];
  const queue = await getQueue();
  const data = await getUpdatedQueue(url, queue);

  await saveQueue(data);
  process.exit(0);
};

main();
