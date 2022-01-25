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

const printOrphanedFiles = (orphanedFilePaths: string[]): void => {
  console.log(`Found ${orphanedFilePaths.length} orphaned files.`);
  console.log(JSON.stringify(orphanedFilePaths, null, 4));
};

const deleteOrphanedFiles = (orphanedFilePaths: string[]): void => {
  orphanedFilePaths.forEach((file) => {
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(file);
  });
};

const parseRenameSummary = (renameSummary: string): FileRename => {
  const textWithinBrackets = new RegExp(/{(.*)}/);
  const [pathChange] = renameSummary.match(textWithinBrackets);
  const [fromPathSegment, toPathSegment] = pathChange
    .replace('{', '')
    .replace('}', '')
    .split(' => ');
  const [from, to] = [
    renameSummary.replace(textWithinBrackets, fromPathSegment),
    renameSummary.replace(textWithinBrackets, toPathSegment),
  ];

  return { from, to };
};

const getRenamedFiles = async (): Promise<FileRename[]> => {
  /*
  A single renamed file summary.

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
    'develop',
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
  getRenamedFiles,
  getRenameChanges,
  printRenameChanges,
  makeRenameChanges,
};

export type {
  FileRename
}
