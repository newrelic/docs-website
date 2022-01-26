---
name: subAccountName
type: attribute
events:
  - NrDailyUsage
  - NrUsage
---

Name of the child account (also known as the sub-account) responsible for stored events. When present, this is the same as `consumingAccountName`.

This attribute is only present if the consuming account is a child account (not a parent account).