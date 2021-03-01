---
name: domProcessingDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The time it takes to parse the HTML into a DOM and retrieve or execute synchronous scripts.

Often includes time for scripts and static assets to be retrieved. Derived from the Navigation Timing API as domContentLoadedEventEnd minus responseStart.