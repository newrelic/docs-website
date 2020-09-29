const fs = require('fs');
const { TYPES } = require('./constants');
const toMarkdown = require('./converters/to-markdown');
const toJSON = require('./converters/to-json');
const prettier = require('prettier');
const logger = require('./utils/logger');

const format = (code) =>
  prettier.format(code, {
    parser: 'html',
    plugins: [require('prettier/parser-html')],
  });

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

    fs.writeFile(fileName, content, (err) => {
      if (err) logger.error(`Could not create ${fileName}.`);
    });

    // Run `DEBUG=true yarn migrate` to also write a `.html` file right next to
    // the `.mdx` file. This can help us look at the original HTML to compare
    // with the generated markdown to ensure we don't miss edge cases. These
    // files should not be committed.
    if (process.env.DEBUG) {
      fs.writeFile(
        fileName.replace('.mdx', '.html'),
        format(doc.body || ''),
        (err) => {
          if (err) {
            logger.error(
              `Could not create ${fileName.replace('.mdx', '.html')}`
            );
          }
        }
      );
    }
  });
};

module.exports = convertDocs;
