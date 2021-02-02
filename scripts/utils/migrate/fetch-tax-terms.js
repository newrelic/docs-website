const { get } = require('./docs-api');

require('dotenv').config();

const fetchAllTaxTerms = async () => {
  const taxTerms = await get('/api/migration/taxonomy/list', {
    perPage: 700,
  });

  return taxTerms;
};

module.exports = fetchAllTaxTerms;
