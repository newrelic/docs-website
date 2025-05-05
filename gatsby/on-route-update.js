const { updateCookieConsentMessage } = require('../scripts/utils/updateCookieConsentMessage');

const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.setCustomAttribute(`hashRequest`, location.hash);
  }

  updateCookieConsentMessage();
};

export default onRouteUpdate;
