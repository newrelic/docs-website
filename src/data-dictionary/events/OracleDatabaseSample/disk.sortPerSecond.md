---
name: disk.sortPerSecond
type: attribute
events:
  - OracleDatabaseSample
---

Number of sorts going to disk per second for this sample period.

For best performance, most sorts should occur in memory, because sorts to disks are expensive to perform. If the sort area is too small, extra sort runs will be required during the sort operation. This increases CPU and I/O resource consumption.

This test checks the number of sorts performed to disk per second. If the value is greater than or equal to the threshold values specified by the threshold arguments, and the number of occurrences exceeds the value specified in the "Number of Occurrences" parameter, then a warning or critical alert is generated.

See [OracleDB monitoring integration](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/oracledb-monitoring-integration) for information about the OracleDatabaseSample event.