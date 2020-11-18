---
name: hostId
type: attribute
units: ID
events:
  - NrDailyUsage
---

ID used to uniquely identify the host for which this usage is reported.

Any given hour of APM usage for this host will be counted only once when calculating apmHoursUsed. There are several possible host identifiers reported by the New Relic agent. The attributes, if present, will be chosen to use in this order of precedence: cloudInstanceId, bootId, agentHostname.