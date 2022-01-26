---
name: masterAccountId
type: attribute
units: ID
events:
  - NrDailyUsage
  - NrConsumption
  - NrMTDConsumption
  - NrUsage
---

The ID of the parent account (also known as the master account) that's either responsible for stored events or that is the parent of the consuming account.

When a parent account is the consuming account, `masterAccountId` is the `consumingAccountId`. This attribute is present even for accounts that don't have a parent account. This is to ensure continued reporting if the account is later made a parent account.