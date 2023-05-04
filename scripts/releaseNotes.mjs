#! /usr/bin/env node

import frontmatter from 'front-matter';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob10';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import unified from 'unified';

import getAgentName from '../src/utils/getAgentName.js';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';

const generateReleaseNoteObject = async (filePath) => {
  const file = await readFile(filePath, { encoding: 'utf8' });
  const slug = slugify(filePath);
  const { attributes, body } = frontmatter(file);

  const excerptify = async (body) => {
    const plainText = await unified
      .use(remarkParse)
      .use(remarkStringify)
      .process(body);
    return plainText.replace(/\n/g, ' ');
  };

  const output = {
    agent: getAgentName(attributes.subject) ?? null,
    date: attributes.releaseDate ?? null,
    downloadLink: attributes.downloadLink ?? null,
    version: attributes.version ?? null,
    features: attributes.features ?? null,
    bugs: attributes.bugs ?? null,
    security: attributes.security ?? null,
    description: (await excerptify(body)) ?? null,
    slug,
  };

  return output;
};

const slugify = (str) => str.replace('src/content/', '').replace('.mdx', '');

const releaseNoteMdxs = await glob('src/content/docs/release-notes/**/*.mdx', {
  ignore: '**/index.mdx',
});
const releaseNotes = (
  await Promise.all(releaseNoteMdxs.map(generateReleaseNoteObject))
).filter(({ date, agent }) => Boolean(date && agent));
writeFile('src/data/release-notes.json', JSON.stringify(releaseNotes), {
  encoding: 'utf8',
});

const client = new S3Client({ region: 'us-east-2' });

const putCommand = new PutObjectCommand({
  Body: JSON.stringify(releaseNotes),
  Bucket: 'docs-release-notes',
  ContentType: 'application/json',
  Key: 'release-notes.json',
});

client.send(putCommand);
