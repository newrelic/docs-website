const fs = require('fs');
const path = require('path');

const fetchJaDocs = async () => {
  const doc = await fs.readFile(
    path.join(__dirname, 'ja.html'),
    null,
    (_error, html) => {
      console.log(html);
    }
  );
  return doc;
};

module.exports = fetchJaDocs;
