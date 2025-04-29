// same code implemented in main newrelic.com website
const updateCookieConsentMessage = () => {
    if(window.Osano && window.Osano.cm) {
      Osano.cm.addEventListener('osano-cm-initialized', () => {
        const osanoMessage = document.querySelector('.osano-cm-content__message.osano-cm-message');
        if (!osanoMessage) {
          return;
        }
        const privacyLinkElement = document.querySelector('.osano-cm-storage-policy');
        if (!privacyLinkElement) {
          return;
        }
        const privacyLinkHTML = privacyLinkElement.outerHTML;
        const replacements = {
          'Privacy Notice': privacyLinkHTML,
          'Website Terms of Use': '<a href="https://newrelic.com/termsandconditions/website-terms" target="_blank" class="osano-cm-content__link osano-cm-link">Website Terms of Use</a>',
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