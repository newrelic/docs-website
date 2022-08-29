---
name: maxReplicas
type: attribute
units: count
events:
  - K8sHpaSample
---

Upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than `minReplicas`.