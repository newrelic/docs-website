---
name: disk.writes
units: count
events:
  - OracleDatabaseSample
---

Total number of disk writes per second during the sample period.

This statistic represents the rate of database blocks written from the SGA buffer cached to disk by the DBWR background process, and from the PGA by processes performing direct writes.

This test checks the data blocks written disk per second. If the value is greater than or equal to the threshold values specified by the threshold arguments, and the number of occurrences exceeds the value specified in the "Number of Occurrences" parameter, then a warning or critical alert is generated.

See [OracleDB monitoring integration](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/oracledb-monitoring-integration) for information about the OracleDatabaseSample event.