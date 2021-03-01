---
name: dnsLookupDuration
type: attribute
units: seconds (s)
events:
  - PageView
---

The time to resolve the DNS record for the top-level resource (in seconds). Derived from the Navigation Timing API as domainLookupEnd minus domainLookupStart.