---
name: schedulerPendingPodsBackoff
type: attribute
units: count
events:
  - K8sSchedulerSample
---

Number of pending pods in the backoff queue (requires k8s v1.23+).