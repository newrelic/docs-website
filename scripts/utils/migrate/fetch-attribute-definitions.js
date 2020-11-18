const docsApi = require('./docs-api');

const prop = (name) => (obj) => obj[name];

const fetchAttributeDefinitions = async () => {
  const attributeDefinitions = await docsApi.paginate(
    '/api/migration/content/attribute_definition/list',
    { perPage: 100 }
  );

  return attributeDefinitions.map(prop('doc'));
};

module.exports = fetchAttributeDefinitions;
