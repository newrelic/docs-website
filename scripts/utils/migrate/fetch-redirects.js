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
  return docs.reduce((accum, curr) => {
    let { to, from } = curr.redirect;
    to = to.replace(/\//g, '');
    from = path.join('/', from);
    if (!accum[to]) {
      accum[to] = [];
    }
    accum[to].push(from);
    return accum;
  }, {});
};

module.exports = { fetchAllRedirects };
