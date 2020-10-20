const fetchDocs = require('./utils/migrate/fetch-docs');
const createDirectories = require('./utils/migrate/create-directories');
const convertFile = require('./utils/migrate/convert-file');
const createIndexPages = require('./utils/migrate/create-index-pages');
const createNavStructure = require('./utils/migrate/create-nav-structure');
const toVFile = require('./utils/migrate/to-vfile');
const logger = require('./utils/logger');
const runCodemod = require('./utils/codemod/run');
const { write } = require('to-vfile');
const createRawHTMLFiles = require('./utils/migrate/create-raw-html-files');
const reporter = require('vfile-reporter');

const all = (list, fn) => Promise.all(list.map(fn));

const run = async () => {
  logger.normal('Starting migration');

  try {
    logger.normal('Fetching JSON');
    const docs = await fetchDocs();
    const files = await all(docs, toVFile);

    logger.normal('Creating directories');
    createDirectories(files);

    logger.normal('Converting files');
    await all(files, convertFile);

    logger.normal('Running codemods on .mdx files');
    await all(
      files.filter((file) => file.extname === '.mdx'),
      async (file) => {
        try {
          await runCodemod(file);
        } catch (e) {
          // do nothing
        }
      }
    );

    logger.normal('Creating index pages');
    const indexFiles = createIndexPages(files);

    logger.normal('Creating nav structure');
    const navFiles = createNavStructure(files);

    logger.normal('Saving changes to files');
    await all(files.concat(indexFiles, navFiles), (file) =>
      write(file, 'utf-8')
    );

    // Run `DEBUG=true yarn migrate` to also write a `.html` file right next to
    // the `.mdx` file. This can help us look at the original HTML to compare
    // with the generated markdown to ensure we don't miss edge cases. These
    // files should not be committed.
    if (process.env.DEBUG) {
      logger.normal('[DEBUG] Creating raw HTML files');
      createRawHTMLFiles(files);
    }

    console.error(reporter(files, { quiet: true }));

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err.stack}`);
  }
};

run();
