---
name: apmMemoryBytes
units: bytes (B)
events:
  - NrDailyUsage
---

Bytes of RAM available to the host. Used to calculate apmBillingInstanceSize.

The value of one of these attributes will be used: apmCloudDerivedMemoryBytes, apmAgentMemoryBytes.