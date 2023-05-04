#! /usr/bin/env node

import frontmatter from 'front-matter';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob10';

import getAgentName from '../src/utils/getAgentName.js';

const generateReleaseNoteObject = async (filePath) => {
  const file = await readFile(filePath, { encoding: 'utf8' });
  const slug = slugify(filePath);
  const { attributes, body } = frontmatter(file);

  const output = {
    agent: getAgentName(attributes.subject),
    date: attributes.releaseDate,
    downloadLink: attributes.downloadLink,
    version: attributes.version,
    features: attributes.features,
    bugs: attributes.bugs,
    security: attributes.security,
    description: body,
    slug,
  };

  return output;
};

const slugify = (str) => str.replace('../src/content/', '').replace('.mdx', '');

const releaseNoteMdxs = await glob('src/content/docs/release-notes/**/*.mdx');
const releaseNotes = await Promise.all(
  releaseNoteMdxs.map(generateReleaseNoteObject)
);

writeFile('src/data/release-notes.json', JSON.stringify(releaseNotes), {
  encoding: 'utf8',
});
