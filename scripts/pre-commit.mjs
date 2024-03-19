/* eslint-disable no-console */
import { promisify } from 'util';
import { exec as callback_exec } from 'child_process';

const exec = promisify(callback_exec);

let pngImages = [];

await exec('git diff --diff-filter=d --cached --name-only', (error, stdout) => {
  if (error) {
    // handle error
  } else if (stdout) {
    const stagedFiles = stdout.split(/[\r\n|\n|\r]/).filter(String);

    pngImages = stagedFiles.filter((file) =>
      file.toLocaleLowerCase().endsWith('.png')
    );
    const pngImagesMessage = `\n\n🚨 Commit failed: 🚨 
      \n\nℹ️  The following images are not ✨WebP✨ format. 
      \nPlease run \n\n👉 yarn convert-to-webp  \n`;

    if (pngImages.length > 0) {
      console.log(pngImagesMessage);
      pngImages.forEach((img) => {
        console.log(`• 🌠 ${img}`);
      });
      console.log(`\n`);
      process.exit(1);
    }
    process.exit(0);
  }
});
