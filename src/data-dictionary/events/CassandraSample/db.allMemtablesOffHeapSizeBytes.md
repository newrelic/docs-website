---
name: db.allMemtablesOffHeapSizeBytes
type: attribute
units: bytes (B)
events:
  - CassandraSample
---

Total amount of bytes stored in the memtables (2i and pending flush memtables included) that resides on-heap.