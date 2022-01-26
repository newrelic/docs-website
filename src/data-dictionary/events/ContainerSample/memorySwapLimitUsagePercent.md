---
name: memorySwapLimitUsagePercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

This metric is calculated as the percentage of `memorySwapUsageBytes` over `memorySwapLimitBytes`, if the limit exists.