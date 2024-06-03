#! /usr/bin/env node

const fs = require('fs/promises');
const { program } = require('commander');

const serializeMDX = require('./actions/serialize-mdx');
const deserializeHTML = require('./actions/deserialize-html');

const cantOpenPath = (path) => () => {
  console.error(`😵 unable to open path ${path}`);
  process.exit(1);
};

const assertPathIsNotEmpty = (path) => {
  if (path == null || path === '') {
    program.help({ error: true });
  }
};

const serializeMdxToHtml = async (path, outputPath) => {
  const mdx = await fs.readFile(path).catch(cantOpenPath(path));
  const html = await serializeMDX(mdx).catch((err) => {
    console.error('❌ error serializing MDX');
    console.error(err);
    process.exit(1);
  });

  if (outputPath) {
    fs.writeFile(outputPath, html, 'utf-8');
  } else {
    console.log(html);
  }
};

const deserializeHtmlToMdx = async (path, outputPath) => {
  const htmls = await fs.readdir(path);
  console.log(htmls);
  htmls.forEach(async (htmlguy) => {
    const frontmatter = `---
title: '${htmlguy.replace('.html', '')}'
metaDescription: 'Learn how to work the ${htmlguy.replace(
      '.html',
      ''
    )} component'
freshnessValidatedDate: 2024-06-03
---\n`;
    const html = await fs
      .readFile(path + htmlguy, 'utf-8')
      .catch(cantOpenPath(path));
    const mdx = await deserializeHTML(html).catch((err) => {
      console.error('❌ error deserializing HTML');
      console.error(err);
      process.exit(1);
    });
    fs.writeFile(
      `/Users/lbaker/gatsby/docs-website/src/content/docs/new-relic-solutions/build-nr-ui/sdk-component/${htmlguy.replace(
        '.html',
        '.mdx'
      )}`,
      frontmatter.concat(mdx),
      'utf-8'
    );
  });
};

const serde = program
  .name('serde')
  .description('manually serialize or deserialize an MDX or HTML file');

serde
  .command('serialize')
  .description('serialize an MDX file to HTML')
  .option('-o, --output [path]', 'write to given path instead of stdout')
  .argument('[path]')
  .action((path, options) => {
    assertPathIsNotEmpty(path);
    serializeMdxToHtml(path, options.output);
  });

serde
  .command('deserialize')
  .description('deserialize an HTML file to MDX')
  .option('-o, --output [path]', 'write to given path instead of stdout')
  .argument('[path]')
  .action((path, options) => {
    assertPathIsNotEmpty(path);
    deserializeHtmlToMdx(path, options.output);
  });

program.parse();
