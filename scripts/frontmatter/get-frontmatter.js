const frontmatter = require('@github-docs/frontmatter');
const { TYPES } = require('../constants');

const GATSBY_CONTENT_TYPES = {
  [TYPES.BASIC_PAGE]: 'page',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
  [TYPES.TROUBLESHOOTING]: 'troubleshootingDoc',
  [TYPES.WHATS_NEW]: 'nr1Announcement',
};

const GATSBY_TEMPLATE = {
  [TYPES.BASIC_PAGE]: 'basicDoc',
  [TYPES.API_DOC]: 'basicDoc',
  [TYPES.RELEASE_NOTE]: 'basicDoc',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'basicDoc',
  [TYPES.TROUBLESHOOTING]: 'basicDoc',
  [TYPES.WHATS_NEW]: 'basicDoc',
};

const FRONTMATTER_TEMPLATE = {
  [TYPES.BASIC_PAGE]: 'page',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.RELEASE_NOTE_PLATFORM]: 'releaseNotePlatform',
  [TYPES.TROUBLESHOOTING]: 'troubleshooting',
  [TYPES.WHATS_NEW]: 'whatsNew',
};

const getFrontmatter = (type, doc) => {
  const defaultFrontmatter = {
    title: doc.title.replace(':', '-'),
    contentType: GATSBY_CONTENT_TYPES[type],
    template: GATSBY_TEMPLATE[type],
    topics: getTopics(doc),
  };

  return frontmatter.stringify('', {
    ...defaultFrontmatter,
    ...addCustomFrontmatter[FRONTMATTER_TEMPLATE[type]](doc),
  });
};

const addCustomFrontmatter = {
  apiDoc: (doc) => {
    return;
  },
  page: (doc) => {
    return {
      japaneseVersion: doc.japaneseVersionExists === 'yes',
    };
  },
  troubleshooting: (doc) => {
    return {
      japaneseVersion: doc.japaneseVersionExists === 'yes',
    };
  },
  releaseNote: (doc) => {
    return {
      releaseDateTime: doc.releasedOn || '',
      releaseVersion: doc.releaseVersion || '',
      downloadLink: doc.downloadLink || '',
    };
  },
  releaseNotePlatform: (doc) => {
    return {
      releaseDateTime: doc.releasedOn || '',
      releaseImpact: doc.releaseImpact || [],
      downloadLink: doc.downloadLink || '',
    };
  },
  whatsNew: (doc) => {
    return {
      summary: doc.summary || '',
      learnMoreLink: doc.learnMoreLink || '',
      getStartedLink: doc.getStartedLink || '',
    };
  },
};

const getTopics = (doc) => {
  const topics = [];
  for (let i = 1; i < 4; i++) {
    let currTopic = doc[`topic_${i}`];
    if (currTopic) {
      topics.push(currTopic);
    }
  }
  return topics.length ? topics : '';
};

module.exports = getFrontmatter;
