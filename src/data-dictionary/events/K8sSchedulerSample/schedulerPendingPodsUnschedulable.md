---
name: schedulerPendingPodsUnschedulable
type: attribute
units: count
events:
  - K8sSchedulerSample
---

Number of pending pods in the unschedulable queue (requires k8s v1.23+).