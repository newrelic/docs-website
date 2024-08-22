export const TYPES = {
  BASIC_PAGE: {
    default: 'page',
    apiDoc: 'api_doc',
    troubleshooting: 'troubleshooting_doc',
  },
  LANDING_PAGE: 'term_page_landing_page',
  RELEASE_NOTE: 'release_notes',
  WHATS_NEW: 'nr1_announcement',
  EOL: 'nr1_announcement',
  ATTRIBUTE_DEFINITION: 'attribute_definition',
  EVENT_DEFINITION: 'event_definition',
  API_LANDING_PAGE: 'term_page_api_menu',
  TABLE_OF_CONTENTS: 'views_page_menu',
  AUTO_INDEX_PAGE: 'views_page_menu',
  WHATS_NEW_PAGE: 'views_page_content',
  EOL_PAGE: 'views_page_content',
  INTERACTIVE_INSTALL_PAGE: 'interactive_install_page',
};

// WARNING: these need to match the questions in src/i18n/translations/en/translation.json
export const SUPRQ_QUESTIONS = {
  q1: 'The information on the docs site is credible.',
  q2: 'The information in the docs is trustworthy.',
  q3: 'The docs site is easy to use.',
  q4: 'The docs site has a clean and simple presentation.',
  q5: 'I will likely visit the docs site in the future.',
  q6: "It's easy to navigate within the docs.",
  q7: 'I found the docs site to be attractive.',
  q8: "New Relic's docs read as if a friend is explaining things to me.",
};
