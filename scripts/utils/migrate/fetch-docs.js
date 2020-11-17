const fetch = require('node-fetch');
const path = require('path');

require('dotenv').config();

const logger = require('../logger');
const { TYPES, ITEMS_PER_TYPE, BASE_URL, DIRECT_IDS } = require('../constants');

const prop = (name) => (obj) => obj[name];

const callApi = async (pathname, { page, perPage } = {}) => {
  const params = new URLSearchParams();

  if (page) {
    params.set('page', page);
  }

  if (perPage) {
    params.set('items_per_page', perPage);
  }

  const url = new URL(
    Array.from(params).length ? `${pathname}?${params}` : pathname,
    BASE_URL
  );

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Phpshield-Key-Disable': process.env.ACQUIA_DEV_PHP_SHIELD_KEY,
      },
    });
    return res.json();
  } catch (e) {
    logger.error(`Error, could not fetch ${url}: ${e}`);
  }
};

const paginate = async (
  pathname,
  { page = 1, perPage, maxPages = Infinity } = {}
) => {
  const { pages, docs } = await callApi(pathname, { page, perPage });

  if (page < pages.total && page < maxPages) {
    return docs.concat(
      await paginate(pathname, { page: page + 1, perPage, maxPages })
    );
  }

  return docs;
};

const fetchDocs = async () => {
  const requests = Object.values(TYPES).map((type) =>
    callApi(path.join('/api/migration/content', type, 'list'), {
      perPage: ITEMS_PER_TYPE[type],
    })
  );

  const hardCodedRequests = DIRECT_IDS.map((id) =>
    callApi(`/api/migration/content/page/${id}`)
  );

  const nrOnly = await paginate('/api/migration/content/page/nr-only/list');

  const docs = await Promise.all([...requests, ...hardCodedRequests]);

  return docs.flatMap(prop('docs')).concat(nrOnly).map(prop('doc'));
};

module.exports = fetchDocs;
