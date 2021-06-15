const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const frontmatter = require('@github-docs/frontmatter');

const { saveToTranslationQueue } = require('./utils/save-to-db');
const loadFromDB = require('./utils/load-from-db');
const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');

/**
 * @param {string} url The API url that is used to fetch files.
 * @param {Object<string, string[]>} queue The queue from DynamoDB.
 * @returns {Promise<Object<string, string[]>>} An updated queue.
 */
const getUpdatedQueue = async (url, queue) => {
  try {
    const resp = await fetch(url);
    const files = await resp.json();

    const mdxFiles = files
      ? files
          .filter((file) => path.extname(file.filename) === '.mdx')
          .filter((file) => file.status !== 'removed')
          .reduce((files, file) => {
            const contents = fs.readFileSync(
              path.join(process.cwd(), file.filename)
            );
            const { data } = frontmatter(contents);

            return data.translate && data.translate.length
              ? [...files, { ...file, locales: data.translate }]
              : files;
          }, [])
      : [];

    const addedMdxFiles = mdxFiles.reduce((files, file) => {
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

    const queueFiles =
      Object.entries(queue).length !== 0 ? Object.entries(queue) : [];

    return queueFiles
      .map(([locale, files]) => [
        locale,
        files ? files.filter((f) => !removedMdxFileNames.includes(f)) : [],
      ])
      .reduce(
        (acc, [locale, filenames]) => ({
          ...acc,
          [locale]: [...new Set(filenames.concat(acc[locale] || []))],
        }),
        addedMdxFiles
      );
  } catch (error) {
    console.log(`[!] Unable to get updated queue`);
    console.log(error);
    process.exit(1);
  }
};

/**
 * Entrypoint.
 *
 * @param {string} url
 */
const main = async (url) => {
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const { locales } = queue.Item;
  const data = await getUpdatedQueue(url, locales);

  await saveToTranslationQueue(key, 'set locales = :slugs', { ':slugs': data });

  // If we are in a CI environment, return a success code
  if (process.env.CI) {
    process.exit(0);
  }
};

// Only run this function in a CI environment (when called as a node script)
if (process.env.CI) {
  // Ensure that we have 3 arguments (the last being a URL)
  checkArgs(3);

  // Call the entrypoint function with the URL
  main(process.argv[2]);
}

// Export the entrypoint function for testing
module.exports = main;
