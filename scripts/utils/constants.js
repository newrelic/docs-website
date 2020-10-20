const path = require('path');

module.exports = {
  BASE_URL: 'https://docs-dev.newrelic.com',
  BASE_DIR: 'src/content',
  NAV_DIR: 'src/nav',

  TYPES: {
    BASIC_PAGE: 'page',
    LANDING_PAGE: 'landing_page',
    API_DOC: 'api_doc',
    RELEASE_NOTE: 'release_notes',
    RELEASE_NOTE_PLATFORM: 'release_notes_platform',
    TROUBLESHOOTING: 'troubleshooting_doc',
    WHATS_NEW: 'nr1_announcement',
    ATTRIBUTE_DEFINITION: 'attribute_definition',
  },

  ITEMS_PER_TYPE: {
    page: '170',
    landing_page: '40',
    api_doc: '60',
    release_notes: '170',
    release_notes_platform: '50',
    troubleshooting_doc: '60',
    nr1_announcement: '20',
    attribute_definition: '100',
  },
};
