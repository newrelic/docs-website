const fs = require('fs');
const vfileGlob = require('vfile-glob');
const { write } = require('to-vfile');

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
        resolve();
      },
    });
  });
};

module.exports = copyManualEdits;
