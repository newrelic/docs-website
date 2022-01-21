module.exports = {
  CONTENT_DIR: 'src/content',
  NAV_DIR: 'src/nav',
  NAV_JP_DIR: 'src/i18n/nav',
  DICTIONARY_DIR: 'src/data-dictionary',
  BASE_URL: 'https://docs-dev.newrelic.com',
  BASE_JP_URL: 'https://docs.newrelic.co.jp',
  WHATS_NEW_DIR: 'src/content/whats-new',
  DATA_DIR: 'src/data',
  JP_DIR: 'src/i18n/content/jp',

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
    page: Infinity,
    landing_page: Infinity,
    api_doc: Infinity,
    release_notes: Infinity,
    troubleshooting_doc: Infinity,
    nr1_announcement: Infinity,
  },
};
