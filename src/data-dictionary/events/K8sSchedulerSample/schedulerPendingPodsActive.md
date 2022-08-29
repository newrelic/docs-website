---
name: schedulerPendingPodsActive
type: attribute
units: count
events:
  - K8sSchedulerSample
---

Number of pending pods in the active queue (requires k8s v1.23+).