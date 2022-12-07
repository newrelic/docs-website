const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.Tessen &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.Tessen.track({
      eventName: 'hashRequest',
      category: 'AnchorClick',
      pathname: location.pathname,
      hash: location.hash,
    });
  }
};

export default onRouteUpdate;
