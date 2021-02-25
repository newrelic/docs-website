/* eslint-disable no-console */
const fetchDocs = require('./utils/migrate/fetch-docs');
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
const { last, nth } = require('lodash');
const path = require('path');
const { prop } = require('./utils/functional');
const {
  NAV_DIR,
  CONTENT_DIR,
  DICTIONARY_DIR,
  WHATS_NEW_DIR,
  JP_DIR,
  TYPES,
} = require('./utils/constants');
const copyManualEdits = require('./utils/migrate/copy-manual-edits');
const { fetchAllRedirects } = require('./utils/migrate/fetch-redirects');
const fetchJpDocs = require('./utils/migrate/fetch-jp-docs');
const createNavJpStructure = require('./utils/migrate/create-nav-jp-structure');
const writeExternalRedirects = require('./utils/migrate/external-redirects');
const {
  fetchTaxonomyRedirects,
  writeTaxonomyRedirects,
} = require('./utils/migrate/taxonomy-redirects');
const { appendDummyRedirects } = require('./utils/migrate/redirects');
const unified = require('unified');
const rehypeParse = require('rehype-parse');
const toString = require('hast-util-to-string');
const remove = require('unist-util-remove');
const { mergeWith } = require('lodash');

const processor = unified().use(rehypeParse);

const all = (list, fn) => Promise.all(list.map(fn));

const notDummyDocs = ['/docs/new-relic-titanium'];

const isDummyDoc = (doc) => {
  if (notDummyDocs.some((pathname) => doc.docUrl.includes(pathname))) {
    return false;
  }

  const tree = processor.parse(doc.body);

  remove(
    tree,
    (node) => node.tagName === 'h2' && toString(node) === 'For more help'
  );

  const content = toString(tree).trim();

  return (
    Boolean(content.match(/^(dummy|redirect(s|ed|ing)?)\s/i)) ||
    (doc.type === TYPES.BASIC_PAGE && content.length < 100)
  );
};

const runTask = async ({
  label,
  fetch,
  vfile: vfileOptions,
  process,
  onDone,
  redirects = {},
}) => {
  try {
    logger.info(`[${label}] Fetching content`);
    const docs = await fetch();
    const allRedirects = appendDummyRedirects(
      redirects,
      docs.filter(isDummyDoc)
    );

    logger.info(`[${label}] Processing content`);

    const files = await all(docs, async (doc) => {
      const file = toVFile(doc, {
        ...(vfileOptions || {}),
        redirects: allRedirects,
        data: { dummy: isDummyDoc(doc) },
      });

      createDirectories([file]);
      await process(file);

      return file;
    });

    if (onDone) {
      await onDone(files);
    }

    logger.info(`[${label}] Done`);
    return files;
  } catch (e) {
    logger.error(e);
    return [];
  }
};

const runPipeline = (tasks) => Promise.all(tasks.map(runTask));

const run = async () => {
  logger.info('Starting migration');

  try {
    logger.info('Resetting content');
    [CONTENT_DIR, NAV_DIR, DICTIONARY_DIR, JP_DIR].forEach((dir) =>
      rimraf.sync(dir)
    );

    logger.info('Fetching redirects');
    const redirects = await fetchAllRedirects();
    const taxonomyRedirects = await fetchTaxonomyRedirects(redirects);

    const mergedRedirects = Object.fromEntries(
      Object.entries(
        mergeWith({}, redirects, taxonomyRedirects, (value, source) => {
          if (Array.isArray(value)) {
            return value.concat(source);
          }
        })
      ).filter(([url]) => !url.startsWith('/taxonomy'))
    );

    logger.info('Migrating docs');
    const docs = await fetchDocs();
    const fileGroups = await runPipeline([
      {
        label: 'Attribute definitions',
        fetch: fetchAttributeDefinitions,
        vfile: {
          baseDir: DICTIONARY_DIR,
          filename: prop('title'),
          dirname: ({ eventTypes }) => `/events/${eventTypes[0]}`,
        },
        process: convertFile,
      },
      {
        label: 'Event definitions',
        fetch: fetchEventDefinitions,
        vfile: {
          baseDir: DICTIONARY_DIR,
          filename: ({ name }) => `${name}.event-definition`,
          dirname: ({ name }) => `/events/${name}`,
        },
        process: convertFile,
      },
      {
        label: "What's new",
        fetch: fetchWhatsNew,
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
        onDone: saveWhatsNewIds,
      },
      {
        label: 'Japanese Docs',
        fetch: () => fetchJpDocs(docs),
        vfile: {
          baseDir: JP_DIR,
        },
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
      },
      {
        label: 'Docs',
        fetch: () => docs,
        redirects: mergedRedirects,
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
      },
    ]);

    const allDocsFiles = fileGroups.flat();

    const jpFiles = nth(fileGroups, -2);

    const sortedDocsFiles = last(fileGroups)
      .sort(
        (a, b) =>
          parseInt(a.data.doc.order_topic_2 || 0, 10) -
          parseInt(b.data.doc.order_topic_2 || 0, 10)
      )
      .sort(
        (a, b) =>
          parseInt(a.data.doc.order_topic_3 || 0, 10) -
          parseInt(b.data.doc.order_topic_3 || 0, 10)
      )
      .sort(
        (a, b) =>
          parseInt(a.data.doc.order || 0, 10) -
          parseInt(b.data.doc.order || 0, 10)
      );

    logger.info('Creating nav');

    const navFiles = migrateNavStructure(createNavStructure(sortedDocsFiles));

    const jpNavFile = createNavJpStructure(navFiles, jpFiles);

    logger.info('Writing external redirects');
    writeExternalRedirects(
      appendDummyRedirects(
        redirects,
        allDocsFiles
          .filter((file) => file.data.dummy)
          .map((file) => file.data.doc)
      )
    );

    logger.info('Writing taxonomy redirects');
    await writeTaxonomyRedirects(taxonomyRedirects, allDocsFiles);

    logger.info('Saving changes to files');
    createDirectories(allDocsFiles);
    await all(
      allDocsFiles
        .filter((file) => !file.data.dummy)
        .concat(navFiles, jpNavFile),
      (file) => write(file, 'utf-8')
    );

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
  } catch (e) {
    logger.error(e);
  }
};

run();
