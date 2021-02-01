const fs = require('fs');
const get = require('lodash/get');
const api = require('./docs-api');

const DATA_FILE = 'src/data/taxonomy-redirects.json';

/*
TODO
  - [x] Get information about each taxonomy term (filepath)
  - [x] Store the index page path (not the taxonomy id) in the JSON
  - [x] Figure out how to add redirects at build time
*/

/**
 * Gets the path to a taxonomy term (an index page) given it's ID.
 * If unable to find the path, the ID is returned.
 * @param {string} id
 * @returns {Promise<string>}
 */
const getTaxonomyPath = async (id) => {
  const resp = await api.get(`/api/migration/taxonomy/${id}`);
  return get(resp, 'terms[0].term.urlPath', id);
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

  const taxonomyRedirects = await Promise.all(rawTaxonomyData);

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(taxonomyRedirects, null, 2),
    'utf-8'
  );
};
