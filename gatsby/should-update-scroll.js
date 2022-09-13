const shouldUpdateScroll = (
  { routerProps, getSavedScrollPosition, prevRouterProps },
  themeOptions
) => {
  // Ensures no scrolling ever when search modal is open
  const params = new URLSearchParams(window?.location?.search);
  if (params.has('q')) {
    return false;
  }

  // If the 'shouldUpdateScroll' theme option exists and is one of the listed routes
  // OR if a user is changing pages/urls, allow for scrolling to top...
  if (
    routerProps?.location?.pathname !== prevRouterProps?.location?.pathname ||
    (themeOptions?.shouldUpdateScroll &&
      themeOptions.shouldUpdateScroll.routes.some((route) =>
        routerProps?.location?.pathname.startsWith(route)
      ))
  ) {
    const currentPosition = getSavedScrollPosition(routerProps?.location);
    return currentPosition || [0, 0];
  }
  // ...otherwise, don't
  return false;
};

export default shouldUpdateScroll;
