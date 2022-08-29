---
name: minReplicas
type: attribute
units: count
events:
  - K8sHpaSample
---

Lower limit for the number of pods that can be set by the autoscaler, `1` by default.