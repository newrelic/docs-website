'use strict';

import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';

import simpleGit from 'simple-git';
const git = simpleGit();

interface FileRename {
  from: string;
  to: string;
}

/**
 * Method which identifies and returns all orphaned content in the src/i18n docs directories. The return includes files across all locales and contains ancillary content like images or other referenced files, in addition to the mdx content.
 *
 * Orphaned refers to a locale specific file not having an english equivalent.
 */
const getOrphanedFiles = (): string[] => {
  const englishContent = glob.sync(
    `${__dirname}/../../src/content/docs/**/*.*`
  );

  const translatedContent = glob.sync(
    `${__dirname}/../../src/i18n/content/*/docs/**/*.*`
  );

  const orphanedFiles = translatedContent.filter((content) => {
    const normalizedPath = content.replace(
      new RegExp('src/i18n/content/.*/docs'),
      'src/content/docs'
    );

    if (englishContent.includes(normalizedPath)) {
      return false; // not orphaned
    }

    return true;
  });

  return orphanedFiles;
};

/**
 * Method to print orphaned files.
 */
const printOrphanedFiles = (orphanedFilePaths: string[]): void => {
  console.log(`Found ${orphanedFilePaths.length} orphaned files.`);
  console.log(JSON.stringify(orphanedFilePaths, null, 4));
};

/**
 * Method to delete orphaned files.
 */
const deleteOrphanedFiles = (orphanedFilePaths: string[]): void => {
  orphanedFilePaths.forEach((file) => {
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(file);
  });
};

/**
 * Method which parses the rename summary produced by simple-git.
 * The return is an object detailing the original file path, and the new file path.
 *
 * @example rename summary example
 * // input is
 *"src/content/docs/accounts/accounts/{account-maintenance => billing}/change-passwords-user-preferences.mdx"
 *
 * // return is
 * {from: 'src/content/docs/accounts/accounts/account-maintenance/change-passwords-user-preference.mdx', to: 'src/content/docs/accounts/accounts/billing/change-passwords-user-preference.mdx'}
 */
const parseRenameSummary = (renameSummary: string): FileRename => {
  const textWithinBrackets = new RegExp(/{(.*)}/);
  const [pathChange] = renameSummary.match(textWithinBrackets);
  const [fromPathSegment, toPathSegment] = pathChange
    .replace('{', '')
    .replace('}', '')
    .split(' => ');
  const [from, to] = [
    renameSummary
      .replace(textWithinBrackets, fromPathSegment)
      .replace('//', '/'),
    renameSummary.replace(textWithinBrackets, toPathSegment).replace('//', '/'),
  ];

  return { from, to };
};

/**
 * Method which returns simple-git produced summaries (just the name change) for files that have been renamed locally.
 *
 * Renamed refers to explicit renames -- the files that git detects as having been renamed.
 * It may be the case you have functionally renamed a file, but git sees that as an addition & deletion instead. In this instance, you would not see that change listed when you call this method.
 */
const getRenamedFiles = async (): Promise<FileRename[]> => {
  /*
  A single "renamed" file summary.

  DiffSummary {
    changed: 1,
    deletions: 0,
    insertions: 0,
    files: [
      {
        "file": "src/content/docs/accounts/accounts/{account-maintenance => billing}/change-passwords-user-preferences.mdx",
        changes: 0,
        insertions: 0,
        deletions: 0,
        binary: false
      }
    ]
  }
  */
  const renamedFileSummaries = await git.diffSummary([
    'origin/develop',
    '--diff-filter',
    'R',
    '--',
    'src/content/docs',
  ]);

  const renamedFiles = renamedFileSummaries.files.map((summary) => {
    const { from, to } = parseRenameSummary(summary.file);
    return { from, to };
  });

  return renamedFiles;
};

/**
 *
 */
const getRenameChanges = (renamedFiles: FileRename[]): FileRename[] => {
  const i18nRenames: FileRename[] = [];

  renamedFiles.forEach((f) => {
    // TODO: rather than hardcode, we should refer to some central locale code.
    ['jp', 'kr'].forEach((locale) => {
      const localeFromPath = f.from.replace(
        'src/content/docs',
        `src/i18n/content/${locale}/docs`
      );
      const localeToPath = f.to.replace(
        'src/content/docs',
        `src/i18n/content/${locale}/docs`
      );

      if (fs.existsSync(localeFromPath)) {
        // if the file exists, we want to move it. otherwise, skip.
        i18nRenames.push({ from: localeFromPath, to: localeToPath });
      }
    });
  });

  return i18nRenames;
};

const printRenameChanges = (renameChanges: FileRename[]): void => {
  console.log(`${renameChanges.length} files will be moved.`);
  console.log(JSON.stringify(renameChanges, null, 4));
};

const makeRenameChanges = (renameChanges: FileRename[]): void => {
  renameChanges.forEach(async (rename) => {
    fs.mkdirSync(path.dirname(rename.to), { recursive: true });
    console.log(`Moving ${rename.from} to ${rename.to}`);
    await git.mv(rename.from, rename.to);
  });
};

export {
  getOrphanedFiles,
  printOrphanedFiles,
  deleteOrphanedFiles,
  parseRenameSummary,
  getRenamedFiles,
  getRenameChanges,
  printRenameChanges,
  makeRenameChanges,
};

export { FileRename };
