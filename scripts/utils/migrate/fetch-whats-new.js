const docsApi = require('./docs-api');
const { TYPES, ITEMS_PER_TYPE } = require('../constants');
const { prop } = require('../functional');

const fetchWhatsNew = async () => {
  const docs = await docsApi.paginate(
    `/api/migration/content/${TYPES.WHATS_NEW}/list`,
    { perPage: ITEMS_PER_TYPE[TYPES.WHATS_NEW] }
  );

  return docs.map(prop('doc'));
};

module.exports = fetchWhatsNew;
