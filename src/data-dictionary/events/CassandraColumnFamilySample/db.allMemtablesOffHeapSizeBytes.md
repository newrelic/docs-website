---
name: db.allMemtablesOffHeapSizeBytes
type: attribute
units: bytes (B)
events:
  - CassandraColumnFamilySample
---

Total number of bytes stored in the memtables (2i and pending flush memtables included) that resides off-heap.