const { updateCookieConsentMessage } = require('./scripts/utils/updateCookieConsentMessage');

export { default as onRouteUpdate } from './gatsby/on-route-update';

export const onInitialClientRender = () => {
    updateCookieConsentMessage();
}
