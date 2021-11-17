---
name: networkDownlink
type: attribute
events:
  - PageViewTiming
---

This is the estimated effective bandwidth in megabits per second at the time the PageViewTiming event was captured. This value will only be reported with the `largestContentfulPaint` and `firstInteraction` events on compatible browsers.

The value is captured from the NetworkInformation API. For a full browser compatibility table and description see MDN Web Docs: [NetworkInformation.downlink](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink)
