---
name: subAccountId
type: attribute
units: ID
events:
  - NrDailyUsage
  - NrUsage
---

ID of the child account (also known as the sub-account) responsible for the stored event. When present, `subAccountId` is the same as `consumingAccountId`.

This attribute is only present if the consuming account is a child account (not a parent account).