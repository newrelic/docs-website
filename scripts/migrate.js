const fetchDocs = require('./utils/migrate/fetch-docs');
const fetchDocCount = require('./utils/migrate/fetch-doc-count');
const fetchAttributeDefinitions = require('./utils/migrate/fetch-attribute-definitions');
const fetchEventDefinitions = require('./utils/migrate/fetch-event-definitions');
const fetchWhatsNew = require('./utils/migrate/fetch-whats-new');
const saveWhatsNewIds = require('./utils/migrate/save-whats-new-ids');
const createDirectories = require('./utils/migrate/create-directories');
const convertFile = require('./utils/migrate/convert-file');
const createNavStructure = require('./utils/migrate/create-nav-structure');
const toVFile = require('./utils/migrate/to-vfile');
const logger = require('./utils/logger');
const runCodemod = require('./utils/codemod/run');
const codemods = require('../codemods');
const { write } = require('to-vfile');
const createRawHTMLFiles = require('./utils/migrate/create-raw-html-files');
const migrateNavStructure = require('./utils/migrate/migrate-nav-structure');
const reporter = require('vfile-reporter');
const rimraf = require('rimraf');
const path = require('path');
const { prop } = require('./utils/functional');
const {
  NAV_DIR,
  CONTENT_DIR,
  DICTIONARY_DIR,
  WHATS_NEW_DIR,
} = require('./utils/constants');

const all = (list, fn) => Promise.all(list.map(fn));

const run = async () => {
  logger.normal('Starting migration');

  try {
    logger.normal('Resetting content');
    rimraf.sync(CONTENT_DIR);
    rimraf.sync(NAV_DIR);
    rimraf.sync(DICTIONARY_DIR);

    logger.normal('Fetching JSON');
    const docs = await fetchDocs();
    const attributeDefs = await fetchAttributeDefinitions();
    const eventDefs = await fetchEventDefinitions();
    const whatsNew = await fetchWhatsNew();
    const attributeDefFiles = await all(attributeDefs, (doc) =>
      toVFile(doc, {
        baseDir: DICTIONARY_DIR,
        filename: prop('title'),
        dirname: ({ eventTypes }) => `/events/${eventTypes[0]}`,
      })
    );
    const eventDefFiles = await all(eventDefs, (doc) =>
      toVFile(doc, {
        baseDir: DICTIONARY_DIR,
        filename: ({ name }) => `${name}.event-definition`,
        dirname: ({ name }) => `/events/${name}`,
      })
    );
    const whatsNewFiles = await all(whatsNew, (doc) =>
      toVFile(doc, {
        baseDir: WHATS_NEW_DIR,
        dirname: ({ releaseDateTime }) => {
          const date = releaseDateTime.split(' ')[0];
          const [year, month] = date.split('-');

          return path.join(year, month);
        },
      })
    );
    await saveWhatsNewIds(whatsNewFiles);
    const definitionFiles = attributeDefFiles.concat(eventDefFiles);
    const files = await all(docs, toVFile).then((files) =>
      files.sort((a, b) => a.path.localeCompare(b.path))
    );
    await fetchDocCount(
      files.concat(definitionFiles).concat(whatsNewFiles).length
    );

    logger.normal('Creating directories');
    createDirectories(files.concat(definitionFiles, whatsNewFiles));

    logger.normal('Converting files');
    await all(files.concat(definitionFiles, whatsNewFiles), convertFile);

    logger.normal('Running codemods on .mdx files');
    await all(
      files.filter((file) => file.extname === '.mdx'),
      async (file) => {
        try {
          await runCodemod(file, { codemods });
        } catch (e) {
          // do nothing
        }
      }
    );
    logger.normal('Running codemods on whats new files');
    await all(whatsNewFiles, async (file) => {
      try {
        await runCodemod(file, {
          codemods: [
            require('../codemods/images'),
            require('../codemods/markdownVideos'),
          ],
        });
      } catch (e) {
        // do nothing
      }
    });

    logger.normal('Creating nav structure');
    const navFiles = migrateNavStructure(createNavStructure(files));

    logger.normal('Saving changes to files');
    await all(files.concat(navFiles, definitionFiles, whatsNewFiles), (file) =>
      write(file, 'utf-8')
    );

    // Run `DEBUG=true yarn migrate` to also write a `.html` file right next to
    // the `.mdx` file. This can help us look at the original HTML to compare
    // with the generated markdown to ensure we don't miss edge cases. These
    // files should not be committed.
    if (process.env.DEBUG) {
      logger.normal('[DEBUG] Creating raw HTML files');
      createRawHTMLFiles(files.concat(whatsNewFiles));
    }

    console.error(
      reporter(files.concat(navFiles, whatsNewFiles), { quiet: true })
    );

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err.stack}`);
  }
};

run();
