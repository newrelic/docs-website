---
name: memoryUsageBytes
type: attribute
units: bytes (B)
events:
  - ContainerSample
---

The amount of memory the container is using. This memory doesn't include swap.

**Breaking change**: This metric includes memory + swap on versions v1.5.0 or higher of `nri-docker`.