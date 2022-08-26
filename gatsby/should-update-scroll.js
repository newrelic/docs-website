const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (
    location.pathname.includes('/install/') &&
    location.pathname === prevRouterProps.location.pathname
  ) {
    return false;
  }
  const currentPosition = getSavedScrollPosition(location);
  return currentPosition || [0, 0];
};

export default shouldUpdateScroll;
