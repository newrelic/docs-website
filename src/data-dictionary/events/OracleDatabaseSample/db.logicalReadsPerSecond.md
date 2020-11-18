---
name: db.logicalReadsPerSecond
type: attribute
events:
  - OracleDatabaseSample
---

The number of logical reads per second during the sample period. A logical read is a read request for a data block from the SGA. Logical reads may result in a physical read if the requested block does not reside with the buffer cache.