---
name: networkEffectiveType
type: attribute
events:
  - PageViewTiming
---

This is the effective connection type ('slow-2g', '2g', '3g' or '4g'), of the current network connection at the time the PageViewTiming event was captured. This value will only be reported with the `largestContentfulPaint` and `firstInteraction` events on compatible browsers.

The value is captured from the NetworkInformation API. For a full browser compatibility table and description see MDN Web Docs: [NetworkInformation.effectiveType](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType). See also [Effective connection type](https://developer.mozilla.org/en-US/docs/Glossary/Effective_connection_type) for a description of each type.
