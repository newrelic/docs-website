const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');

const {
  getTranslations,
  addTranslation,
  deleteTranslation,
} = require('./translation_workflow/database');
const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');

const STATUS = {
  PENDING: 'PENDING',
};

const LOCALE_IDS = {
  jp: 'ja-JP',
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
    ? data.translate.map((locale) => ({
        ...prFile,
        locale: LOCALE_IDS[locale],
      }))
    : [];
};

const removedFiles = (prFiles) =>
  prFiles.filter((file) => file.status === 'removed').map(prop('filename'));

/** Entrypoint. */
const main = async () => {
  checkArgs(3);
  const url = process.argv[2];

  const queue = await getTranslations({ status: STATUS.PENDING });

  const prFileData = await fetchPaginatedGHResults(
    url,
    process.env.GITHUB_TOKEN
  );

  const changedMdxFileData = prFileData
    .filter((file) => path.extname(file.filename) === '.mdx')
    .filter((f) => f.status !== 'removed');

  const allLocalizedFileData = changedMdxFileData.flatMap(getLocalizedFileData);
  const fileDataToAddToQueue = translationDifference(
    queue,
    allLocalizedFileData
  );

  await Promise.all(
    fileDataToAddToQueue.map(({ filename, locale }) =>
      addTranslation({ slug: filename, status: STATUS.PENDING, locale })
    )
  );

  const translationIdsToRemove = slugIntersection(
    queue,
    removedFiles(prFileData)
  ).map(prop('id'));

  await Promise.all(translationIdsToRemove.map(deleteTranslation));

  process.exit(0);
};

main();
