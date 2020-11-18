---
name: usageType
type: attribute
events:
  - NrDailyUsage
---

For APM, this value can be either Application or Host, depending on the type of entity this event records usage for (other New Relic products will have different values for usageType).

Events with both values are recorded so that usage data can be analyzed in several ways. For Application: the event represents usage for a single unique application instance for that day. For Host: the event represents usage for a single unique host for that day. Only Host entities are used to calculate billable usage. Application entities are useful for comparing usage between applications, but are not used for billing or contract purposes.