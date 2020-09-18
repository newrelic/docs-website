const path = require('path');

module.exports = {
  BASE_URL: 'https://docs-dev.newrelic.com/api/migration/content',
  BASE_DIR: path.join(__dirname, '..', 'src/content'),

  TYPES: [
    'page',
    'api_doc',
    'release_notes',
    'release_notes_platform',
    'troubleshooting_doc',
    'nr1_announcement',
    'attribute_definition',
  ],

  GATSBY_CONTENT_TYPES: {
    page: 'page',
    api_doc: 'apiDoc',
    release_notes: 'releaseNote',
    release_notes_platform: 'releaseNotePlatform',
    troubleshooting_doc: 'troubleshootingDoc',
    nr1_announcement: 'nr1Announcement',
    attribute_definition: 'attributeDef',
  },

  GATSBY_TEMPLATE: {
    page: 'basicDoc',
    api_doc: 'basicDoc',
    release_notes: 'basicDoc',
    release_notes_platform: 'basicDoc',
    troubleshooting_doc: 'basicDoc',
    nr1_announcement: 'basicDoc',
    attribute_definition: 'basicDoc',
  },
};
