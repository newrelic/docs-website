const fs = require('fs');
const fetch = require('node-fetch');
const get = require('lodash/get');
const { BASE_URL } = require('../constants');

const DATA_FILE = 'src/data/taxonomy-redirects.json';

/**
 * Gets the path to a taxonomy term (an index page) given it's ID.
 * If unable to find the path, the ID is returned.
 * @param {string} id
 * @returns {Promise<string>}
 */
const getTaxonomyPath = async (id) => {
  const url = new URL(`/api/migration/taxonomy/${id}`, BASE_URL);
  const headers = {
    'Content-Type': 'application/json',
    'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
  };

  try {
    const res = await fetch(url, { headers });
    const json = await res.json();

    return get(json, 'terms[0].term.urlPath', id);
  } catch (error) {
    console.log(`Taxonomy ID ${id} does not exist, skipping`);

    return id;
  }
};

/**
 * Gathers information about each taxonomy term and saves the taxonomy-
 * related redirects to a JSON file.
 * @param {{[url: string]: string[]}} redirects
 */
module.exports = async (redirects) => {
  const rawTaxonomyData = Object.entries(redirects)
    .filter(([uri]) => uri.startsWith('/taxonomy'))
    .map(async ([uri, paths]) => ({
      url: await getTaxonomyPath(uri.replace(/.*\//, '')),
      paths,
    }));

  // TODO: filter out redirects that don't correspond to a page (key is just the ID)
  const taxonomyRedirects = await Promise.all(rawTaxonomyData);

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(taxonomyRedirects, null, 2),
    'utf-8'
  );
};
