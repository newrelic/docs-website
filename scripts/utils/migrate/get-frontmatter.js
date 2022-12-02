const frontmatter = require('@github-docs/frontmatter');
const { TYPES, JP_DIR } = require('../constants');
const he = require('he');

const GATSBY_CONTENT_TYPES = {
  [TYPES.LANDING_PAGE]: 'landingPage',
  [TYPES.API_DOC]: 'apiDoc',
  [TYPES.TROUBLESHOOTING]: 'troubleshooting',
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
    type: GATSBY_CONTENT_TYPES[type],
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
    lineWidth: 9999,
  });
};

const addCustomFrontmatter = {
  [TYPES.LANDING_PAGE]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
    metaDescription: doc.metaDescription ? doc.metaDescription.trim() : null,
  }),
  [TYPES.API_DOC]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    shortDescription: doc.shortDescription.trim(),
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
    metaDescription: doc.metaDescription ? doc.metaDescription.trim() : null,
  }),
  [TYPES.BASIC_PAGE]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
    metaDescription: doc.metaDescription ? doc.metaDescription.trim() : null,
  }),
  [TYPES.TROUBLESHOOTING]: ({ doc, topics }, defaultFrontmatter) => ({
    ...defaultFrontmatter,
    tags: listOrNull(topics),
    translate: doc.japaneseVersionExists === 'yes' ? ['jp'] : null,
    metaDescription: doc.metaDescription ? doc.metaDescription.trim() : null,
  }),
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

const stripNulls = (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value != null));

const listOrNull = (arr) => (arr.length === 0 ? null : arr);

module.exports = getFrontmatter;
