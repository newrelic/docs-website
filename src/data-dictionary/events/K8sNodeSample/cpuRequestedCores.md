---
name: cpuRequestedCores
type: attribute
units: count
events:
  - K8sNodeSample
---

Total amount of CPU cores requested from all containers on a node.

This metric includes CPU cores requested for containers that are no longer running. To see CPU cores requested from only running containers, filter for `status = 'Running'`, or refer to the metric [`cpuRequestedCores` in the `K8sContainerSample` metrics table](/attribute-dictionary/?event=K8sContainerSample&attribute=cpuRequestedCores). 
