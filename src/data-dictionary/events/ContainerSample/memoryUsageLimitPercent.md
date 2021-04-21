---
name: memoryUsageLimitPercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

This metric is calculated as the `memoryUsageBytes` percentage over `memorySizeLimitBytes`, if the limit exist.

**Breaking change**: This metric is calculated using the total memory + swap over `memorySizeLimitBytes` on versions v1.5.0 or higher of `nri-docker`.