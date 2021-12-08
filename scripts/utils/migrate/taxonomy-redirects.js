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

/**
 * Gets the URL path for a Drupal node.
 * If unable to find the path, null is returned.
 * @param {string} uri The node URI in Drupal
 * @returns {Promise<string>}
 */

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
    const { docs } = json;

    return docs.length ? get(json, 'docs[0].doc.path') : null;
  } catch (error) {
    return null;
  }
};

const fetchTaxonomyRedirects = async (redirects) => {
  const taxonomy = await Promise.all(
    Object.entries(redirects)
      .filter(([uri]) => uri.startsWith('/taxonomy'))
      .map(async ([url, paths]) => [await getTaxonomyPath(url), paths])
  );

  const filteredPaths = await Promise.all(
    taxonomy.map(async ([url, paths]) => [
      url,
      await Promise.all(
        paths
          .filter((path) => path !== url && !path.startsWith('/taxonomy'))
          .map((path) => (path.startsWith('/node') ? getNodePath(path) : path))
      ),
    ])
  );

  return filteredPaths.reduce((memo, [url, paths]) => {
    paths = paths.filter(Boolean);
    return Boolean(url) && paths.length > 0 ? { ...memo, [url]: paths } : memo;
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
