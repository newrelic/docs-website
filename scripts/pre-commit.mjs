/* eslint-disable no-console */
import { promisify } from 'util';
import { exec as callback_exec } from 'child_process';

const exec = promisify(callback_exec);

let pngImages = [];
let mdxFiles = [];

await exec('git diff --diff-filter=d --cached --name-only', (error, stdout) => {
  if (error) {
    // handle error
  } else if (stdout) {
    const stagedFiles = stdout.split(/[\r\n|\n|\r]/).filter(String);

    pngImages = stagedFiles.filter((file) =>
      file.toLocaleLowerCase().endsWith('.png')
    );
    const pngImagesMessage = `\n\n🚨 Commit failed: 🚨 
      \n\nℹ️  The following images are in a PNG format. 
      \nPlease run \n\n👉 yarn script.sh  \n`;

    if (pngImages.length > 0) {
      console.log(pngImagesMessage);
      pngImages.forEach((img) => {
        console.log(`• 🌠 ${img}`);
      });
      console.log(`\n`);
      process.exit(1);
    }

    // mdxFiles = stagedFiles.filter((file) =>
    //   file.toLocaleLowerCase().endsWith('.mdx')
    // );
    // if (mdxFiles.length > 0) {
    //   console.log('\n\n\n🔎 Verifying MDX files...\n\n\n');
    //   mdxFiles.forEach((file) => {
    //     callback_exec(`node scripts/verify_mdx.js ${file}`);
    //     console.log(file);
    //     process.exit(1);
    //   });
    // }
    // // TODO: turn this back on
    process.exit(0);
    // process.exit(1);
  }
});
