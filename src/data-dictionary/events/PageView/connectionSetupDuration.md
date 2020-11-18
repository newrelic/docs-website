---
name: connectionSetupDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The time to establish a connection with the server in seconds (inclusive of secureHandshakeDuration). Derived from the Navigation Timing API as connectEnd minus connectStart.