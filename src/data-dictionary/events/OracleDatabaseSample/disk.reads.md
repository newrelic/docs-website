---
name: disk.reads
type: attribute
units: count
events:
  - OracleDatabaseSample
---

Number of disk reads per transaction during the sample period. Extended: yes.

When a user performs a SQL query, Oracle tries to retrieve the data from the database buffer cache (memory) first, then goes to disk if it is not in memory already. Reading data blocks from disk is much more expensive than reading the data blocks from memory. The goal with Oracle should always be to maximize memory utilization.

The value of this statistic will be zero if there have not been any write or update transactions committed or rolled back during the last sample period. If the bulk of the activity to the database is read only, the corresponding "per second" metric of the same name will be a better indicator of current performance.

This test checks the data blocks read from disk per transaction. If the value is greater than or equal to the threshold values specified by the threshold arguments, and the number of occurrences exceeds the value specified in the "Number of Occurrences" parameter, then a warning or critical alert is generated.

See [OracleDB monitoring integration](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/oracledb-monitoring-integration) for more information about the OracleDatabaseSample event.