---
name: firstInputDelay
units: milliseconds (ms)
events:
  - PageViewTiming
---

The first input delay measures the duration from the first interaction to the moment the web application responds, rounded down to the nearest millisecond. First Input Delay and First Interaction are recorded on the same event, when the timingName value is firstInteraction.

The first input delay measures the duration from the first interaction to the moment the web application responds. The duration is rounded down to the nearest millisecond. This attribute only occurs when the value of the `timingName` attribute is `firstInteraction`.

The `firstInputDelay` goes one step beyond `firstInteraction`. It measures how long the user has to wait until their action is registered and they receive the expected response from the browser.

The `firstInputDelay` metric requires the [`addEventListener` Browser API](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). This API is available in all modern browsers, including:

*   Apple Safari
*   Google Chrome
*   Microsoft Internet Explorer (IE) versions 9 or higher
*   Mozilla Firefox

For more information, see the [`PageViewTiming` documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details).