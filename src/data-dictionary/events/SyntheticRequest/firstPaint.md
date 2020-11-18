---
name: firstPaint
type: attribute
units: milliseconds (ms)
events:
  - SyntheticRequest
---

firstPaint marks the point when the browser renders anything that is visually different from what was on the screen prior to navigation. This includes non-default background paint and the enclosing box of an iframe.

Google's [User-centric Performance Metrics](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics) contains detailed information about its Paint Timing API and `firstPaint`.