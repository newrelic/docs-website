---
name: domComplete
type: attribute
units: milliseconds (ms)
events:
  - SyntheticRequest
---

The time from the start of the interaction to the domComplete, as defined by the Navigation Timing API. This attribute exists for initial page load events, not route changes.

For more information on timestamps, see [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp).

For more information on document readiness status, see [Parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html#the-end).

Google's [Navigation and Resource Timing Load Performance Assessment](https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing) contains detailed information about its Navigation Timing API and `domComplete`.