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

    return get(json, 'terms[0].term.urlPath', uri);
  } catch (error) {
    console.log(`Taxonomy ID ${id} does not exist, skipping`);

    return uri;
  }
};

/**
 * Updates redirects from a taxonomy (one of the paths) to another taxonomy.
 * @param {{uri: string, url: string: paths: string[]}[]} redirects
 * @returns {{url: string: paths: string[]}[]}
 */
const updateRedirectPaths = (redirects) =>
  redirects.map(({ url, paths }) => {
    // remove orphaned taxonomy paths and get non-Drupal locations
    const updatedPaths = paths.reduce((acc, path) => {
      switch (true) {
        case path.startsWith('/node'):
          return acc;
        case !path.startsWith('/taxonomy'):
          return [...acc, path];
        default:
          const page = redirects.find(({ uri }) => uri === path);
          return page && page.url ? [...acc, page.url] : acc;
      }
    }, []);

    return { url, paths: updatedPaths };
  });

/**
 * Gathers information about each taxonomy term and saves the taxonomy-
 * related redirects to a JSON file.
 * @param {{[url: string]: string[]}} redirects
 */
module.exports = async (redirects) => {
  const rawTaxonomyData = Object.entries(redirects)
    .filter(([uri]) => uri.startsWith('/taxonomy'))
    .map(async ([uri, paths]) => ({
      uri,
      paths,
      url: await getTaxonomyPath(uri),
    }));

  // Get redirects (by index page path, not Drupal ID)
  const taxonomyDetails = await Promise.all(rawTaxonomyData);

  // NOTE: we are filtering out redirects that no longer exist
  const validTaxonomyRedirects = taxonomyDetails.filter(
    ({ uri, url }) => uri !== url
  );

  const taxonomyRedirects = updateRedirectPaths(validTaxonomyRedirects);

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(taxonomyRedirects, null, 2),
    'utf-8'
  );
};
