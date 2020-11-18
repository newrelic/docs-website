---
name: masterAccountId
type: attribute
units: ID
events:
  - NrDailyUsage
  - NrConsumption
  - NrMTDConsumption
---

The ID of the master account that is either responsible for stored events or that is the parent of the consuming account.

When a master account is the consuming account, masterAccountId is the consumingAccountId. This attribute is present even for accounts that do not have a master account. This is to ensure continued reporting if the account is later made a master account.