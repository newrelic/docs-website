const fs = require('fs');
const path = require('path');

// Given a path, this will find the English MDX file on the filesystem.
const findEnglishFile = (page) => {
  const url = new URL(page);

  const filepath = path.join(
    process.cwd(),
    '/src/content/',
    `${url.pathname}.mdx`
  );

  return !fs.existsSync(filepath)
    ? filepath.replace('.mdx', '/index.mdx')
    : filepath;
};

// If there's no page on the filesystem, this is an auto-generated page
// and we can safely skip it.
const removeIndexPages = (filepath) => fs.existsSync(filepath);

// Remove files that don't need to be translated. Files need to be translated
// if the Japanese version doesn't exist or the content for both files is the
// same.
const removeTranslatedPages = (filepath) => {
  const jpFilepath = filepath.replace('/src/content', '/src/i18n/content/jp');

  // we don't have a file, we need to migrate it
  if (!fs.existsSync(jpFilepath)) {
    return true;
  }

  const content = fs.readFileSync(filepath, 'utf-8');
  const jpContent = fs.readFileSync(jpFilepath, 'utf-8');

  // we have a file, but the content is the same, we need to migrate it
  return content === jpContent;
};

// Gets the list of Japanese pages that need to be translated.
// Run this script from the root and supply it the path to a JSON file.
const main = () => {
  const filepath = process.argv[2];
  const json = fs.readFileSync(filepath);

  const pages = JSON.parse(json)
    .map(findEnglishFile)
    .filter(removeIndexPages)
    .filter(removeTranslatedPages)
    .map((filepath) => filepath.replace(process.cwd(), ''));

  // write the results to a file
  fs.writeFileSync(
    path.join(process.cwd(), '/filtered-pages.json'),
    JSON.stringify(pages, null, 2),
    'utf-8'
  );
};

main();
