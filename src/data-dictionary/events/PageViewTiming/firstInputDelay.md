---
name: firstInputDelay
type: attribute
units: milliseconds (ms)
events:
  - PageViewTiming
---

The first input delay measures the duration from the first interaction to the moment the web application responds. The duration is rounded down to the nearest millisecond. This attribute only occurs when the value of the `timingName` attribute is `firstInteraction`.

The `firstInputDelay` goes one step beyond `firstInteraction`. It measures how long the user has to wait until their action is registered and they receive the expected response from the browser.

For more information, see the [`PageViewTiming` documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/#interactivity-metrics).