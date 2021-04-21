---
name: memoryUsageLimitPercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

This metric is calculated as the memoryUsageBytes percentage over the memorySizeLimitBytes if the limit exist.

**Breaking change**: This metric is calculated using the total memory + swap over the memorySizeLimitBytes on versions <= v1.5.0 of nri-docker