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

    return { links: [...new Set(extractLinks(data))], filepath };
  } catch (e) {
    console.error(`Unable to fetch ${filepath}:\n${e}`);
  }
};

const codeRequests = async (nav) => {
  return Promise.all(
    nav.map(async ({ filepath, links }) => {
      const paths = await Promise.all(
        links
          .map(async (path) => {
            const code = await getPageResponse(path);

            if (code !== 200) {
              return path;
            }
          })
          .filter((path) => path === undefined)
      );
      return { filepath, paths };
    })
  );
};

const checkNavLinks = async ({ nodes }) => {
  const nav = nodes.map(({ relativePath }) =>
    getLinksFromNav(`${NAV_DIR}/${relativePath}`)
  );

  const invalidLinks = await codeRequests(nav);

  invalidLinks.forEach(({ filepath, paths }) =>
    paths.forEach((path) =>
      console.log(`INVALID LINK: ${path} \n > ${filepath}`)
    )
  );
};

module.exports = checkNavLinks;
