---
name: httpResponseCode
type: attribute
units: enum
events:
  - Transaction
  - TransactionError
  - NrIntegrationError
---

The HTTP response code associated with the transaction. Some agents use `http.statusCode`, which is equivalent.