---
name: firstInteraction
type: attribute
units: seconds (s)
events:
  - PageViewTiming
---

A timing that captures when customers begin to engage with a website, such as clicking a button or typing in a box, rounded down to the nearest second. Occurs when the timingName value is firstInteraction.

First interaction is a timing that captures when customers begin to engage with a website, such as clicking a button or typing in a box. The first interaction timing is rounded down to the nearest second. This attribute only occurs when the value of the `timingName` attribute is `firstInteraction`.

Events are handled at the document level with `addEventListener()`. Clicking an empty page will cause an interaction to fire. Valid event `type` values include:

*   `pointerdown`
*   `mousedown`
*   `click`
*   `keydown`
*   `touchstart`

For additional details, you can use `firstInputDelay`. It goes one step farther and measures how long the user has to wait until their action is registered and they receive the expected response from the browser.

The `firstInteraction` metric requires the [`addEventListener` Browser API](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). This API is available in all modern browsers, including:

*   Apple Safari
*   Google Chrome
*   Microsoft Internet Explorer (IE) versions 9 or higher
*   Mozilla Firefox

For more information, see the [`PageViewTiming` documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details).