const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.addPageAction('hash_request', { hash: location.hash });
  }

  const hash = prevLocation?.hash;

  if (hash) {
    if (typeof Storage !== 'undefined') {
      const storedHash = window.sessionStorage.getItem('hash');
      console.log(`RETRIEVED: ${storedHash}`);

      if (storedHash) {
        console.log(`DELETING: ${storedHash}`);
        window.sessionStorage.removeItem('hash');
        setTimeout(() => {
          // document.querySelector(${location.hash}).scrollIntoView({ behavior: 'smooth', block: 'start' });
          const item = document.querySelector(`${location.hash}`);
          if (item) {
            item.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
          }
        }, 0);
      }
    }
  }
};

function anchorScroll(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    setTimeout(() => {
      // document.querySelector(${location.hash}).scrollIntoView({ behavior: 'smooth', block: 'start' });
      const item = document.querySelector(`${location.hash}`);
      if (item) {
        item.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      }
    }, 0);
  }
}
export default onRouteUpdate;
