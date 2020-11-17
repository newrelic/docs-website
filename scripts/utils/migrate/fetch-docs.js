const path = require('path');
const docsApi = require('./docs-api');

require('dotenv').config();

const { TYPES, ITEMS_PER_TYPE, DIRECT_IDS } = require('../constants');

const prop = (name) => (obj) => obj[name];

const fetchDocs = async () => {
  const requests = Object.values(TYPES).map((type) =>
    docsApi.get(path.join('/api/migration/content', type, 'list'), {
      perPage: ITEMS_PER_TYPE[type],
    })
  );

  const hardCodedRequests = DIRECT_IDS.map((id) =>
    docsApi.get(`/api/migration/content/page/${id}`)
  );

  const nrOnly = await docsApi.paginate(
    '/api/migration/content/page/nr-only/list'
  );

  const docs = await Promise.all([...requests, ...hardCodedRequests]);

  return docs.flatMap(prop('docs')).concat(nrOnly).map(prop('doc'));
};

module.exports = fetchDocs;
