import frontmatter from '@github-docs/frontmatter';
import { compileSync } from '@mdx-js/mdx';
import fs from 'fs';
import glob from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
// import MDXContainer from '../src/components/MDXContainer.mjs';

// const { defaultComponents } = MDXContainer;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = async (filePath) => {
  let failed = false;
  // console.log(`reading ${filePath}`);

  const mdxText = fs.readFileSync(filePath, 'utf8');
  try {
    compileSync(mdxText);
  } catch (exception) {
    console.log('filepath', filePath);
    console.log(JSON.stringify(exception, null, 4));
    failed = true;
  }

  const { errors } = frontmatter(mdxText);
  if (errors.length > 0) {
    console.log(JSON.stringify(errors, null, 4));
    failed = true;
  }

  return failed ? filePath : null;
};

const main = async () => {
  let filePaths = process.argv.slice(2);

  if (filePaths.length === 0) {
    // if user did not supply paths, default to all
    filePaths = glob.sync(
      `${__dirname}/../src{/content/**/*.mdx,/i18n/content/**/*.mdx}`
    );
  }

  const allResults = await Promise.all(filePaths.map(readFile));
  const results = allResults.filter(Boolean);

  console.log(results);
  console.log(`Failed file count: ${results.length}`);

  if (results.length > 0) {
    process.exitCode = 1;
  }
};

main();
