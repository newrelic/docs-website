const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const isFile = (filepath) => fs.statSync(filepath).isFile();
const pathJoin = (base) => (filepath) => path.join(base, filepath);
const skippedTitles = ['Style guide', 'root'];
const locale = process.argv.slice(2)[0];

const printExample = () => console.warn('Example: yarn generate-nav-titles jp');

if (!locale) {
  console.warn('<!> No locale specified, please append to the command');
  printExample();
  process.exit(0);
}

const getNavFiles = () => {
  const rawFiles = fs
    .readdirSync('src/nav')
    .map(pathJoin('src/nav'))
    .filter(isFile);

  const parsedFiles = rawFiles.map((file) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const data = yaml.safeLoad(fileContents);
    return data;
  });
  return parsedFiles;
};

const readSubNavs = (subNav, flatNav) => {
  return subNav.flatMap((file) => {
    const appendedNav = [
      ...flatNav,
      { englishTitle: file.title, title: file.title, locale },
    ];
    if (file.pages) {
      return readSubNavs(file.pages, appendedNav);
    } else {
      return appendedNav;
    }
  });
};

const getFlatNav = () => {
  const parsedFiles = getNavFiles();
  const flatNav = parsedFiles.flatMap((file) => {
    const navItem = { englishTitle: file.title, title: file.title, locale };
    const appendedNav = [];
    if (!skippedTitles.includes(file.title)) {
      appendedNav.push(navItem);
    }
    return readSubNavs(file.pages, appendedNav);
  });
  return flatNav;
};

const filterUniqueTitles = () => {
  const uniqueTitles = [];
  const flatNav = getFlatNav();
  const titleList = flatNav.filter((navItem) => {
    if (
      uniqueTitles.includes(navItem.title) ||
      navItem.title === 'section-break'
    ) {
      return false;
    } else {
      uniqueTitles.push(navItem.title);
      return true;
    }
  });
  const translationReadyFile = {
    smartling: {
      translate_paths: [
        {
          path: '/strings/title',
        },
      ],
    },
    strings: titleList,
  };
  fs.writeFileSync(`${locale}.json`, JSON.stringify(translationReadyFile));
};

filterUniqueTitles();
