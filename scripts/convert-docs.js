const fs = require('fs');
const { TYPES } = require('./constants');
const toMarkdown = require('./converters/to-markdown');

// TODO: no magic string
const converters = {
  page: toMarkdown,
  api_doc: toMarkdown,
  release_notes: toMarkdown,
  release_notes_platform: toMarkdown,
  troubleshooting_doc: toMarkdown,
  nr1_announcement: toMarkdown,
  attribute_definition: toMarkdown,
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
