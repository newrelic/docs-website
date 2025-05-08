/**
 * since our English site serves content from our i18n sites,
 * assets on those sites need to be prefixed with their site URL,
 * otherwise they'll fail to load.
 */
const assetPrefix = () => {
  if (process.env.BUILD_LANG === 'jp') {
    return 'https://docs-website-jp.netlify.app';
  }
  if (process.env.BUILD_LANG === 'kr') {
    return 'https://docs-website-kr.netlify.app';
  }
  if (process.env.BUILD_LANG === 'es') {
    return 'https://docs-website-es.netlify.app';
  }
  if (process.env.BUILD_LANG === 'pt') {
    return 'https://docs-website-pt.netlify.app';
  }
  if (process.env.BUILD_LANG === 'fr') {
    return 'https://docs-website-fr.netlify.app';
  }
  return '';
};

module.exports = {
  assetPrefix,
};
