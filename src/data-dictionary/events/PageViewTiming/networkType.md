---
name: networkType
type: attribute
events:
  - PageViewTiming
---

This is the type of the current network connection at the time the PageViewTiming event was captured. This value will only be reported with the `largestContentfulPaint` and `firstInteraction` events on compatible browsers.

The value is captured from the NetworkInformation API. For a full browser compatibility table and description see MDN Web Docs: [NetworkInformation.type](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/type)
