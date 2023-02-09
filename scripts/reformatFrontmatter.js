// const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const glob = require('glob');
const frontmatter = require('@github-docs/frontmatter');

let noTranslation = 0;
let jpTranslation = 0;
let krTranslation = 0;

const updateFrontmatter = async (filePath) => {
  const contents = fs.readFileSync(filePath);
  const { data } = frontmatter(contents);
  if (data.translate && Array.isArray(data.translate)) {
    if (data.translate.includes('jp')) {
      jpTranslation++;
    }
    if (data.translate.includes('kr')) {
      krTranslation++;
    }
  } else {
    noTranslation++;
    return;
  }
};

const main = async () => {
  const filePaths = glob.sync(`${__dirname}/../src/content/**/*.mdx`);
  await Promise.all(filePaths.map(updateFrontmatter));
  // const results = allResults.filter(Boolean);

  console.log('noTranslation', noTranslation);
  console.log('jpTranslation', jpTranslation);
  console.log('krTranslation', krTranslation);
};

main();
