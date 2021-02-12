const fs = require('fs');
const fetch = require('node-fetch');
const get = require('lodash/get');
const { BASE_URL } = require('../constants');

const DATA_FILE = 'src/data/taxonomy-redirects.json';

/**
 * Gets the path to a taxonomy term (an index page).
 * If unable to find the path, the ID is returned.
 * @param {string} uri The taxonomy URI in Drupal
 * @returns {Promise<string>}
 */
const getTaxonomyPath = async (uri) => {
  const id = uri.replace(/.*\//, '');
  const url = new URL(`/api/migration/taxonomy/${id}`, BASE_URL);
  const headers = {
    'Content-Type': 'application/json',
    'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
  };

  try {
    const res = await fetch(url, { headers });
    const json = await res.json();

    return get(json, 'terms[0].term.urlPath');
  } catch (error) {
    return null;
  }
};

const getNodePath = async (uri) => {
  const id = uri.replace(/.*\/node\//, '');
  const url = new URL(`/api/migration/content/node/${id}/urlPath`, BASE_URL);
  const headers = {
    'Content-Type': 'application/json',
    'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
  };
  try {
    const res = await fetch(url, { headers });
    const json = await res.json();
    return get(json, 'docs[0].doc.path');
  } catch (error) {
    fs.writeFileSync('src/data/nodes.txt', url);
    return null;
  }
};

const fetchTaxonomyRedirects = async (redirects) => {
  const taxonomy = await Promise.all(
    Object.entries(redirects)
      .filter(([uri]) => uri.startsWith('/taxonomy'))
      .map(async ([url, paths]) => [await getTaxonomyPath(url), paths])
  );

  return await taxonomy.reduce(async (memo, [url, paths]) => {
    const filteredPaths = await Promise.all(
      paths
        .filter((path) => path !== url && !path.startsWith('/taxonomy'))
        .map(async (path) =>
          path.startsWith('/node') ? await getNodePath(path) : path
        )
        .filter((path) => Boolean(path))
    );

    return Boolean(url) && (await filteredPaths.length) > 0
      ? { ...(await memo), [url]: await filteredPaths }
      : await memo;
  }, {});
};

/**
 * Accepts fetched taxonomy redirects, turns them into an array, then saves
 * related redirects to a JSON file.
 * @param {{[url: string]: string[]}} taxonomyRedirects
 */
const writeTaxonomyRedirects = async (taxonomyRedirects, files) => {
  const pathnames = files.map((file) => file.data.pathname);

  const filteredRedirects = Object.entries(taxonomyRedirects)
    .filter(([url]) => !pathnames.includes(url))
    .map(([url, paths]) => ({ url, paths }));

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(filteredRedirects, null, 2),
    'utf-8'
  );
};

module.exports = { fetchTaxonomyRedirects, writeTaxonomyRedirects };
