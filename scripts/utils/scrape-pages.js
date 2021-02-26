const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

const NAV_DIR = 'src/nav';
const BASE_URL = 'https://docs-preview.newrelic.com';

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

const getPageResponse = async (path) => {
  const url = new URL(path, BASE_URL);
  const { status } = await fetch(url, { method: 'HEAD' });

  if (status !== 200) {
    console.log(status, path);
  }

  return status;
};

const run = async () => {
  const navFiles = fs.readdirSync(NAV_DIR);
  const links = [
    ...new Set(
      navFiles.flatMap((filename) => getLinksFromNav(`${NAV_DIR}/${filename}`))
    ),
  ];

  const codeRequests = links.map(async (path, index, list) => {
    const code = await getPageResponse(path);

    const percent = (index % list.length) * 100;
    if (percent % 5 === 0) {
      console.log(`${percent}% complete`);
    }

    return { code, path };
  });

  const codeResponses = await Promise.all(codeRequests);

  const invalidPaths = codeResponses.filter(({ code }) => code !== 200);

  console.dir(invalidPaths);
};

run();
