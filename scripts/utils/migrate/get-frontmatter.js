const frontmatter = require('@github-docs/frontmatter');
const { TYPES } = require('../../constants');

const GATSBY_CONTENT_TYPES = {
  [TYPES.BASIC_PAGE]: 'page',
  [TYPES.LANDING_PAGE]: 'landingPage',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
  [TYPES.TROUBLESHOOTING]: 'troubleshootingDoc',
  [TYPES.WHATS_NEW]: 'nr1Announcement',
};

const GATSBY_TEMPLATE = {
  [TYPES.BASIC_PAGE]: 'basicDoc',
  [TYPES.LANDING_PAGE]: 'basicDoc',
  [TYPES.API_DOC]: 'basicDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
  [TYPES.TROUBLESHOOTING]: 'basicDoc',
  [TYPES.WHATS_NEW]: 'whatsNew',
};

const getFrontmatter = (doc) => {
  const { type } = doc;

  const defaultFrontmatter = {
    title: doc.title.replace(':', '-'),
    contentType: GATSBY_CONTENT_TYPES[type],
    template: GATSBY_TEMPLATE[type],
    topics: getTopics(doc),
  };

  const customFrontmatter = addCustomFrontmatter[type]
    ? addCustomFrontmatter[type](doc)
    : {};

  return frontmatter.stringify('', {
    ...defaultFrontmatter,
    ...customFrontmatter,
  });
};

const addCustomFrontmatter = {
  [TYPES.BASIC_PAGE]: (doc) => {
    return {
      japaneseVersion:
        doc.japaneseVersionExists === 'yes'
          ? `https://docs.newrelic.co.jp/${doc.url}`
          : '',
    };
  },
  [TYPES.TROUBLESHOOTING]: (doc) => {
    return {
      japaneseVersion:
        doc.japaneseVersionExists === 'yes'
          ? `https://docs.newrelic.co.jp/${doc.url}`
          : '',
    };
  },
  [TYPES.RELEASE_NOTE]: (doc) => {
    return {
      releaseDateTime: doc.releasedOn || '',
      releaseVersion: doc.releaseVersion || '',
      downloadLink: doc.downloadLink || '',
    };
  },
  [TYPES.RELEASE_NOTE_PLATFORM]: (doc) => {
    return {
      releaseDateTime: doc.releasedOn || '',
      releaseImpact: doc.releaseImpact || [],
    };
  },
  [TYPES.WHATS_NEW]: (doc) => {
    return {
      summary: doc.summary || '',
      learnMoreLink: doc.learnMoreLink || '',
      getStartedLink: doc.getStartedLink || '',
    };
  },
};

const getTopics = (doc) => {
  const topics = Object.entries(doc).reduce(
    (topics, [key, value]) =>
      key.startsWith('topic_') ? [...topics, value] : topics,
    []
  );
  return topics.length ? topics : '';
};

module.exports = getFrontmatter;
