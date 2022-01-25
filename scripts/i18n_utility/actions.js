'use strict';
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const simpleGit = require('simple-git');
const git = simpleGit();

const getOrphanedFiles = () => {
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

const printOrphanedFiles = (orphanedFiles) => {
  console.log(`Found ${orphanedFiles.length} orphaned files.`);
  console.log(JSON.stringify(orphanedFiles, null, 4));
};

const deleteOrphanedFiles = (orphanedFiles) => {
  orphanedFiles.forEach((file) => {
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(file);
  });
};

const parseRenameSummary = (renameSummary) => {
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

const getRenamedFiles = async () => {
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

const getRenameChanges = (renamedFiles) => {
  const i18nRenames = [];

  renamedFiles.forEach((f) => {
    // TODO: rather than hardcode, we should refer to some central locale code.
    ['jp', 'ko'].forEach((locale) => {
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

const printRenameChanges = (renameChanges) => {
  console.log(`${renameChanges.length} files will be moved.`);
  console.log(JSON.stringify(renameChanges, null, 4));
};

/**
 *
 * @param {Object[]} renameChanges
 */
const makeRenameChanges = (renameChanges) => {
  renameChanges.forEach(async (rename) => {
    fs.mkdirSync(path.dirname(rename.to), { recursive: true });
    console.log(`Moving ${rename.from} to ${rename.to}`);
    await git.mv(rename.from, rename.to);
  });
};

module.exports = {
  getOrphanedFiles,
  printOrphanedFiles,
  deleteOrphanedFiles,
  getRenamedFiles,
  getRenameChanges,
  printRenameChanges,
  makeRenameChanges,
};
