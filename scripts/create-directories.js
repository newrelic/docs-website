const fs = require('fs');
const path = require('path');

const getCategories = require('./utils/get-categories');
const { BASE_DIR } = require('./constants');

const createDirectories = (docs) => {
  docs.flat().forEach((doc) => {
    const dir = path.join(BASE_DIR, ...getCategories(doc.docUrl));

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

module.exports = createDirectories;
