const onRouteUpdate = ({ location, prevLocation }) => {
  console.log(`HASH ${window.location}`);
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.addPageAction('hash_request', { hash: location.hash });
  }
  anchorScroll(location);
};

function anchorScroll(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      // document.querySelector(${location.hash}).scrollIntoView({ behavior: 'smooth', block: 'start' });
      const item = document.querySelector(`${location.hash}`).offsetTop;
      const mainNavHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: item - mainNavHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
}
export default onRouteUpdate;
