---
name: memoryUsageBytes
type: attribute
units: bytes (B)
events:
  - ContainerSample
---

The amount of memory the container is using. This memory does not include swap.

**Breaking change**: This metric includes memory + swap on versions <= v1.5.0 of nri-docker