#! /usr/bin/env node

import frontmatter from 'front-matter';
import { readFile } from 'fs/promises';
import { glob } from 'glob10';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { unified } from 'unified10';
import remarkParse from 'remark-parse10';
import remarkMdx from 'remark-mdx2.3';
import { visit } from 'unist-util-visit4';

import getAgentName from '../src/utils/getAgentName.js';
import getEOLDate from '../src/utils/getEOLDate.js';

const excerptify = async (body) => {
  const Compiler = (tree) => {
    let result = '';
    visit(tree, (leaf, index, parent) => {
      if (leaf.type === 'text' || leaf.type === 'inlineCode') {
        result += leaf.value;
        if (parent.children.length - 1 === index) {
          result += ' ';
        }
      }
    });
    result = result.trim();
    const length = result.length;
    result = result.slice(0, 5000);
    if (length > 5000) result += '…';
    return result;
  };

  const vFile = await unified()
    .use(remarkParse)
    .use(function () {
      this.Compiler = Compiler;
    })
    .use(remarkMdx)
    .process(body);

  return vFile.value;
};

const slugify = (str) => str.replace('src/content/', '').replace('.mdx', '');

const generateReleaseNoteObject = async (filePath) => {
  const file = await readFile(filePath, { encoding: 'utf8' });
  const slug = slugify(filePath);
  const { attributes, body } = frontmatter(file);

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

  if (attributes.releaseDate) {
    output.eolDate = getEOLDate(attributes.releaseDate);
  }

  return output;
};

const releaseNoteMdxs = await glob('src/content/docs/release-notes/**/*.mdx', {
  ignore: '**/index.mdx',
});

const releaseNotes = (
  await Promise.all(releaseNoteMdxs.map(generateReleaseNoteObject))
).filter(({ date, agent }) => Boolean(date && agent));

const client = new S3Client({ region: 'us-east-2' });

const putCommand = new PutObjectCommand({
  Body: JSON.stringify(releaseNotes),
  Bucket: 'docs-release-notes',
  ContentType: 'application/json',
  Key: 'release-notes.json',
});

client.send(putCommand);
