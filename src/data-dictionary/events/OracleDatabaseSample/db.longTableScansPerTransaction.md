---
name: db.longTableScansPerTransaction
type: attribute
events:
  - OracleDatabaseSample
---

The number of long table scans per second during sample period. A table is considered 'long' if the table is not cached and if its high-water mark is greater than 5 blocks.