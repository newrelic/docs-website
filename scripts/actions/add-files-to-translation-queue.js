const fs = require('fs');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');
const { Command } = require('commander');
const glob = require('glob');
const {
  getTranslations,
  addTranslation,
} = require('./translation_workflow/database');
const { fetchPaginatedGHResults } = require('./utils/github-api-helpers');
const { prop } = require('../utils/functional');
const { LOCALE_IDS } = require('./utils/constants');
const { getExclusions } = require('./utils/helpers');

const STATUS = {
  PENDING: 'PENDING',
};

// Sets up commander to use input arguments for this scripts from the CLI or GitHub Actions - CM
const program = new Command();
program
  .option('-u, --url <url>', 'url to PR of file changes')
  .option(
    '-d, --directory <directory>',
    'directory of files to be queued for translation'
  )
  .option(
    '-mt, --machine-translation',
    'Boolean to only send files needing machine translation'
  );
program.parse(process.argv);
const options = program.opts();

const translationDifference = (pendingFiles, prChanges) =>
  prChanges.filter(
    (file) =>
      !pendingFiles.find(
        (pendingFile) =>
          file.filename === pendingFile.slug &&
          file.locale === pendingFile.locale
      )
  );

const humanTranslatedProjectID = 'HT_ID';
const machineTranslatedProjectID = 'MT_ID';

/**
 * Determines if a file should be included based on data from an exclusions file
 * @param {Object[]} fileData The files to check
 * @param {Object[]} exclusions The exclusions file
 * @returns {Object[]} The files that should be included
 */
const excludeFiles = (fileData) => {
  const exclusions = getExclusions();

  return fileData.filter(({ filename, locale, contentType }) => {
    return (
      !exclusions.excludePath[locale]?.some((path) =>
        filename.startsWith(path)
      ) && !exclusions.excludeType[locale]?.some((type) => contentType === type)
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

const getLocalizedFileData = (mdxFile) => {
  const contents = fs.readFileSync(path.join(process.cwd(), mdxFile));
  const { data } = frontmatter(contents);
  const checkLocale = getProjectId(data.translate);
  const contentType = data.type;

  return Object.keys(LOCALE_IDS).map((locale) => ({
    filename: mdxFile,
    contentType,
    locale: LOCALE_IDS[locale],
    project_id: checkLocale(locale),
  }));
};

/** Entrypoint. */
const main = async () => {
  // These come from the CLI input when using the script
  const url = options.url || null;
  const directory = options.directory || null;
  const machineTranslation = options.machineTranslation || false;

  let mdxFileData;

  if (url) {
    const prFileData = await fetchPaginatedGHResults(
      url,
      process.env.GITHUB_TOKEN
    );

    mdxFileData = prFileData
      .filter((file) => path.extname(file.filename) === '.mdx')
      .filter((f) => f.status !== 'removed')
      .map(prop('filename'));
  } else if (directory) {
    const directoryPath = path.join(directory, '/**/*.mdx');
    mdxFileData = glob.sync(directoryPath);
  }

  const allLocalizedFileData = mdxFileData.flatMap(getLocalizedFileData);

  const filesToTranslate = machineTranslation
    ? allLocalizedFileData.filter(
        ({ project_id }) => project_id === machineTranslatedProjectID
      )
    : allLocalizedFileData;

  const includedFiles = excludeFiles(filesToTranslate);
  const queue = await getTranslations({
    status: STATUS.PENDING,
  });
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
