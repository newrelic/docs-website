const path = require('path');

module.exports = {
  CONTENT_DIR: 'src/content',
  NAV_DIR: 'src/nav',
  DICTIONARY_DIR: 'src/data-dictionary',
  BASE_URL: 'https://docs-dev.newrelic.com',
  WHATS_NEW_DIR: 'src/content/whats-new',
  DATA_DIR: 'src/data',

  // IDS for page nodes that we want to ensure get migrated
  DIRECT_IDS: [
    10916,
    14746,
    23906,
    38731,
    37621,
    39861,
    23781,
    27301,
    36516,
    38811,
  ],

  INSTRUCTIONS: {
    ADD: 'ADD',
    MOVE: 'MOVE',
    RENAME: 'RENAME',
    REMOVE: 'REMOVE',
    DUPLICATE: 'DUPLICATE',
    UPDATE: 'UPDATE',
    REORDER: 'REORDER',
  },

  TYPES: {
    BASIC_PAGE: 'page',
    LANDING_PAGE: 'landing_page',
    API_DOC: 'api_doc',
    RELEASE_NOTE: 'release_notes',
    TROUBLESHOOTING: 'troubleshooting_doc',
    WHATS_NEW: 'nr1_announcement',
    ATTRIBUTE_DEFINITION: 'attribute_definition',
    EVENT_DEFINITION: 'event_definition',
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

  MAX_PAGES_PER_TYPE: {
    page: 6,
    landing_page: Infinity,
    api_doc: Infinity,
    release_notes: Infinity,
    troubleshooting_doc: Infinity,
    nr1_announcement: Infinity,
  },
};
