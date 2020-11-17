---
name: subAccountId
units: ID
events:
  - NrDailyUsage
---

ID of the sub-account that is responsible for the stored event. When this attribute is present, subAccountId is the consumingAccountId.

This attribute is only present if the consuming account is a sub-account (not a master account).