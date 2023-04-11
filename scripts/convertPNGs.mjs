#!/usr/bin/env node
import glob from 'glob';
import webp from 'webp-converter';

const pngs = await glob('**/*.png');

const swapExtension = (fullPath) => {
  const pathParts = fullPath.split('.');

  return pathParts.slice(0, -1).concat('webp').join('.');
};

for (const pngPath of pngs) {
  webp.cwebp(pngPath, swapExtension(pngPath));
}
