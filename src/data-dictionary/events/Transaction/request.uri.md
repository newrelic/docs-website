---
name: request.uri
type: attribute
events:
  - Transaction
---

The incoming request path of the transaction. This does not include the protocol, host, port, or any query parameters. This is hardcoded into the JSON for transaction traces and, formerly, the error blobs.