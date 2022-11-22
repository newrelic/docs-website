export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
export { default as shouldUpdateScroll } from './gatsby/should-update-scroll';
const onClientEntry = () => {
  // Expose both globals so that the NR1 docs can read it.
  window.__webpack_public_path__ = 'https://docs-dev.newrelic.com/';
};

export { onClientEntry };
