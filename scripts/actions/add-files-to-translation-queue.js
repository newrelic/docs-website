const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const frontmatter = require('@github-docs/frontmatter');

const saveToDB = require('./utils/save-to-db');
const loadFromDB = require('./utils/load-from-db');
const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');

/**
 * @param {string} url The API url that is used to fetch files.
 * @param {Object<string, string[]>} queue The queue from DynamoDB.
 * @returns {Promise<Object<string, string[]>>} An updated queue.
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

/** Entrypoint. */
const main = async () => {
  checkArgs(3);

  const url = process.argv[2];
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const data = await getUpdatedQueue(url, queue);

  await saveToDB(table, key, 'set locales = :slugs', { ':slugs': data });

  process.exit(0);
};

main();
