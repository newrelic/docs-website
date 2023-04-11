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
    const pngImagesMessage = `\n\n\n\x1b[45m Commit failed:\x1b[0m 
      \n\n\nℹ️  The following images are in a PNG format. 
      \nPlease convert the images to ✨WebP✨ format by running \x1b[100m\x1b[96m yarn script.sh \x1b[0m \n`;
    if (pngImages.length > 0) {
      console.log(pngImagesMessage);
      pngImages.forEach((img) => {
        console.log(`• \x1b[95m ${img} \x1b[0m`);
      });
      console.log(`\n`);
      process.exit(1);
    }

    mdxFiles = stagedFiles.filter((file) =>
      file.toLocaleLowerCase().endsWith('.mdx')
    );
    // console.log(mdxFiles);
  }
  process.exit(0);
});
