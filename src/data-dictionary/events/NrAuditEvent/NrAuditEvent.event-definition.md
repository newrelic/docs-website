---
name: NrAuditEvent
type: event
dataSources:
  - Account Usage
---

An NrAuditEvent is created by New Relic services to record configuration changes made in New Relic products. The data gathered for this event includes the type of account change, actor (user or API key) that made the change, a human-readable description of the action taken, and a timestamp for the change.