---
name: unloadEventStart
type: attribute
units: milliseconds (ms)
events:
  - SyntheticRequest
---

The time from the start of the interaction to the unloadEventStart, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.

For more information on timestamps, see [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp).

Google's [Navigation and Resource Timing Load Performance Assessment](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing) contains detailed information about its Navigation Timing API and `unloadEventStart`.