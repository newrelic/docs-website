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
      ? files.filter((file) => path.extname(file.filename) === '.mdx')
      : [];

    const mdxFilesToAdd = mdxFiles
      .filter((file) => file.status !== 'removed')
      .reduce((files, file) => {
        const contents = fs.readFileSync(
          path.join(process.cwd(), file.filename)
        );
        const { data } = frontmatter(contents);
        // if no translate frontmatter or if translate exists and is empty- check that versions of the file don't exist in any locale

        // if translate exists check that versions of the file don't exist in any locale we use but isn't included

        return data.translate && data.translate.length
          ? [...files, { ...file, locales: data.translate }]
          : files;
      }, []);

    const addedMdxFiles = mdxFilesToAdd.reduce((files, file) => {
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

    // if file was deleted, make sure versions don't exist in any locale
    removedMdxFileNames.forEach((fileName) =>
      fs.unlink(path.join(process.cwd(), fileName), (err) => {
        if (err) {
          console.log(`failed to delete ${fileName}`, err);
        }
        console.log(`${fileName} was deleted`);
      })
    );

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

/** Entrypoint. */
const main = async () => {
  checkArgs(3);

  const url = process.argv[2];
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = await loadFromDB(table, key);
  const { locales } = queue.Item;
  const data = await getUpdatedQueue(url, locales);

  await saveToTranslationQueue(key, 'set locales = :slugs', { ':slugs': data });

  process.exit(0);
};

main();
