// same code implemented in main newrelic.com website
const updateCookieConsentMessage = () => {
    if(window.Osano && window.Osano.cm) {
      Osano.cm.addEventListener('osano-cm-initialized', () => {
        const osanoMessage = document.querySelector('.osano-cm-content__message.osano-cm-message');
        if (!osanoMessage) {
          return;
        }
        const replacements = {
          'Privacy Notice': '<a href="https://newrelic.com/termsandconditions/privacy" target="_blank">Privacy Notice</a>',
          'Website Terms of Use': '<a href="https://newrelic.com/termsandconditions/website-terms" target="_blank">Website Terms of Use</a>',
        };
        Object.entries(replacements).forEach(([text, replacementHTML]) => {
          osanoMessage.innerHTML = osanoMessage.innerHTML.replace(text, replacementHTML);
        });
        if (osanoMessage.innerHTML.includes(privacyLinkHTML)) {
          privacyLinkElement.style.display = 'none';
        }
      });
    }
  }

  module.exports = { updateCookieConsentMessage };