---
name: timestamp
type: attribute
events:
  - MobileHandledException
---

Epoch timestamp of the handled exception. This timestamp represents the time New Relic created the event if the occurrence timestamp of the exception is older than than two days or some other unexpected time.