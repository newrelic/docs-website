export const TYPES = {
  BASIC_PAGE: {
    default: 'page',
    apiDoc: 'api_doc',
    troubleshooting: 'troubleshooting_doc',
  },
  LANDING_PAGE: 'term_page_landing_page',
  RELEASE_NOTE: 'release_notes',
  WHATS_NEW: 'nr1_announcement',
  ATTRIBUTE_DEFINITION: 'attribute_definition',
  EVENT_DEFINITION: 'event_definition',
  API_LANDING_PAGE: 'term_page_api_menu',
  TABLE_OF_CONTENTS: 'views_page_menu',
  AUTO_INDEX_PAGE: 'views_page_menu',
  ATTRIBUTE_DICTIONARY: 'views_page_content',
  WHATS_NEW_PAGE: 'views_page_content',
  SITE_SEARCH_SCRIPT: `{
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://docs.newrelic.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://docs.newrelic.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }`,
};
