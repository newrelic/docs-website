const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.addPageAction('hash_request', { hash: location.hash });
  }
};

export default onRouteUpdate;
