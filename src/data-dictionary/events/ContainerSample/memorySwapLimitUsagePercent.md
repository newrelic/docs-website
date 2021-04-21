---
name: memorySwapLimitUsagePercent
type: attribute
units: percentage (%)
events:
  - ContainerSample
---

This metric is calculated as the memorySwapUsageBytes percentage over the memorySwapLimitBytes if the limit exist.