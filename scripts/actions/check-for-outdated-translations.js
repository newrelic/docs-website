const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const frontmatter = require('@github-docs/frontmatter');

const checkArgs = require('./utils/check-args');
const { prop } = require('../utils/functional');
const { ADDITIONAL_LOCALES } = require('../utils/constants');
// console.log(
// `ACTION NEEDED: Translation without english version found ${filePath.replace(
// `${process.cwd()}/`,
// ''
// )}`
//
const checkForI18nFiles = (fileName, locales) => {
  const i18nPrefix = path.join(process.cwd(), 'src/i18n/content');
  const baseFileName = fileName.replace('src/content/', '');

  return locales
    .map((locale) => {
      const filePath = path.join(i18nPrefix, locale, baseFileName);
      const fileExists = fs.existsSync(filePath);

      return fileExists ? filePath : null;
    })
    .filter(Boolean);
};

/**
 * @param {string} url The API url that is used to fetch files.
 */
const checkOutdatedTranslations = async (url) => {
  try {
    const resp = await fetch(url);
    const files = await resp.json();

    const mdxFiles = files
      ? files.filter((file) => path.extname(file.filename) === '.mdx')
      : [];

    const mdxFilesContent = mdxFiles
      .filter((file) => file.status !== 'removed')
      .reduce((files, file) => {
        const contents = fs.readFileSync(
          path.join(process.cwd(), file.filename)
        );
        const { data } = frontmatter(contents);
        return [...files, { ...file, locales: data.translate || [] }];
      }, []);

    const removedMdxFileNames = mdxFiles
      .filter((f) => f.status === 'removed')
      .map(prop('filename'));

    // TODO: aggregate all files that need to be removed, print output, exit 1 or 0

    // if a locale was removed from the translate frontmatter, we want to remove the translated version of that file.
    mdxFilesContent.forEach((file) => {
      const removedLocales = ADDITIONAL_LOCALES.filter(
        (l) => !file.locales.includes(l)
      );
      if (removedLocales.length > 0) {
        checkForI18nFiles(file, removedLocales);
      }
    });

    removedMdxFileNames.forEach((name) =>
      checkForI18nFiles(name, ADDITIONAL_LOCALES)
    );
  } catch (error) {
    console.log(`[!] Unable to check for outdated translated files`);
    console.log(error);
    process.exit(1);
  }
};

/** Entrypoint. */
const main = async () => {
  checkArgs(3);
  const url = process.argv[2];

  await checkOutdatedTranslations(url);

  process.exit(0);
};

main();
