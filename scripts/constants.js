const path = require('path');

module.exports = {
  BASE_URL: 'https://docs-dev.newrelic.com/api/migration/content',
  BASE_DIR: path.join(__dirname, '..', 'src/content'),

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
};
