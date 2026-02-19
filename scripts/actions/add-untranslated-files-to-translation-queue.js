const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { Command } = require('commander');
const { addFilesToTranslationQueue } = require('./add-files-to-translation-queue');
const { EXCLUSIONS_FILE } = require('./utils/constants');
const { LOCALE_IDS } = require('./utils/constants');
const { getTranslations } = require('./translation_workflow/database');

let repoPath;
let englishDirectoryPath;
let i18nDirectoryPath;
let localeKey;
let locale;
let numberOfFiles;

const getCommandLineOptions = () => {
  const program = new Command();
  program
    .option('-n, --numberOfFiles <number>', 'Number of files to add to translation queue')
    .option(
      '-mt, --machine-translation [value]',
      'Boolean to only send files needing machine translation',
      (value) => {
        // Handle both "-mt" (no value) and "-mt true/false"
        if (value === undefined || value === true) return true;
        if (typeof value === 'string') {
          return value.toLowerCase() === 'true';
        }
        return Boolean(value);
      }
    )
    .option(
      '-l, --locale <locale>',
      'Specifiy specific language to be sent to smartling for translation'
    );
  program.parse(process.argv);
  return program.opts();
};

/**
 * Removes a specified prefix from the beginning of a string, if it exists.
 *
 * @param {string} fullPath - The full path or string from which to remove the prefix.
 * @param {string} prefix - The prefix to remove from the fullPath.
 * @returns {string} The path without the prefix if it was present, or the original path if not.
 */
function removePrefix(fullPath, prefix) {
  if (fullPath.startsWith(prefix)) {
      return fullPath.slice(prefix.length);
  }
  return fullPath; // Return the original path if it doesn't start with the prefix
}

/**
* Determines if a file should be included based on data from an exclusions file
* @param {String[]} fileNames The files to check
* @param {String[]} exclusions The exclusions file
* @returns {String[]} The files that should be included
*/
const excludeFiles = (fileNames) => {
  let yamlData;

  try {
      const fileContents = fs.readFileSync(path.join(process.cwd(), EXCLUSIONS_FILE), 'utf8');
      yamlData = yaml.load(fileContents);
  } catch (e) {
      console.error('Error reading or parsing YAML file:', e);
  }

  // Extract the list of files under desired locale (e.g., fr-FR)
  const filesToExclude = yamlData.excludePath[locale] || [];

  console.log('Files to exclude are:', filesToExclude);

  return fileNames.filter((fileName)=> {
      return !filesToExclude.some((path) => fileName.startsWith(path));
  });
  
};

/**
 * Recursively finds and collects all MDX files within a directory, optionally removing i18n paths.
 *
 * @param {string} dir - The directory to search for MDX files.
 * @param {boolean} iSi18nPath - Indicates whether to adjust paths for i18n (internationalization) by removing i18n segments.
 * @returns {string[]} An array of repository-relative paths to the found MDX files.
 */
function findMdxFiles(dir, iSi18nPath) {
  let mdxFiles = [];

  const entries = fs.readdirSync(dir, {withFileTypes: true});

  entries.forEach ((entry) => {
      const fullPath = path.join(dir, entry.name);
      
      if(entry.isDirectory()) {
          // Recursively search within directories
          mdxFiles = mdxFiles.concat(findMdxFiles(fullPath, iSi18nPath));
      } else if(entry.isFile() && entry.name.endsWith('.mdx')) {
          // Get non-i18n, repoRelative path
          let repoRelativePath = removePrefix(path.join(entry.parentPath, entry.name), repoPath)
          if(iSi18nPath) {
              repoRelativePath = repoRelativePath
                                  .split('i18n/').join('')
                                  .split(localeKey.concat('/')).join('');
          }
          mdxFiles.push(repoRelativePath);
      }
  })

  return mdxFiles;
}

/**
 * Selects up to 'n' files that have not been translated from a list of eligible files.
 *
 * @param {string[]} translatedFiles - An array of file paths that have already been translated or been sent for translation.
 * @param {string[]} filesEligibleForTranslation - An array of file paths eligible for translation.
 * @param {number} n - The maximum number of files to select for translation.
 * @returns {string[]} An array of file paths to be sent for translation, with a maximum length of 'n'.
 */
function getNFileToTranslate(translatedFiles, filesEligibleForTranslation, n) {
  const filesToSendForTranslation = [];

  for (const file of filesEligibleForTranslation) {
      if (!translatedFiles.includes(file)) {
          filesToSendForTranslation.push(file);
      }
      // Stop adding files once the array contains 'n' files
      if (filesToSendForTranslation.length >= n) {
          break;
      }
  }
  return filesToSendForTranslation;
}

/**
 * Main translation queue processing function.
 *
 * This script executes a series of operations to manage file translations, including:
 * 1. Parsing command line options to determine the number of files to process and the desired locale.
 * 2. Identifying the locale key based on the provided locale, setting up directory paths.
 * 3. Recursively locating translated MDX files in the i18n directory.
 * 4. Gathering already translated or in-process files by querying a translations database.
 * 5. Collecting all MDX files from the English content directory.
 * 6. Filtering files for translation based on exclusion lists, number 3, and number 4 above.
 * 7. Selecting a specified number of files needing translation and adding them to the translation queue.
 */
const main = async () => {
  const options = getCommandLineOptions();
  numberOfFiles = options.numberOfFiles || null;
  locale = options.locale || null;

  if (numberOfFiles && locale) {
    try {

      localeKey = Object.keys(LOCALE_IDS).find(
        (key) => LOCALE_IDS[key] === locale
      );
      console.log('localeKey is: ', localeKey);
  
      repoPath = path.join(__dirname, '..', '..').concat('/');
      englishDirectoryPath = path.join(__dirname, '..', '..', 'src', 'content', 'docs');
      i18nDirectoryPath = path.join(__dirname,'..', '..', 'src', 'i18n', 'content', localeKey, 'docs')

      console.log('repoPath is: ', repoPath)
      console.log('englishDirectoryPath is: ', englishDirectoryPath)
      console.log('i18nDirectoryPath is: ', i18nDirectoryPath)

      // Get translated files in local
      let translatedFiles = findMdxFiles(i18nDirectoryPath, true);
  
      // Get files that are already sent for translation from DB
      console.log('making request to translation DB table');
      const queue = await getTranslations({
          locale: locale,
      });
      console.log('request to translation DB table is completed');
  
      queue.forEach((item) => {
          if(!translatedFiles.includes(item.slug)) {
              translatedFiles.push(item.slug);
          }
      });
  
      // get all MDX files from the English content directory
      const allMdxFiles = findMdxFiles(englishDirectoryPath, false);
      // filter files for translation based on exclusion lists
      const filesEligibleForTranslation = excludeFiles(allMdxFiles);
      
  
      const filesToSendForTranslation = getNFileToTranslate(translatedFiles, filesEligibleForTranslation, numberOfFiles);
      console.log('filesToSendForTranslation is: ', filesToSendForTranslation);
   
      await addFilesToTranslationQueue(filesToSendForTranslation, options);

      process.exit(0);

    } catch (e) {
      console.log('error is: ', e);
    }
  }
  process.exit(0);
};

main();
