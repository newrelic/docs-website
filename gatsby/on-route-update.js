const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.track({
      eventName: 'hashRequest',
      category: 'AnchorClick',
      pathname: location.pathname,
      hash: location.hash,
    });
  }
};

export default onRouteUpdate;
