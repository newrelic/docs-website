const path = require('path');

const TYPES = {
  BASIC_PAGE: 'page',
  API_DOC: 'api_doc',
  RELEASE_NOTE: 'release_notes',
  RELEASE_NOTE_PLATFORM: 'release_notes_platform',
  TROUBLESHOOTING: 'troubleshooting_doc',
  WHATS_NEW: 'nr1_announcement',
  ATTRIBUTE_DEFINITION: 'attribute_definition',
};

module.exports = {
  BASE_URL: 'https://docs-dev.newrelic.com/api/migration/content',
  BASE_DIR: path.join(__dirname, '..', 'src/content'),

  TYPES,

  GATSBY_CONTENT_TYPES: {
    [TYPES.BASIC_PAGE]: 'page',
    [TYPES.API_DOC]: 'apiDoc',
    [TYPES.RELEASE_NOTE]: 'releaseNote',
    [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
    [TYPES.TROUBLESHOOTING]: 'troubleshootingDoc',
    [TYPES.WHATS_NEW]: 'nr1Announcement',
    [TYPES.ATTRIBUTE_DEFINITION]: 'attributeDef',
  },

  GATSBY_TEMPLATE: {
    [TYPES.BASIC_PAGE]: 'basicDoc',
    [TYPES.API_DOC]: 'basicDoc',
    [TYPES.RELEASE_NOTE]: 'basicDoc',
    [TYPES.RELEASE_NOTE_PLATFORM]: 'basicDoc',
    [TYPES.TROUBLESHOOTING]: 'basicDoc',
    [TYPES.WHATS_NEW]: 'basicDoc',
    [TYPES.ATTRIBUTE_DEFINITION]: 'basicDoc',
  },
};
