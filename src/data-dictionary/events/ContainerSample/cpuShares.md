---
name: cpuShares
type: attribute
units: count
events:
  - ContainerSample
---

Number of CPU shares assigned to the container; increase or reduce the container's weight and give access to greater or lesser host machine CPU cycles. Weight may differ between cgroups v1 and cgroups v2.
