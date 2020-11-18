---
name: entityGuid
type: attribute
units: ID
events:
  - Transaction
  - TransactionError
  - Span
  - Logs
---

The GUID, assigned by New Relic, for the New Relic-monitored entity (host, application, etc.). This value is stored as a Base64 encoded value. When querying logs, use entity.guids instead, which is a pipe-separated list of GUIDs.