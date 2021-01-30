const fs = require('fs');

const DATA_FILE = 'src/data/taxonomy-redirects.json';

/*
query for the taxonomy information (new resource in dupal)
drupal = taxonomy
  nested
  SHOULD map to the file system (IA updates might mess with this)
  Nah, IA should only impact nav
gatsby = file system
we will need to add the redirects at build time
  this is when we create these index pages
  we will need to know the redirects and the information about each term
    URL / path
    what will redirect to it
we will need to save the information to the file system and check it in
  this is not the most ergonomic setup for content creators
  side-effect of making the index pages dynamic
"/accounts/accounts/account-maintance": [
    'from-page-1',
    'from-page-2
 ]
 */

module.exports = (redirects) => {
  const taxonomyRedirects = Object.entries(redirects)
    .filter(([url]) => url.startsWith('/taxonomy'))
    .map(([url, paths]) => ({ url, paths }));

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(taxonomyRedirects, null, 2),
    'utf-8'
  );
};
