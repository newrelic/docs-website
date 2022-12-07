const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const vfile = require('vfile');
const { writeSync } = require('to-vfile');

const NAV_DIR = path.join(process.cwd(), '/src/nav');

const navData = fs.readdirSync(NAV_DIR).map((filename) => {
  const filepath = path.join(NAV_DIR, filename);
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

const removePaths = (obj, topLevelPath) => {
  if (obj.pages && obj.pages.length > 0) {
    if (obj.path) {
      if (obj.path !== topLevelPath) {
        delete obj.path;
      }
      obj.pages.map((page) => removePaths(page, topLevelPath));
    }
  }
  return obj;
};

navData.forEach((file) => {
  const contentDataRemovedPaths = removePaths(
    yaml.safeLoad(file.contents),
    file.data.topLevelPath
  );

  file.contents = yaml.safeDump(contentDataRemovedPaths, { lineWidth: 99999 });
  writeSync(file, 'utf-8');
});
