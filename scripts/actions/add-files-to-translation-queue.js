const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');

// const { connection } = require('./translation_workflow/db_connection');
/**
 * const {
  getTranslations,
  addTranslation,
  getJobs,
  addTranslationsJobsRecord,
  STATUS,
} = require('./translation_workflow/database');
 **/

const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const { saveToTranslationQueue } = require('./utils/save-to-db');
const loadFromDB = require('./utils/load-from-db');
const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');

const addtranslationtoqueue = (jobid) => (file) =>
  addtranslation(file).then((tr) => addtranslationsjobsrecord(tr.id, jobid));

const getpendingjob = () => getjobs({ status: status.pending });

const addnewtranslation = (jobid) => async (translation) => {
  const newentry = await addtranslation(translation);
  await addtranslationsjobsrecord(newentry.id, jobid);
};

const removetranslation = (jobid) => async (slug) => {};

const STATUS = {
  PENDING: 0,
};

/**
 * Updates to make:
 * Grab PR changes
 * Grab `pending` translations
 * Add the difference to the translations table with the status `pending`
 * Add the new translations to the `pending` job via the pages_jobs table
 *
 * For removed translations:
 * Delete removed translations
 * Delete linking pages_jobs entry
 **/

/**
 * @param {string} url The API url that is used to fetch files.
 * @param {Object<string, string[]>} queue The queue from DynamoDB.
 * @returns {Promise<Object<string, string[]>>} An updated queue.
 */
const getUpdatedQueue = async (url, queue) => {
  try {
    const files = await fetchPaginatedGHResults(url, process.env.GITHUB_TOKEN);

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

        return data.translate && data.translate.length
          ? [...files, { ...file, locales: data.translate }]
          : files;
      }, []);

    // need to get pending files
    // need to get pages in the current job

    // These are the files to add to the queue
    const addedMdxFiles = mdxFilesToAdd.reduce((files, file) => {
      return file.locales.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: [...(acc[locale] || []), file.filename],
        }),
        files
      );
    }, {});

    // These will need to be removed from the db
    const removedMdxFileNames = mdxFiles
      .filter((f) => f.status === 'removed')
      .map(prop('filename'));

    // These are already in the database
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

const getSlugDifference = (pendingItems, prChanges) =>
  prChanges.filter(
    (file) =>
      !pendingItems.find((pendingFile) => file.filename === pendingFile.slug)
  );

const getPendingQueue = () => [
  {
    id: '1',
    job_id: 'j1',
    status: STATUS.PENDING,
    locale: 'jp',
    slug:
      'src/content/docs/accounts/accounts-maintenance/change-password-user-preferences.mdx',
  },
  {
    id: '2',
    job_id: 'j1',
    status: STATUS.PENDING,
    locale: 'jp',
    slug: 'src/content/jp/docs/agents/c-sdk/get-started/introduction-c-sdk.mdx',
  },
  {
    id: '3',
    job_id: 'j1',
    status: STATUS.PENDING,
    locale: 'jp',
    slug:
      'src/docs/agents/c-sdk/get-started/c-sdk-compatibility-requirements.mdx',
  },
  {
    id: '4',
    job_id: 'j1',
    status: STATUS.PENDING,
    locale: 'kr',
    slug:
      'src/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code.mdx',
  },
];

const getPRChanges = () => [
  {
    sha: '7b7fcc0d107f5f060412b0f06d06f0829e9f07a7',
    filename: '.prettierrc.js',
    status: 'modified',
    additions: 1,
    deletions: 0,
    changes: 1,
  },
  {
    sha: 'cb1d31cea66c936d796abde0a50370829f4816b6',
    filename:
      'scripts/actions/__tests__/send-and-update-translation-queue.test.js',
    status: 'added',
    additions: 23,
    deletions: 0,
    changes: 23,
  },
  {
    sha: 'cb985ca941c8fbb26f903541b8bbc1c75d8ae779',
    filename:
      'src/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code.mdx',
    status: 'modified',
    additions: 32,
    deletions: 9,
    changes: 41,
  },
];

/** Entrypoint. */
const main = async () => {
  //  checkArgs(3);

  const url =
    'https://api.github.com/repos/newrelic/docs-website/pulls/3032/files'; // process.argv[2];
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };

  const queue = getPendingQueue();
  const prChanges = getPRChanges();
  console.dir(getSlugDifference(queue, prChanges));
  const translationsToAdd = getSlugDifference(queue, prChanges);
  // ADD TO DATABASE

  //  const { locales } = queue.Item;
  //  const data = await getUpdatedQueue(url, locales);

  // await saveToTranslationQueue(key, 'set locales = :slugs', { ':slugs': data });

  process.exit(0);
};

main();
