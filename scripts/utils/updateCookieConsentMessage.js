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
          'Privacy Notice': '<a href="https://newrelic.com/termsandconditions/privacy" target="_blank" style="color: white;">Privacy Notice</a>',
          'Website Terms of Use': '<a href="https://newrelic.com/termsandconditions/website-terms" target="_blank" style="color: white;">Website Terms of Use</a>',
        };
        Object.entries(replacements).forEach(([text, replacementHTML]) => {
          osanoMessage.innerHTML = osanoMessage.innerHTML.replace(text, replacementHTML);
        });
        const consentDialogBox = document.querySelector('.osano-cm-dialog__content.osano-cm-content')
        if (!consentDialogBox) {
          return;
        }
        const consentDialogBoxHTML = consentDialogBox.outerHTML;
        if(consentDialogBoxHTML.includes(privacyLinkElement)) {
          privacyLinkElement.style.display = 'none';
        }
      });
    }
  }

  module.exports = { updateCookieConsentMessage };