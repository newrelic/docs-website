const path = require('path');

const createLocalizedRedirect = ({
  fromPath,
  toPath,
  locales,
  redirectInBrowser = true,
  isPermanent = true,
  createRedirect,
}) => {
  createRedirect({
    fromPath,
    toPath,
    isPermanent,
    redirectInBrowser,
  });

  locales.forEach((locale) => {
    createRedirect({
      fromPath: path.join(`/${locale}`, fromPath),
      toPath: path.join(`/${locale}`, toPath),
      isPermanent,
      redirectInBrowser,
    });
  });
};

module.exports = createLocalizedRedirect;
