---
name: closeViolationsOnExpiration
type: attribute
events:
  - NrAiIncident
---

If true, open violations on the signal are closed if the signal is lost. Default is false. To use this field, an `expirationDuration` must be specified.