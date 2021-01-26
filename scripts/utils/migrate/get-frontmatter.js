const frontmatter = require('@github-docs/frontmatter');
const { TYPES, JP_DIR } = require('../constants');
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

const getFrontmatter = (file) => {
  const {
    data,
    data: {
      doc,
      doc: { type },
      redirects,
    },
  } = file;

  const defaultFrontmatter = {
    title: doc.title,
    contentType: GATSBY_CONTENT_TYPES[type],
    template: GATSBY_TEMPLATE[type],
  };

  const customFrontmatter = addCustomFrontmatter[type]
    ? addCustomFrontmatter[type](data, defaultFrontmatter, file)
    : {
        ...defaultFrontmatter,
        translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
      };

  if (redirects.length) {
    customFrontmatter.redirects = redirects;
  }

  if (file.path.includes(JP_DIR)) {
    delete customFrontmatter.translate;
  }

  return frontmatter.stringify('', stripNulls(customFrontmatter), {
    lineWidth: Infinity,
  });
};

const addCustomFrontmatter = {
  [TYPES.LANDING_PAGE]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.API_DOC]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    shortDescription: doc.shortDescription.trim(),
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.BASIC_PAGE]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.TROUBLESHOOTING]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.RELEASE_NOTE]: ({ doc }, _, file) => {
    const match = doc.title.match(/^(.*?)v?\d+(\.\d+){0,3}/);

    if (!match) {
      file.message(
        `Unable to extract subject: ${doc.title}`,
        null,
        'get-frontmatter'
      );
    }

    const subject = match ? match[1].trim() : doc.title.trim();

    return {
      subject: normalizeSubject(subject),
      releaseDate: doc.releasedOn.split(' ')[0],
      version: doc.releaseVersion.replace(/^v/i, ''),
      downloadLink: doc.downloadLink,
      template: file.path.match(/src\/content\/docs\/release-notes/)
        ? null
        : 'releaseNote',
      translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
    };
  },
  [TYPES.WHATS_NEW]: ({ doc }) => ({
    title: doc.title,
    summary: doc.summary ? he.decode(doc.summary).trim() : null,
    releaseDate: doc.releaseDateTime.split(' ')[0],
    learnMoreLink: doc.learnMoreLink,
    getStartedLink: doc.getStartedLink,
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.ATTRIBUTE_DEFINITION]: ({ doc }) => ({
    name: doc.title,
    type: 'attribute',
    units: doc.units
      ? doc.units.replace('<b>Unit of measurement:</b>', '').trim()
      : null,
    events: doc.eventTypes,
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
  [TYPES.EVENT_DEFINITION]: ({ doc }) => ({
    name: doc.name,
    type: 'event',
    dataSources: doc.dataSources,
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
  }),
};

const normalizeSubject = (subject) => {
  const replacements = [
    [/ios/i, 'iOS'],
    [/(?<=\s)Agent/, 'agent'],
    [/node(?=\s)/i, 'Node.js'],
    ['Private Minion', 'private minion'],
    [/^NET/, '.NET'],
    [/infrastructure\s(\w+\s)?agent/i, 'infrastructure $1agent'],
    [/java/, 'Java'],
  ];

  return replacements.reduce(
    (str, [regex, replacement]) => str.replace(regex, replacement),
    subject
  );
};

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

const listOrNull = (arr) => (arr.length === 0 ? null : arr);

module.exports = getFrontmatter;
