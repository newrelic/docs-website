#!/usr/bin/env node
/* eslint-disable no-console */

import { rm, readFile, writeFile } from 'fs/promises';
// installed with an alias because v10 conflicts with jest dependencies
import { glob } from 'glob10';
import { Command } from 'commander';
import webp from 'webp-converter';
import { promisify } from 'util';
import { exec as callback_exec } from 'child_process';

const program = new Command();
program
  .description('Convert staged PNG and JPG images to WebP.')
  .option(
    '-g, --global',
    'run on all images in the repo, not just staged images'
  )
  .parse();
const options = program.opts();
const runGlobally = Boolean(options.global);

const exec = promisify(callback_exec);

const stagedFiles = (
  await exec('git diff --diff-filter=d --cached --name-only')
).stdout
  .split(/[\r\n|\n|\r]/)
  .filter(String);

const imgExtensions = ['jpg', 'jpeg', 'png'];
const imgRegex = new RegExp(`\.(?:${imgExtensions.join('|')})$`);

const stagedImages = stagedFiles.filter((file) =>
  imgRegex.test(file.toLocaleLowerCase())
);
const stagedMDs = stagedFiles.filter((file) =>
  /\.mdx?$/.test(file.toLocaleLowerCase())
);

const allImages = await glob(`**/*.{${imgExtensions.join(',')}}`);
const allMDsAndJSs = await glob('src/**/*.{md,mdx,js}');

const imagesToConvert = runGlobally ? allImages : stagedImages;
const mdToConvert = runGlobally ? allMDsAndJSs : stagedMDs;

const updateMarkdownReferences = async (mdArray) => {
  const imgImportRegEx = new RegExp(
    // prettier-ignore
    `(?:(\\(.+)\\.(?:${imgExtensions.join('|')})|(import.*from .+)\\.(?:${imgExtensions.join('|')}))`,
    'g'
  );

  console.log(
    `⏳  Checking references in ${mdArray.length} markdown & JS files`
  );

  for (const file of mdArray) {
    const contents = await readFile(file, { encoding: 'utf8' });
    if (!imgImportRegEx.test(contents)) {
      continue;
    }
    const newContents = contents.replaceAll(imgImportRegEx, '$1$2.webp');
    await writeFile(file, newContents)
      .then(() =>
        console.log(`✨  Updated image reference(s) in \x1b[33m${file}\x1b[0m`)
      )
      .catch((err) => {
        console.log(
          `😵  Failed trying to update reference(s) in \x1b[33m${file}\x1b[0m:`
        );
        console.log(err);
        process.exitCode = 1;
      });
  }
};

const convertImages = async (imageArray) => {
  console.log(`⏳  Converting ${imageArray.length} images`);
  for (const imagePath of imageArray) {
    const webpPath = swapExtension(imagePath);
    await webp
      .cwebp(imagePath, webpPath)
      .then(() => rm(imagePath))
      .then(() =>
        console.log(`✨  Converted \x1b[33m${imagePath}\x1b[0m to ✨WebP✨`)
      )
      .catch((err) => {
        console.log(
          `😵  Failed trying to convert \x1b[33m${imagePath}\x1b[0m:`
        );
        console.log(err);
        process.exitCode = 1;
      });
  }
};

const swapExtension = (fullPath) => {
  const pathParts = fullPath.split('.');
  return pathParts.slice(0, -1).concat('webp').join('.');
};

await convertImages(imagesToConvert);
updateMarkdownReferences(mdToConvert);
