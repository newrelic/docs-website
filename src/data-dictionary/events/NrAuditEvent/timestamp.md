---
name: timestamp
type: attribute
events:
  - NrAuditEvent
  - WorkloadStatus
---

Time that the event occurred or was evaluated over. Specifies a time or range of time. Examples:

* MM-DD-YYYY HH:MM:SS
* SINCE 2018-05-28 11:18:45
* UNTIL 30 minutes ago
* SINCE '2018-06-20' UNTIL today
