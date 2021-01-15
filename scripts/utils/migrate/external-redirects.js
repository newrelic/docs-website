const fs = require('fs');

const DATA_FILE = 'src/data/external-redirects.json';

module.exports = (redirects) => {
  const externalRedirects = Object.entries(redirects)
    .filter(([url]) => url.startsWith('http'))
    .map(([url, paths]) => ({ url, paths }));

  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(externalRedirects, null, 2),
    'utf-8'
  );
};
