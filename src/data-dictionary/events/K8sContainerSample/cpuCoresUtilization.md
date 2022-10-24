---
name: cpuCoresUtilization
type: attribute
units:
events:
  - K8sContainerSample
---

Percentage of CPU cores actually used by the container with respect to the CPU limit specified. This percentage is based on this calculation: (`cpuUsedCores` / `cpuLimitCores`) * 100.