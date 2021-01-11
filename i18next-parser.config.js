module.exports = {
  lexers: {
    js: ['JsxLexer'],
  },
  defaultNamespace: 'translation',
  locales: ['en', 'jp'],
  output: './src/i18n/translations/$LOCALE/translation.json',
  input: ['src/**/*.js'],
};
