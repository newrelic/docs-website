---
name: firstInteraction
type: attribute
units: seconds (s)
events:
  - PageViewTiming
---

First interaction is a timing that captures when customers begin to engage with a website, such as clicking a button or typing in a box. The first interaction timing is rounded down to the nearest second. This attribute only occurs when the value of the `timingName` attribute is `firstInteraction`.

Events are handled at the document level with `addEventListener()`. Clicking an empty page will cause an interaction to fire. Valid event `type` values include:

*   `pointerdown`
*   `mousedown`
*   `click`
*   `keydown`
*   `touchstart`

Note that this attribute represents the time of the event; to know which event triggered it, use `interactionType`.

For more information, see the [`PageViewTiming` documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/#interactivity-metrics).