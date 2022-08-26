const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.pathname.includes('/install/')) {
    return false;
  }
  const currentPosition = getSavedScrollPosition(location);
  return currentPosition || [0, 0];
};

export default shouldUpdateScroll;
