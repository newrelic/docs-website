const fs = require('fs');

const uniq = (arr) => [...new Set(arr)];

const createDirectories = (files) => {
  const directories = files.map((f) => f.dirname);

  uniq(directories).forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

module.exports = createDirectories;
