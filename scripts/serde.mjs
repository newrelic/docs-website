#! /usr/bin/env node

import fs from 'fs/promises';
import { extname } from 'path';
import { program } from 'commander';

// MDX <--> HTML
import serializeMDX from './actions/serialize-mdx.mjs';
import deserializeHTML from './actions/deserialize-html.mjs';

// YAML <--> JSON
import serializeYaml from './actions/serialize-yaml.mjs';
import deserializeJson from './actions/deserialize-json.mjs';

const cantOpenPath = (path) => () => {
  console.error(`😵 unable to open path ${path}`);
  process.exit(1);
};

const assertPathIsNotEmpty = (path) => {
  if (path == null || path === '') {
    program.help({ error: true });
  }
};

const serialize = async (path, { output: outputPath }, extension) => {
  const inputString = await fs
    .readFile(path, 'utf-8')
    .catch(cantOpenPath(path));

  let serializer;
  switch (extension) {
    case '.mdx':
      serializer = serializeMDX;
      break;
    case '.yml':
    case '.yaml':
      serializer = serializeYaml;
      break;
    default:
      console.error(
        `❌ unknown file type '${extension}' trying to serialize ${path}`
      );
      process.exit(1);
  }

  const result = await serializer(inputString).catch((err) => {
    const fileType = extensionToFileType(extension);
    console.error(`❌ error serializing ${fileType}`);
    console.error(err);
    process.exit(1);
  });

  if (outputPath) {
    fs.writeFile(outputPath, result, 'utf-8');
  } else {
    console.log(result);
  }
};

const deserialize = async (path, { output: outputPath }, extension) => {
  const inputString = await fs
    .readFile(path, 'utf-8')
    .catch(cantOpenPath(path));

  let deserializer;
  switch (extension) {
    case '.html':
      deserializer = deserializeHTML;
      break;
    case '.json':
      deserializer = deserializeJson;
      break;
    default:
      console.error(
        `❌ unknown file type '${extension}' trying to deserialize ${path}`
      );
      process.exit(1);
  }

  const result = await deserializer(inputString).catch((err) => {
    const fileType = extensionToFileType(extension);
    console.error(`❌ error serializing ${fileType}`);
    console.error(err);
    process.exit(1);
  });

  if (outputPath) {
    fs.writeFile(outputPath, result, 'utf-8');
  } else {
    console.log(result);
  }
};

const extensionToFileType = (extension) => {
  switch (extension) {
    case '.html':
      return 'HTML';
    case '.json':
      return 'JSON,';
    case '.mdx':
      return 'MDX';
    case '.yml':
    case '.yaml':
      return 'YAML';
    default:
      return 'unknown';
  }
};

const serde = program
  .name('serde')
  .description('manually serialize or deserialize an MDX or HTML file');

serde
  .command('serialize')
  .description('serialize an MDX file to HTML or a YAML file to JSON')
  .option('-o, --output [path]', 'write to given path instead of stdout')
  .argument('[path]')
  .action((path, options) => {
    assertPathIsNotEmpty(path);
    const extension = extname(path);
    serialize(path, options, extension);
  });

serde
  .command('deserialize')
  .description('deserialize an HTML file to MDX or a JSON file to YAML')
  .option('-o, --output [path]', 'write to given path instead of stdout')
  .argument('[path]')
  .action((path, options) => {
    assertPathIsNotEmpty(path);
    const extension = extname(path);
    deserialize(path, options, extension);
  });

program.parse();
