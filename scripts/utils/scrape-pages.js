const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

const NAV_DIR = 'src/nav';

const extractLinks = (data, links = []) => {
  if (!data.pages) {
    return data.path;
  }

  const linksAtLevel = data.pages.flatMap((page) => extractLinks(page, links));

  return data.path ? [...linksAtLevel, data.path] : linksAtLevel;
};

const getLinksFromNav = (filepath) => {
  try {
    const file = fs.readFileSync(filepath, 'utf8');
    const data = yaml.load(file);

    return [...new Set(extractLinks(data))];
  } catch (e) {
    console.error(`Unable to fetch ${filepath}:\n${e}`);
  }
};

const run = () => {
  const navFiles = fs.readdirSync(NAV_DIR);
  const links = [
    ...new Set(
      navFiles.flatMap((filename) => getLinksFromNav(`${NAV_DIR}/${filename}`))
    ),
  ];
};

run();
