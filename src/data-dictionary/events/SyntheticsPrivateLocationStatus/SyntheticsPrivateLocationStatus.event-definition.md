---
name: SyntheticsPrivateLocationStatus
type: event
dataSources:
  - Synthetics
---

Every monitor check running on a private location triggers capacity details for that private location. These details are captured in a SyntheticPrivateLocationStatus event. This provides visibility into the capacity of a private location and whether additional minions are required to support the workload.