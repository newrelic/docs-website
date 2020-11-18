---
name: backendDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The back-end response time in seconds.

Includes app server (webAppDuration) and network time (networkDuration), as well as queue time if available. Representative of Time to First Byte. Derived from the Navigation Timing API as responseStart minus navigationStart.