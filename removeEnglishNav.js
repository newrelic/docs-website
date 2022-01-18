const fs = require('fs');
const path = require('path');
const jpNavFile = require('./src/i18n/nav/jp.json');

const jpNavJson = JSON.stringify(jpNavFile);
const jpNav = JSON.parse(jpNavJson);

const updatedNav = JSON.stringify(
  jpNav.filter((item) => item.title !== item.englishTitle),
  null,
  2
);

fs.writeFileSync(
  path.join(process.cwd(), 'src/i18n/nav/jp.json'),
  updatedNav,
  'utf-8'
);
