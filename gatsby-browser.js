const { updateCookieConsentMessage } = require('./scripts/utils/updateCookieConsentMessage');
require('katex/dist/katex.min.css');

export { default as onRouteUpdate } from './gatsby/on-route-update';

export const onInitialClientRender = () => {
    updateCookieConsentMessage();
}
