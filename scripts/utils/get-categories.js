const getCategories = (url) => {
  return url
    .replace('https://docs-dev.newrelic.com/', '')
    .split('/')
    .slice(0, -1);
};

module.exports = getCategories;
