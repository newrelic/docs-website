const vfile = require('vfile');
const prettier = require('prettier');
const { writeSync } = require('to-vfile');

const format = (code) =>
  prettier.format(code, {
    plugins: [require('prettier/parser-html')],
    parser: 'html',
  });

const createRawHTMLFiles = (files) => {
  files.forEach((file) => {
    let contents = file.data.doc.body || '';

    try {
      contents = format(contents);
    } catch (e) {
      // do nothing
    }

    writeSync(
      vfile({
        contents,
        path: file.path,
        extname: '.html',
      }),
      'utf-8'
    );
  });
};

module.exports = createRawHTMLFiles;
