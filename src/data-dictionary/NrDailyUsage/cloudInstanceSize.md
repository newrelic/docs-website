---
name: cloudInstanceSize
events:
  - NrDailyUsage
---

Size of the cloud instance for this host for CU-based APM billing purposes.

This is calculated according to the formula for apmBillingInstanceSize, using the CPU and memory sizes associated with the instance type defined by the cloud provider. Will not be present if no cloud provider was detected by the agent.