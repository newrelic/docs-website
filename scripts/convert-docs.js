const fs = require('fs');
const { TYPES } = require('./constants');
const toMarkdown = require('./converters/to-markdown');
const toJSON = require('./converters/to-json');

const converters = {
  [TYPES.BASIC_PAGE]: toMarkdown,
  [TYPES.LANDING_PAGE]: toMarkdown,
  [TYPES.API_DOC]: toMarkdown,
  [TYPES.RELEASE_NOTE]: toMarkdown,
  [TYPES.RELEASE_NOTE_PLATFORM]: toMarkdown,
  [TYPES.TROUBLESHOOTING]: toMarkdown,
  [TYPES.WHATS_NEW]: toMarkdown,
  [TYPES.ATTRIBUTE_DEFINITION]: toJSON,
};

const convertDocs = (docs) => {
  docs.flat().forEach((doc) => {
    const { content, fileName } = converters[doc.type](doc);

    // Write the file
    fs.writeFile(fileName, content, (err) => {
      if (err) logger.error(`Could not create ${fileName}.`);
    });
  });
};

module.exports = convertDocs;
