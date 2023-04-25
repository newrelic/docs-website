---
name: http.statusCode
type: attribute
units: enum
events:
  - Transaction
  - TransactionError
  - NrIntegrationError
  - Span
---

The HTTP status code associated with the transaction. Some agents use `httpResponseCode`, which is equivalent.
