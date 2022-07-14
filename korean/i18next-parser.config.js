module.exports = {
  lexers: {
    js: ['JsxLexer'],
  },
  defaultNamespace: 'translation',
  locales: ['en', 'ko'],
  output: './i18n/translations/$LOCALE/translation.json',
  input: ['../src/**/*.js'],
};
