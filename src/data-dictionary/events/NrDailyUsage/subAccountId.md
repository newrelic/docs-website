---
name: subAccountId
type: attribute
units: ID
events:
  - NrDailyUsage
  - NrUsage
---

ID of the sub-account responsible for the stored event. When present, subAccountId is the consumingAccountId.

This attribute is only present if the consuming account is a sub-account (not a master account).