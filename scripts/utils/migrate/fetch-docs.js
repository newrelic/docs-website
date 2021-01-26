const path = require('path');
const docsApi = require('./docs-api');
const { prop } = require('../functional');
const { TYPES, ITEMS_PER_TYPE, MAX_PAGES_PER_TYPE } = require('../constants');

const IGNORED_TYPES = [
  TYPES.ATTRIBUTE_DEFINITION,
  TYPES.EVENT_DEFINITION,
  TYPES.WHATS_NEW,
];

const fetchDocs = async () => {
  const requests = Object.values(TYPES)
    .filter((type) => !IGNORED_TYPES.includes(type))
    .map((type) =>
      docsApi.paginate(path.join('/api/migration/content', type, 'list'), {
        perPage: ITEMS_PER_TYPE[type],
        maxPages: MAX_PAGES_PER_TYPE[type] || Infinity,
      })
    )
    .concat(docsApi.paginate('/api/migration/content/page/nr-only/list'));

  const docs = await Promise.all(requests);

  return docs.flat().map(prop('doc'));
};

module.exports = fetchDocs;
