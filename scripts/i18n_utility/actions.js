const glob = require('glob');
const fs = require('fs');

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

const listOrphanedFiles = () => {
  const orphanedFiles = getOrphanedFiles();

  console.log(`Found ${orphanedFiles.length} orphaned files.`);
  console.log(JSON.stringify(orphanedFiles, null, 4));
};

const deleteOrphanedFiles = () => {
  const orphanedFiles = getOrphanedFiles();

  orphanedFiles.forEach((file) => {
    console.log(`Deleting: ${file}`);
    fs.unlinkSync(file);
  });
};

module.exports = { getOrphanedFiles, listOrphanedFiles, deleteOrphanedFiles };
