const path = require('path');
const { paginate } = require('./docs-api');

require('dotenv').config();

const fetchAllRedirects = async () => {
  const redirects = await paginate('/api/migration/redirects', {
    perPage: 300,
  });

  return groupRedirectsByDocsId(redirects);
};

const groupRedirectsByDocsId = (docs) => {
  return docs.reduce((acc, { redirect }) => {
    const from = path.join('/', redirect.from);
    const to = appendLeadingSlash(
      redirect.to
        .replace(/^(http)?.+?(?=(docs|taxonomy|node)\/)/, '')
        .replace(/#[\w-]+$/, '')
    );

    if (!acc[to]) {
      acc[to] = [];
    }

    acc[to].push(from);

    return acc;
  }, {});
};

const appendLeadingSlash = (pathname) =>
  pathname.startsWith('/') ? pathname : `/${pathname}`;

module.exports = { fetchAllRedirects };
