const path = require('path');
const getCategories = require('../utils/get-categories');
const { BASE_DIR } = require('../constants');

const toJSON = (doc) => {
  const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));
  const slug = doc.docUrl.split('/').slice(-1);
  const fileName = `${dir}/${slug}.json`;

  const json = {
    id: doc.docId,
    title: doc.title,
    description: doc.shortDescription,
    eventTypes: doc.eventTypes,
    relatedInfo: doc.relatedInfo,
  };

  const content = JSON.stringify(json, null, 2);

  return { content, fileName };
};

module.exports = toJSON;
