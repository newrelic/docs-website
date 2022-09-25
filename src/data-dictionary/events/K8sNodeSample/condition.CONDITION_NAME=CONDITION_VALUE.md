---
name: condition.CONDITION_NAME=CONDITION_VALUE
type: attribute
units:
events:
  - K8sNodeSample
---

Status of the current observed node condition. The reported conditions can vary depending on your Kubernetes flavor and installed operators.

Examples of common conditions are: Ready, DiskPressure, MemoryPressure, PIDPressure and NetworkUnavailable.  Condition values can be `1` (true), `0` (false), or `-1` (unknown).