const { frontmatter } = require('./utils/frontmatter');
const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const glob = require('glob');

const readFile = async (filePath) => {
  let failed = false;
  console.log(`reading ${filePath}`);

  const mdxText = fs.readFileSync(filePath, 'utf8');
  try {
    const jsx = mdx.sync(mdxText);
  } catch (exception) {
    console.log(JSON.stringify(exception, null, 4));
    failed = true;
  }

  const { error } = frontmatter(mdxText);
  if (error != null) {
    console.log('❌ frontmatter error:');
    console.log(error.reason);
    console.log(error.mark.snippet);
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
