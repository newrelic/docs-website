---
name: closeViolationsOnExpiration
type: attribute
events:
  - NrAiIncident
---

If true, open violations related to the signal are closed on expiration. Default is false. To use this field, an `expirationDuration` must be specified.