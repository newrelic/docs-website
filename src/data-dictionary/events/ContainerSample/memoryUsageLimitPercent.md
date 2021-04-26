---
name: memoryUsageLimitPercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

This metric is calculated as the `memoryUsageBytes` percentage over `memorySizeLimitBytes`, if the limit exists.
