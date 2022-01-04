const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const vfile = require('vfile');
const { writeSync } = require('to-vfile');

const NAV_DIR_PATH = path.join(process.cwd(), '/src/nav');
const JP_NAV_FILE_PATH = path.join(process.cwd(), '/src/i18n/nav/jp.json');

const navData = fs.readdirSync(NAV_DIR_PATH).map((filename) => {
  const filepath = path.join(NAV_DIR_PATH, filename);
  const yamlData = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  return vfile({
    contents: fs.readFileSync(filepath, 'utf8'),
    path: filepath,
    extname: '.yml',
    data: {
      topLevelPath: yamlData.path || null,
    },
  });
});

// const newNav = jpNavData.map((item) => ({ ...item, title: item.englishTitle }));

// fs.writeFileSync(
//   path.join(process.cwd(), 'jp.json'),
//   JSON.stringify(newNav, null, 2)
// );

let localizedNavData = [];

const buildNav = (obj) => {
  if (obj.title && !localizedNavData.some((item) => item.title === obj.title)) {
    localizedNavData.push({
      title: obj.title,
      englishTitle: obj.title,
      locale: 'jp',
    });
  }
  if (obj.pages && obj.pages.length > 0) {
    obj.pages.map((page) => buildNav(page));
  }
  return null;
};

navData.forEach((file) => {
  const data = yaml.safeLoad(file.contents);
  buildNav(data);
});

fs.writeFileSync(
  path.join(process.cwd(), 'jp.json'),
  JSON.stringify(localizedNavData, null, 2)
);
