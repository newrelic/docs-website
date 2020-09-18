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
};
