#! /usr/bin/env node

import { readFile } from 'fs/promises';
import { glob } from 'glob10';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { unified } from 'unified10';
import remarkParse from 'remark-parse10';
import remarkMdx from 'remark-mdx2.3';
import { visit } from 'unist-util-visit4';
import { Command } from 'commander';

import getAgentName from '../src/utils/getAgentName.js';
import getEOLDate from '../src/utils/getEOLDate.js';
import { frontmatter } from './utils/frontmatter.js';

const program = new Command();
program
  .description('generate agent release note JSON')
  .option('-u, --upload', 'upload resulting JSON to S3')
  .option('-v, --validate, validate resulting JSON')
  .parse();
const options = program.opts();
const uploadToS3 = Boolean(options.upload);
const validateJSON = Boolean(options.validate);

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

const INCLUDE_AGENTS = new Set([
  '.net',
  'android',
  'browser',
  'dotnet',
  'go',
  'infrastructure',
  'ios',
  'java',
  'kubernetes',
  'pipeline_control_gateway', 
  'agent_control_deployment_chart', 
  'agent_control_continuous_delivery_chart', 
  'node',
  'nodejs',
  'php',
  'python',
  'ruby',
  'sdk',
  'fluentbit',
  'nrdot',
  'prometheus',
  'streaming_for_mobile',
  'streaming_for_browser',
  'streaming_for_others',
  'aws_firehose_log_forwarder',
  'aws_lambda_log_forwarder'
]);

const generateReleaseNoteObject = async (filePath) => {
  const file = await readFile(filePath, { encoding: 'utf8' });
  const slug = slugify(filePath);
  const { attributes, body, error } = frontmatter(file);

  if (error != null) {
    console.log('❌ frontmatter error:');
    console.log(filePath);
    console.log(error.reason);
    console.log(error.mark.snippet);
    throw error;
  }

  const output = {
    agent: getAgentName(filePath) ?? null,
    date: attributes.releaseDate ?? null,
    downloadLink: attributes.downloadLink ?? null,
    version: attributes.version ?? null,
    features: attributes.features ?? null,
    bugs: attributes.bugs ?? null,
    security: attributes.security ?? null,
    supportedOperatingSystems: attributes.supportedOperatingSystems ?? null,
    description: (await excerptify(body)) ?? null,
    slug,
  };
  
  if (attributes.category) {
      output.category = attributes.category;
  }

  if (attributes.eolDate) {
    output.eolDate = attributes.eolDate;
  } else if (attributes.releaseDate) {
    output.eolDate = getEOLDate(attributes.releaseDate);
  }

  return output;
};
const releaseNoteMdxs = await glob('src/content/docs/release-notes/**/*.mdx', {
  ignore: '**/index.mdx',
});

const releaseNotes = (
  await Promise.allSettled(releaseNoteMdxs.map(generateReleaseNoteObject))
)
  .filter(({ status }) => status === 'fulfilled')
  .map(({ value }) => value)
  .filter(
    ({ date, agent }) => Boolean(date && agent) && INCLUDE_AGENTS.has(agent)
  );
console.error('📦 release notes JSON generated');

const validateReleaseNotesAgents = (releaseNotes) => {
  // this set excludes 'sdk', 'node' and '.net' from the one above
  const JSON_AGENTS = new Set([
    'android',
    'browser',
    'dotnet',
    'go',
    'infrastructure',
    'ios',
    'java',
    'nodejs',
    'php',
    'python',
    'ruby',
  ]);

  const errors = [];

  JSON_AGENTS.forEach((agent) => {
    const agentsCount = releaseNotes.filter((note) => note.agent === agent)
      .length;
    if (agentsCount < 1) {
      const message = `\n😵 No release notes found for ${agent}`;
      errors.push(message);
    } else {
      console.error(`🕵️ Found ${agentsCount} release notes for ${agent}`);
    }
  });

  const requiredData = [
    'agent',
    'date',
    'version',
    'description',
    'slug',
    'eolDate',
  ];

  releaseNotes.forEach((note) => {
    requiredData.forEach((key) => {
      if (!note[key]) {
        const message = `\n😵 Missing ${key} data for: \n ${JSON.stringify(
          note
        )}`;
        errors.push(message);
      }
    });
  });
  if (errors.length > 0) {
    errors.forEach((error) => console.error(error));
    process.exitCode = 1;
  } else {
    console.error(`✨ Release notes JSON validated`);
  }
};

if (uploadToS3) {
  const client = new S3Client({ region: 'us-east-2' });

  const putCommand = new PutObjectCommand({
    Body: JSON.stringify(releaseNotes),
    Bucket: 'docs-release-notes',
    ContentType: 'application/json',
    Key: 'release-notes.json',
  });

  console.error('🌎 uploading release notes JSON to S3');
  client
    .send(putCommand)
    .then(() => console.error('✨ successfully uploaded release notes to S3!'))
    .catch((err) => {
      console.error('😵 failed to upload release notes to S3');
      console.error(err);
    });
} else if (validateJSON) {
  validateReleaseNotesAgents(releaseNotes);
} else {
  console.log(JSON.stringify(releaseNotes));
}

 