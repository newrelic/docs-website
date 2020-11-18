---
name: memory.bufferCacheHitRatio
type: attribute
units: percentage (%)
events:
  - OracleDatabaseSample
---

Data block buffer cache efficiency, as measured by the percentage of times the data block requested by the query is in memory. Extended: yes.

Effective use of the buffer cache can greatly reduce the I/O load on the database. If the buffer cache is too small, frequently accessed data will be flushed from the buffer cache too quickly which forces the information to be re-fetched from disk. Since disk access is much slower than memory access, application performance will suffer. In addition, the extra burden imposed on the I/O subsystem could introduce a bottleneck at one or more devices that would further degrade performance.

See [OracleDB monitoring integration](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/oracledb-monitoring-integration) for information about the OracleDatabaseSample event.