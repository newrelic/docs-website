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
//

const doI18nFilesExist = (fileName, locales) => {
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

const fetchFilesFromGH = (url) => {
  const files = [];
  let nextLink = url;

  while (nextLink) {
    const resp = await fetch(nextLink);
    const chunk = await resp.json();
    files = [...files, ...chunk];
    nextLink = parseLinkHeader(resp.headers.get('Link'));
  }
  
  return files;
}

const parseLink = (entry) => {

};

const parseLinkHeader = (linkHeader) => {
  const links = link.split(',');
  const links2 = links.map(l => l.split(';'));
}
/**
 * @param {string} url The API url that is used to fetch files.
 */
const checkOutdatedTranslations = async (url) => {
  try {
    // TODO: DEAL WITH PAGINATION
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
        return [
          ...files,
          { path: file.filename, locales: data.translate || [] },
        ];
      }, []);

    const removedMdxFileNames = mdxFiles
      .filter((f) => f.status === 'removed')
      .map(prop('filename'));

    // if a locale was removed from the translate frontmatter, we want to remove the translated version of that file.

    const modifiedFiles = mdxFilesContent
      .map((file) => {
        const unsetLocales = ADDITIONAL_LOCALES.filter(
          (l) => !file.locales.includes(l)
        );
        return doI18nFilesExist(file.path, unsetLocales);
      })
      .flat();

    const removedFiles = removedMdxFileNames
      .map((name) => doI18nFilesExist(name, ADDITIONAL_LOCALES))
      .flat();

    const orphanedI18nFiles = [...modifiedFiles, ...removedFiles];

    if (orphanedI18nFiles.length > 0) {
      orphanedI18nFiles.forEach((f) =>
        // TODO: improve output
        console.log(`${f.replace(`${process.cwd()}/`, '')}`)
      );
      process.exit(1);
    }
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
