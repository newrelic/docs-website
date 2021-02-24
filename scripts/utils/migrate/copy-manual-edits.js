const fs = require('fs');
const vfileGlob = require('vfile-glob');
const { write } = require('to-vfile');
const rimraf = require('rimraf');

const deletedFiles = [
  'src/content/docs/new-relic-only/tech-writer-style-guide/processes-procedures/clear-cache.mdx',
  'src/content/docs/new-relic-only/basic-style-guide/style-guide-quick-reference/html-cheat-sheet.mdx',
  'src/content/docs/new-relic-only/tech-writer-style-guide/processes-procedures/checklist-public-beta-or-ga.mdx',
  'src/content/docs/new-relic-only/tech-writer-style-guide/processes-procedures/hide-or-restrict-content.mdx',
  'src/content/docs/new-relic-only/tech-writer-style-guide/processes-procedures/translation-process.mdx',
  'src/content/docs/release-notes/agent-release-notes/agent-sdk-release-notes/agent-sdk-016.mdx',
  'src/content/docs/release-notes/agent-release-notes/agent-sdk-release-notes/agent-sdk-0161.mdx',
];

const copyManualEdits = () => {
  return new Promise((resolve) => {
    vfileGlob('./src/manual-edits/**/*').subscribe({
      next: async (file) => {
        file.path = file.path.replace('src/manual-edits', 'src');

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
