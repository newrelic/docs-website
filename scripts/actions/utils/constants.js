// This should be in the format {localeKey: locale} across scripts
const LOCALE_IDS = {
  jp: 'ja-JP',
  kr: 'ko-KR',
  es: 'es-LA',
  pt: 'pt-BR',
};

const LOCALES = Object.keys(LOCALE_IDS);

const EXCLUSIONS_FILE =
  'scripts/actions/utils/docs-content-tools/i18n-exclusions.yml';

module.exports = {
  LOCALE_IDS,
  LOCALES,
  EXCLUSIONS_FILE,
};
