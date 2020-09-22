const path = require('path');
const getCategories = require('../utils/get-categories');
const { TYPES, BASE_DIR } = require('../constants');

const JSON_BY_TYPE = {
  [TYPES.ATTRIBUTE_DEFINITION]: (doc) => ({
    id: doc.docId,
    title: doc.title,
    description: doc.shortDescription,
    eventTypes: doc.eventTypes,
    relatedInfo: doc.relatedInfo,
  }),
};

const toJSON = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName = `${dir}/${slug}.json`;

  const json = JSON_BY_TYPE[doc.type](doc);
  const content = JSON.stringify(json, null, 2);

  return { content, fileName };
};

module.exports = toJSON;
