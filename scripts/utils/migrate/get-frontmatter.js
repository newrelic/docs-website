const frontmatter = require('@github-docs/frontmatter');
const { TYPES } = require('../constants');
const he = require('he');

const GATSBY_CONTENT_TYPES = {
  [TYPES.BASIC_PAGE]: 'page',
  [TYPES.LANDING_PAGE]: 'landingPage',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.TROUBLESHOOTING]: 'troubleshootingDoc',
  [TYPES.WHATS_NEW]: 'nr1Announcement',
};

const GATSBY_TEMPLATE = {
  [TYPES.BASIC_PAGE]: 'basicDoc',
  [TYPES.LANDING_PAGE]: 'landingPage',
  [TYPES.API_DOC]: 'basicDoc',
  [TYPES.RELEASE_NOTE]: 'releaseNote',
  [TYPES.TROUBLESHOOTING]: 'basicDoc',
  [TYPES.WHATS_NEW]: 'whatsNew',
};

const REGEX = {
  MATCH_ON_SEMANTIC_VERSION: /^(.*?)\d+\.\d+(\.\d+){0,2}/,
  MATCH_ON_V_VERSION: /^(.*?)v+\d+/,
};

const getFrontmatter = (file) => {
  const {
    data,
    data: {
      doc,
      doc: { type },
    },
  } = file;

  const defaultFrontmatter = {
    title: doc.title,
    contentType: GATSBY_CONTENT_TYPES[type],
    template: GATSBY_TEMPLATE[type],
  };

  const customFrontmatter = addCustomFrontmatter[type]
    ? addCustomFrontmatter[type](data, defaultFrontmatter, file)
    : defaultFrontmatter;

  return frontmatter.stringify('', customFrontmatter);
};

const addCustomFrontmatter = {
  [TYPES.LANDING_PAGE]: ({ topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    topics,
  }),
  [TYPES.API_DOC]: ({ doc, topics }, defaultFrontmatter) => {
    return {
      ...defaultFrontmatter,
      shortDescription: doc.shortDescription,
      topics,
    };
  },
  [TYPES.BASIC_PAGE]: ({ doc, topics }, defaultFrontmatter) => {
    let japaneseUrl = '';
    if (doc.japaneseVersionExists === 'yes') {
      const url = new URL(doc.docUrl);
      url.hostname = 'docs.newrelic.co.jp';
      japaneseUrl = url.href;
    }
    return {
      ...defaultFrontmatter,
      topics,
      japaneseVersion: japaneseUrl,
    };
  },
  [TYPES.TROUBLESHOOTING]: ({ doc, topics }, defaultFrontmatter) => {
    let japaneseUrl = '';
    if (doc.japaneseVersionExists === 'yes') {
      const url = new URL(doc.docUrl);
      url.hostname = 'docs.newrelic.co.jp';
      japaneseUrl = url.href;
    }
    return {
      ...defaultFrontmatter,
      topics,
      japaneseVersion: japaneseUrl,
    };
  },
  [TYPES.RELEASE_NOTE]: ({ doc }, _, file) => {
    const match = doc.title.match(/^(.*?)v?\d+(\.\d+){0,3}/);

    if (!match) {
      file.message(
        `Unable to extract subject: ${doc.title}`,
        null,
        'get-frontmatter'
      );
    }

    return stripNulls({
      subject: match ? match[1].trim() : doc.title.trim(),
      releaseDate: doc.releasedOn.split(' ')[0],
      version: doc.releaseVersion,
      downloadLink: doc.downloadLink,
      template: file.path.match(/src\/content\/docs\/release-notes/)
        ? null
        : 'releaseNote',
    });
  },
  [TYPES.WHATS_NEW]: ({ doc }) => {
    return stripNulls({
      title: doc.title,
      summary: doc.summary ? he.decode(doc.summary).trim() : null,
      releaseDate: doc.releaseDateTime.split(' ')[0],
      learnMoreLink: doc.learnMoreLink,
      getStartedLink: doc.getStartedLink,
    });
  },
  [TYPES.ATTRIBUTE_DEFINITION]: ({ doc }) => {
    return stripNulls({
      name: doc.title,
      type: 'attribute',
      units: doc.units
        ? doc.units.replace('<b>Unit of measurement:</b>', '').trim()
        : null,
      events: doc.eventTypes,
    });
  },
  [TYPES.EVENT_DEFINITION]: ({ doc }) => ({
    name: doc.name,
    type: 'event',
    dataSources: doc.dataSources,
  }),
};

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

module.exports = getFrontmatter;
