---
name: errorType
type: attribute
events:
  - Transaction
  - TransactionError
---

This will be server and platform specific. The class or classification of the error. If multiple errors occur, only the first will be shown. If an error occurs during a transaction, the error may skew the duration of the event.