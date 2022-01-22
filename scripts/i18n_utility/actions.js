'use strict';
const glob = require('glob');
const fs = require('fs');

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

const printOrphanedFiles = (orphanedFiles = getOrphanedFiles()) => {
  console.log(`Found ${orphanedFiles.length} orphaned files.`);
  console.log(JSON.stringify(orphanedFiles, null, 4));
};

const deleteOrphanedFiles = (orphanedFiles = getOrphanedFiles()) => {
  orphanedFiles.forEach((file) => {
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(file);
  });
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
        file: 'README.md => README2.md',
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
    const [renamedFrom, renamedTo] = summary.file.split(' => ');
    return { renamedFrom, renamedTo };
  });

  return renamedFiles;
};

const getRenameChanges = async (renamedFiles = getRenamedFiles()) => {
  const i18nRenames = [];

  renamedFiles.forEach((f) => {
    ['ja', 'ko'].forEach((locale) => {
      const localeFromPath = f.renamedFrom.replace(
        'src/content/docs',
        `src/i18n/content/${locale}/docs`
      );
      const localeToPath = f.renamedTo.replace(
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

const printRenameChanges = async (renameChanges = getRenameChanges()) => {
  console.log(`${renameChanges.length} files will be moved.`);
  console.log(JSON.stringify(renameChanges));
};

module.exports = {
  getOrphanedFiles,
  printOrphanedFiles,
  deleteOrphanedFiles,
  getRenamedFiles,
  getRenameChanges,
  printRenameChanges,
};
