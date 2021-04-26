---
name: memoryUsageBytes
type: attribute
units: bytes (B)
events:
  - ContainerSample
---

This metric doesn't account for swap usage.

**Breaking change**: This metric used to include swap memory in `nri-docker` v1.5.0 and earlier (infrastructure agent `1.16.x` and earlier). The amount of used memory including swap is now reported as `memorySwapUsageBytes`.
