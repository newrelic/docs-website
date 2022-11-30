---
name: leaderElectionMasterStatus
type: attribute
units:
events:
  - K8sControllerManagerSample
---

Gauge of if the reporting system is master of the relevant lease, `0` indicates backup, `1` indicates master.