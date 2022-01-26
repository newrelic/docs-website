---
name: masterAccountName
type: attribute
events:
  - NrDailyUsage
  - NrConsumption
  - NrUsage
---

Name of the parent account (also known as the master account) that's either responsible for stored events, or that is the parent of the consuming account.

When a parent account is the consuming account, `masterAccountName` is the same as `consumingAccountName`. This attribute is present even for accounts that don't have a parent account. This is to ensure continued reporting if the account is later made a parent account.