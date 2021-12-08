'use strict';

const fetch = require('node-fetch');
const parseLinkHeader = require('parse-link-header');

/**
 * Fetches paginated results from the Github API
 * @param {String} url the API to query
 * @param {String} token a token for the API
 * @returns {Promise<Object[]>} all pages of results
 */
const fetchPaginatedGHResults = async (url, token) => {
  let files = [];
  let nextPageLink = url;

  while (nextPageLink) {
    const resp = await fetch(nextPageLink, {
      headers: { authorization: `token ${token}` },
    });
    if (!resp.ok) {
      throw new Error(
        `Github API returned status ${resp.code} - ${resp.message}`
      );
    }
    const page = await resp.json();
    nextPageLink = getNextLink(resp.headers.get('Link'));
    files = [...files, ...page];
  }

  return files;
};

/**
 * Pulls the next page off of a `Link` header
 * @param {String} linkHeader the `Link` header value
 * @returns {String|Null} the next page of results
 */
const getNextLink = (linkHeader) => {
  const parsedLinkHeader = parseLinkHeader(linkHeader);
  if (parsedLinkHeader && parsedLinkHeader.next) {
    return parsedLinkHeader.next.url || null;
  }
  return null;
};

module.exports = { fetchPaginatedGHResults, getNextLink };
