const fs = require('fs');
const vfileGlob = require('vfile-glob');
const { write } = require('to-vfile');
const rimraf = require('rimraf');

const deletedFiles = [
  'src/content/docs/new-relic-only/tech-writer-style-guide/processes-procedures/clear-cache.mdx',
  'src/content/docs/new-relic-only/basic-style-guide/style-guide-quick-reference/html-cheat-sheet.mdx',
  'src/content/docs/new-relic-only/basic-style-guide/style-guide-quick-reference/lists.mdx',
];

const copyManualEdits = () => {
  return new Promise((resolve) => {
    vfileGlob('./src/manual-edits/**/*').subscribe({
      next: async (file) => {
        file.path = file.path.replace('src/manual-edits', 'src/content');

        if (!fs.existsSync(file.dirname)) {
          fs.mkdirSync(file.dirname, { recursive: true });
        }

        await write(file, 'utf-8');
      },
      complete: () => {
        deletedFiles.forEach((file) => rimraf.sync(file));
        resolve();
      },
    });
  });
};

module.exports = copyManualEdits;
