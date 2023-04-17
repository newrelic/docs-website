#!/usr/bin/env node
/* eslint-disable no-console */

import { rm, readFile, writeFile } from 'fs/promises';
import { glob } from 'glob10';
// installed with an alias because v10 conflicts with jest dependencies
import meow from 'meow';
import webp from 'webp-converter';
import { promisify } from 'util';
import { exec as callback_exec } from 'child_process';

const cli = meow(
  `
	Usage
	  $ yarn convert-to-webp <flag>

	Options
	  --global, -g  run on all PNGs

`,
  {
    importMeta: import.meta,
    flags: {
      global: {
        type: 'boolean',
        alias: 'g',
      },
    },
  }
);

const exec = promisify(callback_exec);

const stagedFiles = (
  await exec('git diff --diff-filter=d --cached --name-only')
).stdout
  .split(/[\r\n|\n|\r]/)
  .filter(String);

const stagedPNGs = stagedFiles.filter((file) =>
  file.toLocaleLowerCase().endsWith('.png')
);
const stagedMDs = stagedFiles.filter((file) =>
  /\.mdx?$/.test(file.toLocaleLowerCase())
);

const allPNGs = await glob('**/*.png');
const allMDsAndJSs = await glob('**/*.{md,mdx,js}');

const pngsToConvert = cli.flags.global ? allPNGs : stagedPNGs;
const mdToConvert = cli.flags.global ? allMDsAndJSs : stagedMDs;

const updateMarkdownReferences = async (mdArray) => {
  console.log(`⏳  Checking references in ${mdArray.length} markdown & JS files`)
  for (const file of mdArray) {
    const imgImportRegEx = /(?:(\(.+)\.png|(import.*from .+)\.png)/g;
    const contents = await readFile(file, { encoding: 'utf8' });
    if (!imgImportRegEx.test(contents)) {
      continue;
    }
    const newContents = contents.replaceAll(imgImportRegEx, '$1$2.webp');
    await writeFile(file, newContents).then(() =>
      console.log(`✨  Updated image reference(s) in \x1b[33m${file}\x1b[0m`)
    );
  }
};

const convertPNGs = async (pngArray) => {
  const swapExtension = (fullPath) => {
    const pathParts = fullPath.split('.');

    return pathParts.slice(0, -1).concat('webp').join('.');
  };

  for (const pngPath of pngArray) {
    const webpPath = swapExtension(pngPath);
    await webp
      .cwebp(pngPath, webpPath)
      .then(() => rm(pngPath))
      .then(() =>
        console.log(`✨  Converted \x1b[33m${pngPath}\x1b[0m to ✨WebP✨`)
      );
  }
};

await convertPNGs(pngsToConvert);
updateMarkdownReferences(mdToConvert);
