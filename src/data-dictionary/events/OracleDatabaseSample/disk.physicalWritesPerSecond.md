---
name: disk.physicalWritesPerSecond
type: attribute
units: count
events:
  - OracleDatabaseSample
---

Number of disk writes per second during the sample period. Extended: yes.

This statistic represents the rate of database blocks written from the SGA buffer cached to disk by the DBWR background process, and from the PGA by processes performing direct writes.

See [OracleDB monitoring integration](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/oracledb-monitoring-integration) for more information about the OracleDatabaseSample event.