---
name: masterAccountName
type: attribute
events:
  - NrDailyUsage
  - NrConsumption
  - NrUsage
---

Name of the master account that is either responsible for stored events, or that is the parent of the consuming account.

When a master account is the consuming account, masterAccountName is the consumingAccountName. This attribute is present even for accounts that do not have a master account. This is to ensure continued reporting if the account is later made a master account.