// const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const frontmatter = require('@github-docs/frontmatter');

const updateFrontmatter = async (filePath) => {
  try {
    console.log(`reading ${filePath}`);
    const contents = fs.readFileSync(filePath);
    const { data } = frontmatter(contents);
    console.log(data.translate);
  } catch (exception) {
    console.log(JSON.stringify(exception, null, 4));
    return filePath;
  }
};

const main = async () => {
  // const filePaths = glob.sync(`${__dirname}/../src/content/**/*.mdx`);
  const testFile = path.join(process.cwd(), 'scripts/test.mdx');
  updateFrontmatter(testFile);

  // const allResults = await Promise.all(filePaths.map(readFile));
  // const results = allResults.filter(Boolean);
};

main();
