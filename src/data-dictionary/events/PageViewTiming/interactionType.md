---
name: interactionType
type: attribute
events:
  - PageViewTiming
---

The event type of the first interaction that occurs on the web application. The type can be one of the following:

*   `pointerdown`
*   `mousedown`
*   `click`
*   `keydown`
*   `touchstart`

This attribute only occurs when the value of the `timingName` attribute is `firstInteraction`. For more information, see the [`PageViewTiming` documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details).