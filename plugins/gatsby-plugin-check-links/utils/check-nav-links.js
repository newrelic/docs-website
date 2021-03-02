const fs = require('fs');
const yaml = require('js-yaml');
const NAV_DIR = 'src/nav';
const getPageResponse = require('./get-page-response');

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

const codeRequests = async (links) =>
  await Promise.all(
    links.map(async (path) => {
      const code = await getPageResponse(path);

      if (code != 200) {
        return;
      }

      return path;
    })
  );

const checkNavLinks = async ({ nodes }) => {
  const links = nodes
    .map(({ relativePath }) => relativePath)
    .flatMap((filename) => getLinksFromNav(`${NAV_DIR}/${filename}`));

  const invalidLinks = await codeRequests(links);

  console.log(`!! Found ${invalidLinks.length} links in navigation yaml files`);
  invalidLinks.forEach((link) => console.log(`- ${link}`));
};

module.exports = checkNavLinks;
