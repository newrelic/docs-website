const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const frontmatter = require('@github-docs/frontmatter');
const {
  getTranslations,
  addTranslation,
  deleteTranslation,
} = require('./translation_workflow/database');
const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');
const { LOCALE_IDS, EXCLUSIONS_FILE } = require('./utils/constants');

const STATUS = {
  PENDING: 'PENDING',
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

const humanTranslatedProjectID = process.env.HUMAN_TRANSLATION_PROJECT_ID;
const machineTranslatedProjectID = process.env.MACHINE_TRANSLATION_PROJECT_ID;

/**
 * Loads the Exclusions yaml file and converts it to a JSON object.
 * @returns {Object} The Exclusions yaml file as a JSON object.
 */
const getExclusions = () => {
  return yaml.load(fs.readFileSync(path.join(process.cwd(), EXCLUSIONS_FILE)));
};

/**
 * Determines if a file should be included based on data from an exclusions file
 * @param {Object[]} fileData The files to check
 * @param {Object[]} exclusions The exclusions file
 * @returns {Object[]} The files that should be included
 */
const excludeFiles = (fileData, exclusions) => {
  return fileData.filter(({ filename, locale, contentType }) => {
    const localeKey = Object.keys(LOCALE_IDS).find(
      (localeKey) => LOCALE_IDS[localeKey] === locale
    );
    return (
      !exclusions.excludePath[localeKey]?.some((path) =>
        filename.startsWith(path)
      ) && !exclusions.excludeType[localeKey]?.some((type) => contentType === type)
    );
  });
};

/**
 * Determines if a particular locale should be human or machine translated based on the files frontmatter.
 *
 * @param {String[]} translateFM
 * @returns {Function => String} projectId
 */

const getProjectId = (translateFM) => (locale) => {
  return Array.isArray(translateFM) && translateFM.includes(locale)
    ? humanTranslatedProjectID
    : machineTranslatedProjectID;
};

const getLocalizedFileData = (prFile) => {
  const contents = fs.readFileSync(path.join(process.cwd(), prFile.filename));
  const { data } = frontmatter(contents);
  const checkLocale = getProjectId(data.translate);
  const contentType = data.type;

  return Object.keys(LOCALE_IDS).map((locale) => ({
    ...prFile,
    contentType,
    locale: LOCALE_IDS[locale],
    project_id: checkLocale(locale),
  }));
};

const removedFiles = (prFiles) =>
  prFiles.filter((file) => file.status === 'removed').map(prop('filename'));

/** Entrypoint. */
const main = async () => {
  checkArgs(3);
  const url = process.argv[2];

  const queue = await getTranslations({
    status: STATUS.PENDING,
  });
  const prFileData = await fetchPaginatedGHResults(
    url,
    process.env.GITHUB_TOKEN
  );

  const changedMdxFileData = prFileData
    .filter((file) => path.extname(file.filename) === '.mdx')
    .filter((f) => f.status !== 'removed');
  const exclusions = await getExclusions();
  const allLocalizedFileData = changedMdxFileData.flatMap(getLocalizedFileData);
  const includedFiles = excludeFiles(allLocalizedFileData, exclusions);

  const fileDataToAddToQueue = translationDifference(queue, includedFiles);

  await Promise.all(
    fileDataToAddToQueue.map(({ filename, locale, project_id }) =>
      addTranslation({
        slug: filename,
        status: STATUS.PENDING,
        locale,
        project_id,
      })
    )
  );

  const translationIdsToRemove = slugIntersection(
    queue,
    removedFiles(prFileData)
  ).map(prop('id'));

  await Promise.all(translationIdsToRemove.map(deleteTranslation));

  process.exit(0);
};

if (require.main === module) {
  main();
}

module.exports = {
  getProjectId,
  excludeFiles,
  getLocalizedFileData,
};
