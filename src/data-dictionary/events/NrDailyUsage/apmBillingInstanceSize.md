---
name: apmBillingInstanceSize
type: attribute
events:
  - NrDailyUsage
---

Size of the host, for CU-based billing purposes.

Calculated as apmProcessorCount plus (apmMemoryBytes/(1024^3)), or the number of processors plus memory (GiB).