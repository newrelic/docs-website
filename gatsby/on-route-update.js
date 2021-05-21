const onRouteUpdate = ({ location, prevLocation }) => {
  if (
    window.newrelic &&
    location.hash &&
    location.pathname !== prevLocation?.pathname
  ) {
    window.newrelic.addPageAction('hash_request', { hash: location.hash });
  }
  const { hash } = window.location;

    console.log(hash); // will output CODE_FROM_REDIRECT_ON_SERVERSIDE
    if (typeof Storage !== 'undefined') {
        // Code for localStorage/sessionStorage.
        if (!window.sessionStorage.onRouteUpdate) {
        window.sessionStorage.onRouteUpdate = hash;
        }
        console.log(`STORED ${window.sessionStorage}`);
    }
};

export default onRouteUpdate;
