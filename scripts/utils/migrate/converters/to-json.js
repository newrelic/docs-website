const { TYPES } = require('../../constants');

const JSON_BY_TYPE = {
  [TYPES.ATTRIBUTE_DEFINITION]: (doc) => ({
    id: doc.docId,
    title: doc.title,
    description: doc.shortDescription,
    eventTypes: doc.eventTypes,
    relatedInfo: doc.relatedInfo,
  }),
};

const toJSON = (file) => {
  const { doc } = file.data;
  const json = JSON_BY_TYPE[doc.type](doc);

  file.contents = JSON.stringify(json, null, 2);
};

module.exports = toJSON;
