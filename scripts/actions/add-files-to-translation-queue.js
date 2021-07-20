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
const {
  deleteTranslation,
  deleteTranslationsJobsRecords,
} = require('./translation_workflow/database');

const addTranslationToQueue = (jobId) => (file) =>
  addTranslation(file).then((tr) => addTranslationsJobsRecord(tr.id, jobId));

const removeTranslationFromQueue = (jobId) => (translationId) =>
  Promise.all([
    deleteTranslation(translationId),
    deleteTranslationsJobsRecords(jobId), // This seems to delete all entries for a particular job id, we need to update it to also take an optional translation id as well
  ]);

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

const translationDifference = (pendingFiles, prChanges) =>
  prChanges.filter(
    (file) =>
      !pendingFiles.find(
        (pendingFile) =>
          file.filename === pendingFile.slug &&
          file.locale === pendingFile.locale
      )
  );

const slugIntersection = (pendingFiles, filesToRemove) =>
  pendingFiles.filter((file) => filesToRemove.includes(file.slug));

const getLocalizedFileData = (prFile) => {
  const contents = fs.readFileSync(path.join(process.cwd(), prFile.filename));
  const { data } = frontmatter(contents);
  return data.translate
    ? data.translate.map((locale) => ({ ...prFile, locale }))
    : [];
};

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
      'src/content/docs/agents/c-sdk/get-started/c-sdk-compatibility-requirements.mdx',
  },
  {
    id: '4',
    job_id: 'j1',
    status: STATUS.PENDING,
    locale: 'jp',
    slug:
      'src/content/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code.mdx',
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
      'src/content/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code.mdx',
    status: 'modified',
    additions: 32,
    deletions: 9,
    changes: 41,
  },
];

const removedFiles = (prFiles) =>
  prFiles.filter((file) => file.status === 'removed').map(prop('filename'));

/** Entrypoint. */
const main = async () => {
  //  checkArgs(3);

  const url =
    'https://api.github.com/repos/newrelic/docs-website/pulls/3032/files'; // process.argv[2];
  const table = 'TranslationQueues';
  const key = { type: 'to_translate' };
  const pendingJobId = 1;

  const queue = getPendingQueue();
  const prChanges = getPRChanges()
    .filter((file) => path.extname(file.filename) === '.mdx')
    .filter((f) => f.status !== 'removed');

  const translationsInPR = prChanges.flatMap(getLocalizedFileData);
  const filesToQueue = translationDifference(queue, translationsInPR);
  const removedFiles = removedFiles(prChanges);
  const translationIdsToRemove = slugIntersection(
    queue,
    removedFiles(prChanges)
  ).map(prop('id'));

  await Promise.all(filesToQueue.map(addTranslationToQueue(pendingJobId)));
  await Promise.all(
    translationIdsToRemove.map(removeTranslationFromQueue(pendingJobId))
  );

  // ADD TO DATABASE

  //  const { locales } = queue.Item;
  //  const data = await getUpdatedQueue(url, locales);

  // await saveToTranslationQueue(key, 'set locales = :slugs', { ':slugs': data });

  process.exit(0);
};

main();
