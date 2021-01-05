const path = require('path');
const { paginate } = require('./docs-api');

require('dotenv').config();

const fetchAllRedirects = async () => {
  const redirects = paginate('/api/migration/redirects', {
    perPage: 300,
  });

  return groupRedirectsByDocsId(await redirects);
};

const groupRedirectsByDocsId = (docs) => {
  return docs.reduce((acc, curr) => {
    let { to, from } = curr.redirect;
    to = to.replace(/\//g, '');
    from = path.join('/', from);
    if (!acc[to]) {
      acc[to] = [];
    }
    acc[to].push(from);
    return acc;
  }, {});
};

module.exports = { fetchAllRedirects };
