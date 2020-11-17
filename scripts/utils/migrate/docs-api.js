const fetch = require('node-fetch');
const logger = require('../logger');
const { BASE_URL } = require('../constants');

require('dotenv').config();

const get = async (pathname, { page, perPage } = {}) => {
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
  const { pages, docs } = await get(pathname, { page, perPage });

  if (page < pages.total && page < maxPages) {
    return docs.concat(
      await paginate(pathname, { page: page + 1, perPage, maxPages })
    );
  }

  return docs;
};

module.exports = { get, paginate };
