const docsApi = require('./docs-api');

const fetchEventDefinitions = async () => {
  const { attributeDictionary } = await docsApi.get(
    '/attribute-dictionary/v1/events.json'
  );

  return attributeDictionary.map(({ event }) => ({
    ...event,
    docUrl: 'https://docs.newrelic.com/attribute-dictionary',
    body: event.shortDescription,
    type: 'event_definition',
  }));
};

module.exports = fetchEventDefinitions;
