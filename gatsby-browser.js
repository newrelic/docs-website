import { checkUrlAnchor, addUrlAnchor } from './src/components/checkUrlAnchor';

export const onClientEntry = () => checkUrlAnchor();
export const onPreRouteUpdate = () => addUrlAnchor();
export { default as onRouteUpdate } from './gatsby/on-route-update';
export { default as wrapPageElement } from './gatsby/wrap-page-element';
