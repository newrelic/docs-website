---
name: secureHandshakeDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

A subset of connectionSetupDuration, the time to establish a TLS connection with the server. Derived from the Navigation Timing API as connectEnd minus secureConnectionStart (in seconds).