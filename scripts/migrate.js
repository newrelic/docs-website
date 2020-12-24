/* eslint-disable no-console */
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
const { last } = require('lodash');
const path = require('path');
const { prop } = require('./utils/functional');
const {
  NAV_DIR,
  CONTENT_DIR,
  DICTIONARY_DIR,
  WHATS_NEW_DIR,
} = require('./utils/constants');
const copyManualEdits = require('./utils/migrate/copy-manual-edits');
const cliProgress = require('cli-progress');

const createProgressBar = ({ label }) => {
  return new cliProgress.SingleBar(
    {
      format: `${label} {bar} {percentage}% | {value}/{total}`.trim(),
      hideCursor: true,
    },
    cliProgress.Presets.shades_grey
  );
};

const all = (list, fn) => Promise.all(list.map(fn));

const runPipeline = async (
  fetchData,
  { vfile: vfileOptions, process } = {}
) => {
  logger.info('\tfetching data');
  const data = await fetchData();
  const bar = createProgressBar({ label: '' });

  logger.info('\tprocessing');
  bar.start(data.length, 0);
  const files = await all(data, async (doc) => {
    const file = toVFile(doc, vfileOptions || {});

    createDirectories([file]);
    await process(file);

    bar.increment();

    return file;
  });

  bar.stop();

  return files;
};

const run = async () => {
  logger.info('Starting migration');

  try {
    logger.info('Resetting content');
    rimraf.sync(CONTENT_DIR);
    rimraf.sync(NAV_DIR);
    rimraf.sync(DICTIONARY_DIR);

    logger.info('Migrating attribute definitions');
    const attributeDefFiles = await runPipeline(fetchAttributeDefinitions, {
      vfile: {
        baseDir: DICTIONARY_DIR,
        filename: prop('title'),
        dirname: ({ eventTypes }) => `/events/${eventTypes[0]}`,
      },
      process: convertFile,
      label: 'Attribute definitions',
    });

    logger.info('Migrating event definitions');
    const eventDefFiles = await runPipeline(fetchEventDefinitions, {
      vfile: {
        baseDir: DICTIONARY_DIR,
        filename: ({ name }) => `${name}.event-definition`,
        dirname: ({ name }) => `/events/${name}`,
      },
      process: convertFile,
    });

    logger.info('Migrating whats new files');
    const whatsNewFiles = await runPipeline(fetchWhatsNew, {
      vfile: {
        baseDir: WHATS_NEW_DIR,
        dirname: ({ releaseDateTime }) => {
          const date = releaseDateTime.split(' ')[0];
          const [year, month] = date.split('-');

          return path.join(year, month);
        },
      },
      process: async (file) => {
        try {
          convertFile(file);

          await runCodemod(file, {
            codemods: [
              require('../codemods/images'),
              require('../codemods/markdownVideos'),
            ],
          });
        } catch (e) {
          // do nothing
        }
      },
    });

    await saveWhatsNewIds(whatsNewFiles);

    logger.info('Migrating docs');
    const docsFiles = await runPipeline(fetchDocs, {
      process: async (file) => {
        convertFile(file);

        if (file.extname !== '.mdx') {
          return;
        }

        try {
          await runCodemod(file, { codemods });
        } catch (e) {
          // do nothing
        }
      },
    });

    const sortedDocsFiles = docsFiles
      .sort(
        (a, b) =>
          parseInt(a.data.doc.order || 0, 10) -
          parseInt(b.data.doc.order || 0, 10)
      )
      .sort((a, b) => {
        const aTopic = last(a.data.topics);
        const bTopic = last(b.data.topics);
        const getStartedRegex = /^Get(ting)? started/i;
        const troubleshootRegex = /^Troubleshoot(ing)?/i;

        switch (true) {
          case aTopic === bTopic:
            return 1;
          case getStartedRegex.test(aTopic):
          case troubleshootRegex.test(bTopic):
            return -1;
          case getStartedRegex.test(bTopic):
          case troubleshootRegex.test(aTopic):
            return 1;
          default:
            return 0;
        }
      });

    logger.info('Creating nav');
    const navFiles = migrateNavStructure(createNavStructure(sortedDocsFiles));

    const allDocsFiles = docsFiles.concat(
      attributeDefFiles,
      eventDefFiles,
      whatsNewFiles
    );

    logger.info('Saving changes to files');
    createDirectories(allDocsFiles);
    await fetchDocCount(allDocsFiles.length);
    await all(allDocsFiles.concat(navFiles), (file) => write(file, 'utf-8'));

    logger.info('Copying manual edits');
    await copyManualEdits();

    // Run `DEBUG=true yarn migrate` to also write a `.html` file right next to
    // the `.mdx` file. This can help us look at the original HTML to compare
    // with the generated markdown to ensure we don't miss edge cases. These
    // files should not be committed.
    if (process.env.DEBUG) {
      logger.info('[DEBUG] Creating raw HTML files');
      createRawHTMLFiles(allDocsFiles);
    }

    console.error(reporter(allDocsFiles.concat(navFiles), { quiet: true }));

    logger.success('Migration complete!');
  } catch (err) {
    logger.error(`Error running migration: ${err.stack}`);
  }
};

run();
