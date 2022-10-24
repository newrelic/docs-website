const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  getSavedScrollPosition,
}) => {
  if (
    routerProps?.location?.pathname.startsWith('/install/') &&
    routerProps?.location?.pathname === prevRouterProps?.location?.pathname
  ) {
    return false;
  }
  const currentPosition = getSavedScrollPosition(routerProps?.location);
  return currentPosition || [0, 0];
};

export default shouldUpdateScroll;
